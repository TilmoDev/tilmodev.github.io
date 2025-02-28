"use client";

import { Divider } from "@fluentui/react-components";
import GlossaryCard from "@/components/GlossaryCard/GlossaryCard";

const data = [
	{
		category: "Equipment",
		subcategory: "",
		name: "Accurate",
		definition: "Your Attack Dice using these weapons increases by 1 size.",
		tooltip: "placeholder tooltip",
	},
	{
		category: "Equipment",
		subcategory: "",
		name: "Ammo",
		definition:
			"These arms fire projectiles, with a specific ammo capacity indicated. Once empty, reloading is imperative.",
		tooltip: "",
	},
	{
		category: "Negative Conditions",
		subcategory: "Mild Conditions",
		name: "Bleed",
		definition:
			"Suffer set Health loss per round. Stacks from different damage types.",
		tooltip: "",
	},
];

export default function Page() {
	return (
		<div>
			<h1>Glossary Page</h1>
			<div>
				{data.map((item, index) => (
					<div key={index}>
						<GlossaryCard {...item} />
						{index !== data.length - 1 && <Divider />}
					</div>
				))}
			</div>
		</div>
	);
}
