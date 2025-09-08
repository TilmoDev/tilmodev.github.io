interface SubSectionProps {
	title: string;
	children: React.ReactNode;
}

const SubSection: React.FC<SubSectionProps> = ({ title, children }) => (
	<div>
		<h4 className="font-semibold text-gray-700 mb-2">{title}</h4>
		{children}
	</div>
);

export default SubSection;
