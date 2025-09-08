interface FormulaDisplayProps {
	children: React.ReactNode;
}

const FormulaDisplay: React.FC<FormulaDisplayProps> = ({ children }) => {
	return (
		<div className="text-center my-4 p-4 bg-gray-50 rounded-lg">{children}</div>
	);
};

export default FormulaDisplay;
