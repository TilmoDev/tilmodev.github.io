"use client";

import React from "react";

interface DataTableColumn {
	key: string;
	label: string;
	width?: string;
}

interface DataTableRow {
	[key: string]: string | number | React.ReactNode;
}

interface DataTableProps {
	columns: DataTableColumn[];
	data: DataTableRow[];
	className?: string;
}

const DataTable: React.FC<DataTableProps> = ({
	columns,
	data,
	className = "",
}) => {
	return (
		<div className={`overflow-x-auto ${className}`}>
			<table className="min-w-full divide-y divide-green-300">
				<thead className="bg-green-100">
					<tr>
						{columns.map((column) => (
							<th
								key={column.key}
								className={`px-4 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider ${
									column.width ? `w-${column.width}` : ""
								}`}
							>
								{column.label}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-green-200">
					{data.map((row, index) => (
						<tr key={index} className="hover:bg-green-50">
							{columns.map((column) => (
								<td
									key={column.key}
									className="px-4 py-3 whitespace-nowrap text-sm text-gray-900"
								>
									{row[column.key]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DataTable;