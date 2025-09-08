interface ProTipProps {
	children: React.ReactNode;
	label?: string;
}

const ProTip: React.FC<ProTipProps> = ({ children, label = "Pro Tip" }) => (
	<p className="text-gray-700">
		<strong>{label}:</strong> {children}
	</p>
);

export default ProTip;
