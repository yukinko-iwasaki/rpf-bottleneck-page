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
    children = ["Public Sector Results", "Feasible Policy", "Delivery Capability", "Source", "Development Outcome"]
    for _, row in df.iterrows():
        parent = row[parent_title]
        data = {child: row[child] for child in children}
        data_dict[parent] = data
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
@api_bp.route('/framework', methods=['GET'])
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

@api_bp.route('/data', methods=['GET'])
def get_example_data():
    """API endpoint to retrieve filtered data from the Excel file."""
    filter_value = request.args.get('filter')
    if not filter_value:
        return jsonify({"error": "Missing 'filter' query parameter"}), 400

    bottleneck_examples = read_excel('Bottlenecks - Examples')
    if isinstance(bottleneck_examples, tuple):
        return bottleneck_examples
    filtered_bottleneck_data = bottleneck_examples[bottleneck_examples['Primary PFM Challenge'] == filter_value].dropna(subset=["Public Finance Bottleneck Group", "Public Finance Bottleneck"])
    import re
    data_dict = {}
    def extract_bottleneck_number(text):
        match = re.match(r"(\d+(?:\.\d+)*)", text)
        return match.group(1) if match else None

    for _, row in filtered_bottleneck_data.iterrows():
        parent_name = str(row["Public Finance Bottleneck Group"]).strip()
        child_name = str(row["Public Finance Bottleneck"]).strip()
        grandchild_name = str(row["Outcome Bottleneck"]).strip()
        parent_num = extract_bottleneck_number(parent_name)
        child_num = extract_bottleneck_number(child_name)
        parent_key = f"bottleneck_{parent_num}" if parent_num else parent_name
        child_key = f"bottleneck_{child_num.replace('.', '_')}" if child_num else child_name
        # Exclude parent and child columns from the nested dict
        nested = {c: str(row[c]) for c in filtered_bottleneck_data.columns if c not in ["Public Finance Bottleneck Group", "Public Finance Bottleneck"]}
        # Parent
        if parent_key not in data_dict:
            data_dict[parent_key] = {"name": parent_name}
        # Group all examples for the same child_key under an object with 'name' and 'child' list
        if child_key not in data_dict[parent_key]:
            data_dict[parent_key][child_key] = {"name": child_name}
        if grandchild_name not in data_dict[parent_key][child_key]:
            data_dict[parent_key][child_key][grandchild_name] = []
        data_dict[parent_key][child_key][grandchild_name].append({**nested})

    roles_examples = read_excel('Roles - Examples')
    if isinstance(roles_examples, tuple):
        return roles_examples
    filtered_roles_data = roles_examples[roles_examples['Outcome'] == filter_value].dropna(subset="Role of Public Finance")
    dict_data_role = {}
    def extract_role_letter(text):
        match = re.match(r"([A-Z])", text)
        return match.group(1) if match else None
    
    for _, row in filtered_roles_data.iterrows():
        parent_name = str(row["Role of Public Finance"]).strip()
        child_name = str(row["Outcome Role"]).strip()
        parent_num = extract_role_letter(parent_name)
        parent_key = f"role_{parent_num}" if parent_num else parent_name
        # Exclude parent and child columns from the nested dict
        nested = {c: str(row[c]) for c in filtered_roles_data.columns if c not in ["Role of Public Finance", "Outcome Role"]}
        # Parent
        if parent_key not in dict_data_role:
            dict_data_role[parent_key] = {"name": parent_name, "child": []}
        # Find or create the child entry as a dict with 'name' and 'child' list
        child_list = dict_data_role[parent_key]["child"]
        child_entry = next((item for item in child_list if item["name"] == child_name), None)
        if child_entry is None:
            child_entry = {"name": child_name, "child": []}
            child_list.append(child_entry)
        child_entry["child"].append({**nested})
    
    
    return safe_jsonify({
        'Bottlenecks': data_dict,
        'Roles': dict_data_role
    })
