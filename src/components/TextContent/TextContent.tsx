interface TextContentProps {
	children: React.ReactNode;
}

const TextContent: React.FC<TextContentProps> = ({ children }) => (
	<p className="text-gray-700">{children}</p>
);

export default TextContent;
