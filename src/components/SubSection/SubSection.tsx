interface SubSectionProps {
	title: string;
	children: React.ReactNode;
	spacing?: "normal" | "compact" | "loose";
}

const SubSection: React.FC<SubSectionProps> = ({
	title,
	children,
	spacing = "normal",
}) => {
	const spacingClasses = {
		compact: "space-y-2",
		normal: "space-y-4",
		loose: "space-y-6",
	};

	return (
		<div className="mb-6">
			<h3 className="text-lg font-semibold mb-3">{title}</h3>
			<div className={spacingClasses[spacing]}>{children}</div>
		</div>
	);
};

export default SubSection;
