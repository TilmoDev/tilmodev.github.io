"use client";

import { Title1 } from "@fluentui/react-components";
import EquipmentSection from "@/templates/EquipmentSection/EquipmentSection";

const equipmentData = {
	category: "Equipment",
	itemsBySubcategory: {
		"Melee Weapons": [
			{
				name: "Short Sword",
				definition: "A lightweight sword ideal for quick strikes.",
				tooltip: "Can be dual-wielded.",
			},
			{
				name: "Battle Axe",
				definition: "Delivers powerful blows at close range.",
			},
		],
		"Ranged Weapons": [
			{
				name: "Longbow",
				definition: "Fires arrows with precision from a distance.",
				tooltip: "Requires two hands.",
			},
			{
				name: "Throwing Knives",
				definition: "Easily concealed, throwable blades.",
			},
		],
		Armor: [
			{
				name: "Leather Armor",
				definition: "Lightweight armor offering basic protection.",
			},
			{
				name: "Plate Mail",
				definition: "Heavy armor that provides maximum defense.",
				tooltip: "Reduces movement speed.",
			},
		],
	},
};

export default function Page() {
	return (
		<div className="px-[100px]">
			<Title1 className="center">Appendix Page</Title1>
			<EquipmentSection
				category={equipmentData.category}
				itemsBySubcategory={equipmentData.itemsBySubcategory}
			/>
		</div>
	);
}
