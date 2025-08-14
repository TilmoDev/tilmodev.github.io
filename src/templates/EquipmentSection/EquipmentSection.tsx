"use client";

import { Title1, Title2 } from "@fluentui/react-components";
import { FixedSizeList as List } from "react-window";

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

const ITEM_HEIGHT = 32;
const MAX_VISIBLE = 10;

const EquipmentSection: React.FC<EquipmentSectionProps> = ({
	category,
	itemsBySubcategory,
}) => {
	return (
		<section className="mb-[24px]" aria-label={category}>
			<header>
				<Title1 className="mb-[12px]">{category}</Title1>
			</header>
			<ul>
				{Object.entries(itemsBySubcategory).map(([subcategory, items]) => (
					<li key={subcategory} className="mb-[16px]">
						{subcategory && <Title2 className="mb-[8px]">{subcategory}</Title2>}
						<ul>
							{items.length > MAX_VISIBLE ? (
								<List
									height={ITEM_HEIGHT * MAX_VISIBLE}
									itemCount={items.length}
									itemSize={ITEM_HEIGHT}
									width="100%"
								>
									{({ index, style }) => (
										<li
											key={index}
											style={style}
											className="mb-[4px]"
											role="listitem"
										>
											<span>{items[index].name}</span> -{" "}
											<span>{items[index].definition}</span>
										</li>
									)}
								</List>
							) : (
								items.map((item, index) => (
									<li key={index} className="mb-[4px]" role="listitem">
										<span>{item.name}</span> - <span>{item.definition}</span>
									</li>
								))
							)}
						</ul>
					</li>
				))}
			</ul>
		</section>
	);
};

export default EquipmentSection;
