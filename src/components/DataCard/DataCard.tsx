"use client";

import React from "react";

interface DataCardProps {
	heading: string;
	body: React.ReactNode;
	tips?: string[];
	className?: string;
}

const DataCard: React.FC<DataCardProps> = ({
	heading,
	body,
	tips = [],
	className = "",
}) => {
	return (
		<div className={`bg-green-50 border border-green-300 rounded-lg p-4 mb-4 ${className}`}>
			<h3 className="text-lg font-semibold text-green-800 mb-2">{heading}</h3>
			<div className="text-gray-700 mb-3">{body}</div>
			{tips.length > 0 && (
				<div className="border-t border-green-200 pt-3">
					<h4 className="text-sm font-medium text-green-700 mb-2">Pro Tips:</h4>
					<ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
						{tips.map((tip, index) => (
							<li key={index}>{tip}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default DataCard;