import React from 'react';

interface TableHeader {
  key: string;
  label: string;
}

interface TableRow {
  [key: string]: string | number | React.ReactNode;
}

interface TableComponentProps {
  headers: TableHeader[];
  rows: TableRow[];
  className?: string;
}

export default function TableComponent({
  headers,
  rows,
  className = '',
}: TableComponentProps) {
  return (
    <div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${className}`}>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map((header) => (
              <th key={header.key} scope="col" className="px-6 py-3">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0
                  ? 'odd:bg-white odd:dark:bg-gray-900'
                  : 'even:bg-gray-50 even:dark:bg-gray-800'
              } border-b dark:border-gray-700 border-gray-200`}
            >
              {headers.map((header) => (
                <td key={`${rowIndex}-${header.key}`} className="px-6 py-4">
                  {row[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}