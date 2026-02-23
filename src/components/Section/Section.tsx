"use client";

import React from "react";

interface SectionProps {
	id?: string;
	title: string;
	description?: string;
	children: React.ReactNode;
	className?: string;
}

const Section: React.FC<SectionProps> = ({
	id,
	title,
	description,
	children,
	className = "",
}) => {
	return (
		<section id={id} className={`mb-8 ${className}`}>
			<div className="max-w-4xl mx-auto border-2 border-green-600 rounded-lg overflow-hidden shadow-lg">
				{/* Header */}
				<div className="bg-green-200 border-b-2 border-green-600 px-4 py-2">
					<h2 className="text-xl font-bold text-green-900">{title}</h2>
				</div>

				{/* Description */}
				{description && (
					<div className="px-4 py-3 bg-green-50 border-b border-green-300">
						<p className="text-sm text-gray-800 italic">{description}</p>
					</div>
				)}

				{/* Content */}
				<div className="p-4 bg-white">{children}</div>
			</div>
		</section>
	);
};

export default Section;