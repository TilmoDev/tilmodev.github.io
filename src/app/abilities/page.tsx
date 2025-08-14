"use client";

import AbilitySection from "@/templates/AbilitySection/AbilitySection";
import { LargeTitle, Title2 } from "@fluentui/react-components";
import abilities from "../../data/abilities";

export default function Page() {
	return (
		<div className="flex flex-col">
			<div className="flex justify-center my-20">
				<LargeTitle>Class Header Abilities Page</LargeTitle>
			</div>
			<div className="mb-3">
				<Title2>Tier Header</Title2>
			</div>
			{abilities.map((ability, index) => (
				<AbilitySection
					key={index}
					skillName={ability.skillName}
					tags={ability.tags}
					skillDescription={ability.skillDescription}
					requirements={ability.requirements}
					rankDescriptions={ability.rankDescriptions}
					limitation={ability.limitation}
					specials={ability.specials}
				/>
			))}
		</div>
	);
}
