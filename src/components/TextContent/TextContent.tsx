interface TextContentProps {
	children: React.ReactNode;
	className?: string;
	variant?: "default" | "intro" | "note";
}

const TextContent: React.FC<TextContentProps> = ({
	children,
	className = "",
	variant = "default",
}) => {
	const variantClasses = {
		default: "",
		intro: "text-lg",
		note: "text-sm text-gray-600",
	};

	return (
		<div className={`${variantClasses[variant]} ${className}`}>{children}</div>
	);
};

export default TextContent;
