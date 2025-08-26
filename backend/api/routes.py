from flask import jsonify, Blueprint
import os
import pandas as pd
import openpyxl
import json
# Create a Blueprint to organize routes
api_bp = Blueprint('api', __name__)

# Define the path to your Excel file
# Use a more secure and robust way to manage file paths in a real app
EXCEL_FILE_PATH = os.path.join(os.path.dirname(__file__), '..', 'data', 'PFM_data.xlsx')
def create_taxonomy_bottleneck():
    """
    Create a taxonomy bottleneck from the Excel file.
    """
    try:
        # Read the Excel file into a pandas DataFrame
        df = pd.read_excel(EXCEL_FILE_PATH, sheet_name='Taxonomy-bottlenecks')

        df['Public Finance Bottleneck Group'] = df['Public Finance Bottleneck Group'].ffill()
        # Create an empty dictionary to store the data
        data_dict = {}

        # Iterate over the DataFrame rows
        for _, row in df.iterrows():
            parent_title = row['Public Finance Bottleneck Group']
            child_description = row['PF Bottleneck Description']
            child_title = row['Public Finance Bottleneck']

            # Get the other relevant columns
            data = {'Public Finance Bottleneck': child_title, 'PF Bottleneck Description': child_description}

            # Use .setdefault() to simplify adding new keys
            # If the 'country' key doesn't exist, it creates it with an empty list
            # and then appends the new data
            data_dict.setdefault(parent_title, []).append(data)

        return data_dict
    except FileNotFoundError:
        return {"error": "Data file not found"}, 404
    except Exception as e:
        return {"error": str(e)}, 500
    
def create_flat_data(sheet_name):
    """
    Create a flat data structure from the specified sheet in the Excel file.
    """
    try:
        # Read the Excel file into a pandas DataFrame
        df = pd.read_excel(EXCEL_FILE_PATH, sheet_name=sheet_name)
        return json.loads(df.to_json(orient='records'))
    except FileNotFoundError:
        return {"error": "Data file not found"}, 404
    except Exception as e:
        return {"error": str(e)}, 500

def create_outcome_results():
    """
    Create a flat data structure for outcome results from the Excel file.
    """
    df = pd.read_excel(EXCEL_FILE_PATH, sheet_name='Outcomes & Results')
    data_dict = {}
    parent_title = 'Outcome'
    children = ["Public Sector Results", "Feasible Policy", "Delivery Capability", "Source"]
    for _, row in df.iterrows():
        data = {child: row[child] for child in children}
        data_dict.setdefault(row[parent_title], []).append(data)
    return data_dict

def create_public_sector_challenges():
    df = pd.read_excel(EXCEL_FILE_PATH, sheet_name='Public Sector Challenges')
    data_dict = {}
    parent_title = 'Outcome'
    children = ["Public Sector Challenge", "Description", "Source"]
    for _, row in df.iterrows():
        data = {child: row[child] for child in children}
        data_dict.setdefault(row[parent_title], []).append(data)
    return data_dict

def create_roles_outcomes():
    df = pd.read_excel(EXCEL_FILE_PATH, sheet_name='Roles - Outcome')
    data_dict = {}
    for _, row in df.iterrows():
        outcome = row['Outcome']
        role = row['Role of Public Finance']
        outcome_role = row['Outcome Role'] if pd.notna(row['Outcome Role']) else None
        if outcome not in data_dict:
            data_dict[outcome] = {}
        if role not in data_dict[outcome]:
            data_dict[outcome][role] = []
        if outcome_role and outcome_role not in data_dict[outcome][role]:
            data_dict[outcome][role].append(outcome_role)
    return data_dict

def create_bottlenecks_outcomes():
    df = pd.read_excel(EXCEL_FILE_PATH, sheet_name='Bottlenecks - Outcome')
    data_dict = {}
    for _, row in df.iterrows():
            outcome = row['Development Outcome']
            bottleneck_group = row['Public Finance Bottleneck']
            bottleneck = {'Specific Public Finance Bottleneck': row['Specific Public Finance Bottleneck'], 'Description': row['Outcome-Specific Public Finance Bottleneck']} if pd.notna(row['Specific Public Finance Bottleneck']) else None
            if outcome not in data_dict:
                data_dict[outcome] = {}
            if bottleneck_group not in data_dict[outcome]:
                data_dict[outcome][bottleneck_group] = []
            if bottleneck and bottleneck not in data_dict[outcome][bottleneck_group]:
                data_dict[outcome][bottleneck_group].append(bottleneck)
    return data_dict

@api_bp.route('/data', methods=['GET'])
def get_all_data():
    """
    API endpoint to retrieve all data from the Excel file.
    """
    data = {}
    data['taxonomy-bottlenecks'] = create_taxonomy_bottleneck()
    data['taxonomy-roles'] = create_flat_data('Taxonomy-roles')
    data['taxonomy-overview'] = create_flat_data('Taxonomy-overview')
    data['outcome-results'] = create_outcome_results()
    data['Public Sector Challenges'] = create_public_sector_challenges()
    data['Roles - Outcome'] = create_roles_outcomes()
    data['Bottlenecks - Outcomes'] = create_bottlenecks_outcomes()
    return jsonify(data)