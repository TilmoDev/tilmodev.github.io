"use client";

import React from "react";
import Layout from "@/components/Layout/Layout";
import {
	DataPageHeader,
	StickySideNav,
	Section,
	DataCard,
	DataTable,
	DataGrid,
	TextContent,
} from "@/components";

interface DataPageProps {
	title: string;
	backgroundImage: string;
	sections: {
		id: string;
		title: string;
		description?: string;
		content: React.ReactNode;
	}[];
}

const DataPage: React.FC<DataPageProps> = ({
	title,
	backgroundImage,
	sections,
}) => {
	const navItems = sections.map((section) => ({
		id: section.id,
		label: section.title,
		href: `#${section.id}`,
	}));

	return (
		<Layout>
			<DataPageHeader title={title} backgroundImage={backgroundImage} />

			<div className="container mx-auto px-4 py-8">
				<div className="flex gap-8">
					{/* Side Navigation */}
					<div className="w-64 flex-shrink-0">
						<StickySideNav items={navItems} />
					</div>

					{/* Main Content */}
					<div className="flex-1">
						{sections.map((section) => (
							<Section
								key={section.id}
								id={section.id}
								title={section.title}
								description={section.description}
								className="scroll-mt-20"
							>
								{section.content}
							</Section>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default DataPage;