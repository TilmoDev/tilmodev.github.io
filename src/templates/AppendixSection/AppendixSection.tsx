"use client";

import { Title1 } from "@fluentui/react-components";
import { FixedSizeList as List } from "react-window";

interface AppendixSectionProps {
	category: string;
	items: { name: string; definition: string }[];
}

const ITEM_HEIGHT = 32;
const MAX_VISIBLE = 10;

const AppendixSection: React.FC<AppendixSectionProps> = ({
	category,
	items,
}) => {
	return (
		<section className="mb-[16px]" aria-label={category}>
			<header className="mb-[8px]">
				<Title1>{category}</Title1>
			</header>
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
		</section>
	);
};

export default AppendixSection;
