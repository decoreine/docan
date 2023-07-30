import os
import json

root_folder = '.'  # Replace this with the path to your root folder
json_file_path = './output.json'  # Replace this with the path to the output JSON file

# Function to recursively traverse directories and create JSON data
def traverse_directories(current_path, result={}):
    files = os.listdir(current_path)

    for file in files:
        file_path = os.path.join(current_path, file)

        if os.path.isdir(file_path):
            # If it's a directory, recursively traverse it
            traverse_directories(file_path, result)
        elif os.path.isfile(file_path):
            # If it's a file, add its path to the JSON object
            relative_file_path = os.path.relpath(file_path, root_folder)
            key = os.path.splitext(file)[0]
            result[key] = relative_file_path

    return result

# Generate the JSON data
json_data = traverse_directories(root_folder)

# Write the JSON data to a file
with open(json_file_path, 'w') as json_file:
    json.dump(json_data, json_file, indent=2)

print('JSON file created successfully.')
