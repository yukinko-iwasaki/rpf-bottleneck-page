
from flask import jsonify, Blueprint
import os
import pandas as pd
import openpyxl
import json

# Blueprint setup
api_bp = Blueprint('api', __name__)
EXCEL_FILE_PATH = os.path.join(os.path.dirname(__file__), '..', 'data', 'PFM_data.xlsx')

# --- Utility Functions ---
def read_excel(sheet_name):
    """Read a sheet from the Excel file and return a DataFrame or error response."""
    try:
        return pd.read_excel(EXCEL_FILE_PATH, sheet_name=sheet_name)
    except FileNotFoundError:
        return {"error": "Data file not found"}, 404
    except Exception as e:
        return {"error": str(e)}, 500

def safe_jsonify(data):
    """Return a Flask response, handling error tuples from utility functions."""
    if isinstance(data, tuple) and isinstance(data[0], dict):
        return jsonify(data[0]), data[1]
    return jsonify(data)

# --- Data Construction Functions ---
def create_taxonomy_bottleneck():
    """Create a taxonomy bottleneck from the Excel file."""
    df = read_excel('Taxonomy-bottlenecks')
    if isinstance(df, tuple):
        return df
    df['Public Finance Bottleneck Group'] = df['Public Finance Bottleneck Group'].ffill()
    data_dict = {}
    for _, row in df.iterrows():
        parent_title = row['Public Finance Bottleneck Group']
        child_title = row['Public Finance Bottleneck']
        child_description = row['PF Bottleneck Description']
        data = {'Public Finance Bottleneck': child_title, 'PF Bottleneck Description': child_description}
        data_dict.setdefault(parent_title, []).append(data)
    return data_dict

def create_flat_data(sheet_name):
    """Create a flat data structure from the specified sheet in the Excel file."""
    df = read_excel(sheet_name)
    if isinstance(df, tuple):
        return df
    return json.loads(df.to_json(orient='records'))

def create_outcome_results():
    """Create a flat data structure for outcome results from the Excel file."""
    df = read_excel('Outcomes & Results')
    if isinstance(df, tuple):
        return df
    data_dict = {}
    parent_title = 'Outcome'
    children = ["Public Sector Results", "Feasible Policy", "Delivery Capability", "Source"]
    for _, row in df.iterrows():
        data = {child: row[child] for child in children}
        data_dict.setdefault(row[parent_title], []).append(data)
    return data_dict

def create_public_sector_challenges():
    """Create a dictionary for public sector challenges from the Excel file."""
    df = read_excel('Public Sector Challenges')
    if isinstance(df, tuple):
        return df
    data_dict = {}
    parent_title = 'Outcome'
    children = ["Public Sector Challenge", "Description", "Source"]
    for _, row in df.iterrows():
        data = {child: row[child] for child in children}
        data_dict.setdefault(row[parent_title], []).append(data)
    return data_dict

def create_roles_outcomes():
    """Create a nested dictionary for roles and outcomes from the Excel file."""
    df = read_excel('Roles - Outcome')
    if isinstance(df, tuple):
        return df
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
    """Create a nested dictionary for bottlenecks and outcomes from the Excel file."""
    df = read_excel('Bottlenecks - Outcome')
    if isinstance(df, tuple):
        return df
    data_dict = {}
    for _, row in df.iterrows():
        outcome = row['Development Outcome']
        bottleneck_group = row['Public Finance Bottleneck']
        bottleneck = None
        if pd.notna(row['Specific Public Finance Bottleneck']):
            bottleneck = {
                'Specific Public Finance Bottleneck': row['Specific Public Finance Bottleneck'],
                'Description': row['Outcome-Specific Public Finance Bottleneck']
            }
        if outcome not in data_dict:
            data_dict[outcome] = {}
        if bottleneck_group not in data_dict[outcome]:
            data_dict[outcome][bottleneck_group] = []
        if bottleneck and bottleneck not in data_dict[outcome][bottleneck_group]:
            data_dict[outcome][bottleneck_group].append(bottleneck)
    return data_dict

# --- API Route ---
@api_bp.route('/data', methods=['GET'])
def get_all_data():
    """API endpoint to retrieve all data from the Excel file."""
    data = {
        'taxonomy-bottlenecks': create_taxonomy_bottleneck(),
        'taxonomy-roles': create_flat_data('Taxonomy-roles'),
        'taxonomy-overview': create_flat_data('Taxonomy-overview'),
        'outcome-results': create_outcome_results(),
        'Public Sector Challenges': create_public_sector_challenges(),
        'Roles - Outcome': create_roles_outcomes(),
        'Bottlenecks - Outcomes': create_bottlenecks_outcomes(),
    }
    return safe_jsonify(data)

from flask import request

@api_bp.route('/test', methods=['GET'])
def get_example_data():
    """API endpoint to retrieve filtered data from the Excel file."""
    filter_value = request.args.get('filter')
    if not filter_value:
        return jsonify({"error": "Missing 'filter' query parameter"}), 400

    bottleneck_examples = read_excel('Bottlenecks - Examples')
    if isinstance(bottleneck_examples, tuple):
        return bottleneck_examples
    filtered_bottleneck_data = bottleneck_examples[bottleneck_examples['Primary PFM Challenge'] == filter_value]
    data_dict = {}
    for _, row in filtered_bottleneck_data.iterrows():
        row_data = {"Country":row["Country"], "Description of  Examples of Bottlenecks": row["Description of  Examples of Bottlenecks"], "References": row["References"]}
        data_dict.setdefault(row["Public Finance Bottleneck Group"], []).append(row_data)

    roles_examples = read_excel('Roles - Examples')
    if isinstance(roles_examples, tuple):
        return roles_examples
    filtered_roles_data = roles_examples[roles_examples['Outcome'] == filter_value]

    return safe_jsonify({
        'Bottlenecks': data_dict,
        'Roles': json.loads(filtered_roles_data.to_json(orient='records'))
    })
