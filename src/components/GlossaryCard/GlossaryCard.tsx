import { Text } from "@fluentui/react-components";
import GlossaryItemTitle from "../GlossaryItemTitle/GlossaryItemTitle";

interface GlossaryCardProps {
	category: string;
	subcategory: string;
	name: string;
	definition: string;
	tooltip: string;
}

const GlossaryCard = (props: GlossaryCardProps) => {
	const { category, subcategory, name, definition, tooltip } = props;
	return (
		<div>
			<GlossaryItemTitle label={name} tooltipContent={tooltip} />
			<Text>{definition}</Text>
		</div>
	);
};

export default GlossaryCard;
