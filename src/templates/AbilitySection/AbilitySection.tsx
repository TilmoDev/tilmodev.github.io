"use client";

import {
	Body1,
	Tag,
	TagGroup,
	Title1,
	Title3,
	Divider,
	makeStyles,
	Caption1,
	Subtitle1,
} from "@fluentui/react-components";

interface AbilitySectionProps {
	skillName: string;
	tags: string[];
	skillDescription?: string;
	requirements?: string;
	rankDescriptions: { rank: string; description: string; price: string }[];
	limitation?: string;
	specials?: string;
}

const AbilitySection: React.FC<AbilitySectionProps> = ({
	skillName,
	tags,
	skillDescription,
	requirements,
	rankDescriptions,
	limitation,
	specials,
}) => {
	return (
		<div className="border border-gray-300 rounded-lg p-4 shadow-md mb-4">
			<div className="mb-3">
				<Title1>{skillName}</Title1>
			</div>
			<div className="flex flex-col mb-3">
				<div className="flex items-center gap-2">
					<Subtitle1>Ability Type:</Subtitle1>
					<TagGroup
						aria-label="Ability Type"
						role="list"
						className="flex items-center"
					>
						{tags.map((tag, index) => (
							<Tag key={index} role="listitem" className="mr-1">
								{tag}
							</Tag>
						))}
					</TagGroup>
				</div>
			</div>

			{skillDescription && (
				<div className="mb-3">
					<Body1>{skillDescription}</Body1>
				</div>
			)}
			{requirements && (
				<div className="flex flex-col mb-3">
					<Title3>Requirements</Title3>
					<Body1>{requirements}</Body1>
				</div>
			)}
			<div className="mb-3">
				<Title3>Ranks</Title3>
				{rankDescriptions.map((rank, index) => (
					<div key={index} className="p-2 rounded-lg mb-2 shadow-sm">
						<Body1>
							<p>
								{rank.rank}: {rank.price}
							</p>{" "}
							- {rank.description}
						</Body1>
					</div>
				))}
			</div>

			{limitation && (
				<div className="flex flex-col mb-3">
					<Title3>Limit</Title3>
					<Body1 className="text-red-500">{limitation}</Body1>
				</div>
			)}

			{/* Specials */}
			{specials && (
				<div className="flex flex-col mb-3">
					<Title3>Special</Title3>
					<Body1 className="text-purple-600">{specials}</Body1>
				</div>
			)}
		</div>
	);
};

export default AbilitySection;
