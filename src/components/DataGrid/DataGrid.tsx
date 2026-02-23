"use client";

import React from "react";

interface DataGridItem {
	id: string;
	content: React.ReactNode;
}

interface DataGridProps {
	items: DataGridItem[];
	columns?: number;
	className?: string;
}

const DataGrid: React.FC<DataGridProps> = ({
	items,
	columns = 3,
	className = "",
}) => {
	const gridCols = {
		1: "grid-cols-1",
		2: "grid-cols-1 md:grid-cols-2",
		3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
		4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
	};

	return (
		<div
			className={`grid gap-4 ${gridCols[columns as keyof typeof gridCols] || gridCols[3]} ${className}`}
		>
			{items.map((item) => (
				<div
					key={item.id}
					className="bg-green-50 border border-green-300 rounded-lg p-4 hover:bg-green-100 transition-colors duration-200"
				>
					{item.content}
				</div>
			))}
		</div>
	);
};

export default DataGrid;