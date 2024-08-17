import fs from 'fs';
import path from 'path';
// Path to your JSON file
const filePath = '../data/newAccount.json';

// Function to append data to the JSON file
export const appendDataToFile = (newData) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File does not exist, create it with the new data
        fs.writeFile(filePath, JSON.stringify([newData], null, 2), (err) => {
          if (err) console.error('Error writing file:', err);
          else console.log('Data saved successfully');
        });
      } else {
        console.error('Error reading file:', err);
      }
      return;
    }

    let jsonArray;
    try {
      jsonArray = JSON.parse(data);
    } catch (e) {
      // If JSON parsing fails, start with an empty array
      jsonArray = [];
    }

    // Append new data
    jsonArray.push(newData);

    // Write updated data back to file
    fs.writeFile(filePath, JSON.stringify(jsonArray, null, 2), (err) => {
      if (err) console.error('Error writing file:', err);
      else console.log('Data saved successfully');
    });
  });
};
