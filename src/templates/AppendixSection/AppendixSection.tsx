"use client";

import { Title1 } from "@fluentui/react-components";

interface AppendixSectionProps {
	category: string;
	items: { name: string; definition: string }[];
}

const AppendixSection: React.FC<AppendixSectionProps> = ({
	category,
	items,
}) => {
	return (
		<div className="mb-[16px]">
			<div className="mb-[8px]">
				<Title1>{category}</Title1>
			</div>
			<div>
				{items.map((item, index) => (
					<div key={index} className="mb-[4px]">
						{item.name} - {item.definition}
					</div>
				))}
			</div>
		</div>
	);
};

export default AppendixSection;
