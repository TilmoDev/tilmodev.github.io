"use client";

import React from "react";
import DataPage from "@/templates/DataPage/DataPage";
import { DataCard, DataTable, DataGrid, TextContent } from "@/components";

const SampleDataPage: React.FC = () => {
	// Sample data for table
	const tableColumns = [
		{ key: "name", label: "Name" },
		{ key: "type", label: "Type" },
		{ key: "damage", label: "Damage" },
		{ key: "price", label: "Price" },
	];

	const tableData = [
		{ name: "Sword", type: "Melee", damage: "1d8", price: "50c" },
		{ name: "Bow", type: "Ranged", damage: "1d6", price: "75c" },
		{ name: "Staff", type: "Magic", damage: "1d4", price: "100c" },
	];

	// Sample data for grid
	const gridItems = [
		{
			id: "1",
			content: (
				<div>
					<h4 className="font-semibold">Item 1</h4>
					<p className="text-sm text-gray-600">Description of item 1</p>
				</div>
			),
		},
		{
			id: "2",
			content: (
				<div>
					<h4 className="font-semibold">Item 2</h4>
					<p className="text-sm text-gray-600">Description of item 2</p>
				</div>
			),
		},
		{
			id: "3",
			content: (
				<div>
					<h4 className="font-semibold">Item 3</h4>
					<p className="text-sm text-gray-600">Description of item 3</p>
				</div>
			),
		},
	];

	const sections = [
		{
			id: "introduction",
			title: "Introduction",
			description: "An overview of the data page structure and components.",
			content: (
				<TextContent>
					<p>
						This is a sample data page demonstrating the various components
						available for creating structured content pages. Each section can
						contain different types of content including text, cards, tables,
						and grids.
					</p>
				</TextContent>
			),
		},
		{
			id: "cards",
			title: "Data Cards",
			description: "Cards with headings, body content, and optional tips.",
			content: (
				<div className="space-y-4">
					<DataCard
						heading="Basic Combat"
						body={
							<p>
								Learn the fundamentals of combat in this tabletop RPG. Combat
								involves strategic positioning, timing, and resource management.
							</p>
						}
						tips={[
							"Always consider your positioning relative to enemies",
							"Manage your action points carefully",
							"Use cover and terrain to your advantage",
						]}
					/>
					<DataCard
						heading="Advanced Tactics"
						body={
							<p>
								Master advanced combat techniques including flanking,
								ambushes, and environmental hazards.
							</p>
						}
					/>
				</div>
			),
		},
		{
			id: "tables",
			title: "Data Tables",
			description: "Tabular data presentation with customizable columns.",
			content: <DataTable columns={tableColumns} data={tableData} />,
		},
		{
			id: "grids",
			title: "Data Grids",
			description: "Grid layouts for displaying multiple items.",
			content: <DataGrid items={gridItems} columns={3} />,
		},
	];

	return (
		<DataPage
			title="Sample Data Page"
			backgroundImage="/assets/images/getting-started-cover.png"
			sections={sections}
		/>
	);
};

export default SampleDataPage;