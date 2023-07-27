import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import getTableData from './data/getTableData'; // Import the function

function Table() {
  const tableData = getTableData(); // Retrieve the table data

  return (
    <div className="w-ful mt-4">
      <table className="w-full rounded-md overflow-hidden text-left">
        <thead>
          <tr>
            <th className="px-2 py-1 bg-gray-300">Sno.</th>
            <th className="px-2 py-1 bg-gray-300">Column 2</th>
            <th className="px-2 py-1 bg-gray-300">Column 3</th>
            <th className="px-2 py-1 bg-gray-300">Column 4</th>
            <th className="px-2 py-1 bg-gray-300">Column 5</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index + 1}>
              <td className="px-2 py-1 border w-[20px]">{index + 1}</td>
              {row.map((cell, cellIndex) => (
                <td className="px-2 py-1 border w-[23%]" key={cellIndex}>
                  {cell}
                </td>
              ))}
              <td className="px-2 py-1 border">
                <button className=" px-2 py-[2px] bg-blue-500 text-white text-xs rounded-sm mr-2">
                  <FontAwesomeIcon icon={faSave} size="sm" />
                  <span className="ml-1">Edit</span>
                </button>
                <button className=" px-2 py-[2px] bg-red-500 text-white text-xs rounded-sm">
                  <FontAwesomeIcon icon={faTrash} size="sm" />
                  <span className="ml-1">Delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
