import React from "react";

type FinancialTableProps = {
  title: string;
  columns: string[]; // Array of column headers
  rows: { [key: string]: string }[]; // Array of row data as objects, where each key matches a column header
};

const FinancialTable = ({ title, columns, rows }: FinancialTableProps) => {
  return (
    <div>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-brown mb-4">{title}</h2>
        <table className="w-full text-left table-auto border-collapse">
          <thead>
            <tr className="bg-yellow/20 border-b">
              {columns.map((column, index) => (
                <th key={index} className="p-2 font-semibold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-yellow/10" : ""}
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="p-2">
                    {row[column] || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default FinancialTable;
