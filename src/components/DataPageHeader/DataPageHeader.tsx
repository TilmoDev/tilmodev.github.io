"use client";

import React from "react";

interface DataPageHeaderProps {
	title: string;
	backgroundImage: string;
	className?: string;
}

const DataPageHeader: React.FC<DataPageHeaderProps> = ({
	title,
	backgroundImage,
	className = "",
}) => {
	return (
		<header
			className={`relative w-full h-64 bg-cover bg-top bg-no-repeat ${className}`}
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className="absolute inset-0 bg-black bg-opacity-50"></div>
			<div className="absolute bottom-0 left-0 z-10 p-8">
				<h1 className="text-4xl md:text-5xl font-bold text-white">
					{title}
				</h1>
			</div>
		</header>
	);
};

export default DataPageHeader;