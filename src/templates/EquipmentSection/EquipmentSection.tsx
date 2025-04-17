"use client";

import { Title1, Title2 } from "@fluentui/react-components";

interface EquipmentItem {
	name: string;
	definition: string;
	tooltip?: string;
}

interface EquipmentSectionProps {
	category: string;
	itemsBySubcategory: {
		[subcategory: string]: EquipmentItem[];
	};
}

const EquipmentSection: React.FC<EquipmentSectionProps> = ({
	category,
	itemsBySubcategory,
}) => {
	return (
		<div className="mb-[24px]">
			<Title1 className="mb-[12px]">{category}</Title1>
			{Object.entries(itemsBySubcategory).map(([subcategory, items]) => (
				<div key={subcategory} className="mb-[16px]">
					{subcategory && <Title2 className="mb-[8px]">{subcategory}</Title2>}
					{items.map((item, index) => (
						<div key={index} className="mb-[4px]">
							{item.name} - {item.definition}
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default EquipmentSection;
