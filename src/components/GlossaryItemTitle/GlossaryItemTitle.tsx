import * as React from "react";
import {
	Label,
	makeStyles,
	mergeClasses,
	tokens,
	Tooltip,
	useId,
} from "@fluentui/react-components";
import { Info16Regular } from "@fluentui/react-icons";

interface GlossaryItemTitleProps {
	label: string;
	tooltipContent: React.ReactNode;
}

const useStyles = makeStyles({
	root: {
		display: "flex",
		columnGap: tokens.spacingVerticalS,
	},
	visible: {
		color: tokens.colorNeutralForeground2BrandSelected,
	},
});

const GlossaryItemTitle = ({
	label,
	tooltipContent,
}: GlossaryItemTitleProps) => {
	const styles = useStyles();
	const contentId = useId("content");
	const [visible, setVisible] = React.useState(false);

	return (
		<div aria-owns={visible ? contentId : undefined} className={styles.root}>
			<Label>{label}</Label>
			<Tooltip
				content={{
					children: tooltipContent,
					id: contentId,
				}}
				positioning="above-start"
				withArrow
				relationship="label"
				onVisibleChange={(e, data) => setVisible(data.visible)}
			>
				<Info16Regular
					tabIndex={0}
					className={mergeClasses(visible && styles.visible)}
				/>
			</Tooltip>
		</div>
	);
};

export default GlossaryItemTitle;
