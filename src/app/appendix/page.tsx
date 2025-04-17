"use client";

import AppendixSection from "@/templates/AppendixSection/AppendixSection";
import { Title1 } from "@fluentui/react-components";

const groupedData = {
	Equipment: [
		{
			name: "Accurate",
			definition: "Your Attack Dice using these weapons increases by 1 size.",
			tooltip: "placeholder tooltip",
		},
		{
			name: "Ammo",
			definition:
				"These arms fire projectiles, with a specific ammo capacity indicated. Once empty, reloading is imperative.",
			tooltip: "",
		},
	],
	"Negative Conditions": [
		{
			subcategory: "Mild Conditions",
			name: "Bleed",
			definition:
				"Suffer set Health loss per round. Stacks from different damage types.",
			tooltip: "",
		},
	],
};

export default function Page() {
	return (
		<div className="px-[100px]">
			<Title1 className="center">Appendix Page</Title1>
			{Object.entries(groupedData).map(([category, items]) => (
				<AppendixSection key={category} category={category} items={items} />
			))}
		</div>
	);
}
