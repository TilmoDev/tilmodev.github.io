import React from "react";

interface RollComponentProps {
	title: string;
	content: string;
	example?: string;
}

export function RollComponent({ title, content, example }: RollComponentProps) {
	return (
		<div className="mb-4">
			<div className="mb-2">
				<span className="font-bold">{title}</span> {content}
			</div>
			{example && (
				<div className="ml-6 text-gray-600 italic">Example: {example}</div>
			)}
		</div>
	);
}
