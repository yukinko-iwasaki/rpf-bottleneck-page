from flask import jsonify, Blueprint
import os

# Create a Blueprint to organize routes
api_bp = Blueprint('api', __name__)

# Define the path to your Excel file
# Use a more secure and robust way to manage file paths in a real app
EXCEL_FILE_PATH = os.path.join(os.path.dirname(__file__), '..', 'data', 'my_data.xlsx')

@api_bp.route('/data', methods=['GET'])
def get_all_data():
    """
    API endpoint to retrieve all data from the Excel file.
    """
    try:
        # Read the Excel file into a pandas DataFrame
        # df = pd.read_excel(EXCEL_FILE_PATH)
        
        # Convert the DataFrame to a list of dictionaries (JSON format)
        data = {1:'ted'}
        
        # Return the data as a JSON response
        return jsonify(data)
    except FileNotFoundError:
        return jsonify({"error": "Data file not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500
