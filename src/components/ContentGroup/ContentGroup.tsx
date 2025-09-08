interface ContentGroupProps {
	children: React.ReactNode;
	spacing?: "tight" | "normal" | "loose";
}

const ContentGroup: React.FC<ContentGroupProps> = ({
	children,
	spacing = "normal",
}) => {
	const spacingClasses = {
		tight: "space-y-2",
		normal: "space-y-4",
		loose: "space-y-6",
	};

	return <div className={spacingClasses[spacing]}>{children}</div>;
};

export default ContentGroup;
