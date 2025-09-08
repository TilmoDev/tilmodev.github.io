import { RollComponent } from "../RollComponent/RollComponent";

interface RollType {
	title: string;
	content: string;
	example?: string;
}

interface RollTypeListProps {
	types: RollType[];
}

const RollTypeList: React.FC<RollTypeListProps> = ({ types }) => {
	return (
		<div className="space-y-3">
			{types.map((type, index) => (
				<RollComponent
					key={index}
					title={type.title}
					content={type.content}
					example={type.example}
				/>
			))}
		</div>
	);
};

export default RollTypeList;
