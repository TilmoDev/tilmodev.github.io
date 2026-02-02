"use client";

import Layout from "@/components/Layout/Layout";

export default function Page() {
	return (
		<Layout>
			<div className="flex flex-col">
				<div className="mb-4">
					<h2 className="text-2xl font-semibold text-blue-700 mb-3">
						Proficiencies
					</h2>
					<p className="text-gray-700">
						Proficiencies represent your character&apos;s combat skills,
						indicating how adept you are at wielding weapons such as swords,
						bows, or guns. In game terms, proficiency simply increases your Base
						Dice permanently (from d6 to d8, and so on), enhancing your ability
						to hit your target when using a specific weapon or succeed on a
						stunt. They also come with a perk. Your character can acquire up to
						a maximum of five (5) Proficiencies at any time. You can purchase
						additional Proficiencies during character creation or at a later
						time.
					</p>
				</div>
				{/* Core Proficiences */}
				<section>
					<div className="text-xl font-semibold text-blue-700 mb-3">
						<h3>Core Proficiencies</h3>
					</div>
					{/* Finesse */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Finesse</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Your movements radiate precision and grace, deftly weaving
								through danger with agility, nimble reflexes, and effortless
								control.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Action and Reaction Dice when encountering
										finesse-based scenarios is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Action and Reaction Dice when encountering
										finesse-based scenarios is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Action and Reaction Dice when encountering
										finesse-based scenarios is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										Draw and Holster maneuvers are now free. The Stamina cost
										for the Administer and Hide maneuvers is reduced by 1.
										Additionally, the Stamina cost for the Stand maneuver is
										reduced by 1.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Influence */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Influence</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Your magnetic charm effortlessly influences the unfolding
								scenario, subtly swaying the tides of combat in your favor.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Action and Reaction Dice when encountering
										influence-based scenarios is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Action and Reaction Dice when encountering
										influence-based scenarios is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Action and Reaction Dice when encountering
										influence-based scenarios is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										When using the Distract maneuver, subtract -2 from the
										target’s next Attack Dice per point of Stamina spent instead
										of -1. Additionally, when using the Defend maneuver, add +2
										to Defense Dice per point of Stamina spent instead of +1.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Intellect */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Intellect</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								With heightened intellectual acuity, you navigate the chaos of
								combat, swiftly analyzing situations and devising strategic
								maneuvers to outsmart your opponents.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Action and Reaction Dice when encountering
										intellect-based scenarios is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Action and Reaction Dice when encountering
										intellect-based scenarios is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Action and Reaction Dice when encountering
										intellect-based scenarios is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										The Stamina cost of the Assist maneuver is reduced by 1.
										Additionally, when performing the Interact maneuver, you can
										perform complex interactions (e.g., hacking, disarming
										traps) at no additional Stamina cost.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Sense */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Sense</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Your sharpened perception heightens every moment, keenly attuned
								to the world as you spot subtle details and react to threats
								before they strike.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Action and Reaction Dice when encountering
										sense-based scenarios is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Action and Reaction Dice when encountering
										sense-based scenarios is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Action and Reaction Dice when encountering
										sense-based scenarios is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										The Stamina cost of the Concentrate maneuver is reduced by
										1. Additionally, when using the Assess maneuver, roll two
										dice instead but choose the highest result.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Strength */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Strength</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Your every move exudes unmatched might, effortlessly toppling
								adversaries and seamlessly navigating through challenges with
								raw power.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Action and Reaction Dice when encountering
										strength-based scenarios is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Action and Reaction Dice when encountering
										strength-based scenarios is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Action and Reaction Dice when encountering
										strength-based scenarios is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										The Stamina cost of the Heavy Attack combat maneuver is
										reduced by 1 when using melee weapons. Additionally, when
										performing Climb, Jump, or Swim, you move 4 meters per 1
										Stamina spent instead of 2.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Vitality */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Vitality</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Your resilience and endurance shine, allowing you to face
								adversity head-on with newfound vigor and determination.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Action and Reaction Dice when encountering
										vitality-based scenarios is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Action and Reaction Dice when encountering
										vitality-based scenarios is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Action and Reaction Dice when encountering
										vitality-based scenarios is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										The Stamina cost for the Recover maneuver is reduced by 1.
										Additionally, you can move up to 7 meters per point of
										Stamina spent.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Tootltip - Core Proficiences */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">
								Tooltip: What are Core Proficiencies?
							</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800">
								Combat is typically straightforward, with creatures making
								Attack Dices and defending creatures responding with Defense
								Dices. However, certain scenarios (especially outside of combat)
								arise that the rules may not explicitly cover, such as breaking
								a door or resisting the effects of cold or poison, or even
								avoiding or stopping a falling chandelier. In such instances,
								Core Proficiencies come into play, providing room for creativity
								and collaboration between you and the Director.
							</p>
						</div>
					</div>
				</section>

				{/* Defensive Proficiences */}
				<section>
					<div className="text-xl font-semibold text-blue-700 mb-3">
						<h3>Defensive Proficiencies</h3>
					</div>
					{/* Evasion */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Evasion</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Proficient in evasion, you effortlessly elude attacks with a
								nimble finesse, enhancing your defense as you seamlessly
								navigate through combat.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Defense Dice is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Defense Dice is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Defense Dice is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										You can spend 1 Focus to double your Base Defense Dice when
										rolling. You can spend additional Focus to keep adding more
										Defense Dice.
									</div>
								</div>
							</div>
							{/* Limit */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Limit:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										You must maintain a Bulk value of 0.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Light Armor */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Light Armor</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Proficient in light armor, you move with unmatched agility,
								benefiting from enhanced speed and flexibility in combat
								situations.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your armor&apos;s Mitigation value improves by 1.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your armor&apos;s Mitigation value improves by 2.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your armor&apos;s Mitigation value improves by 3.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										The effect of Slice damage no longer applies while
										you&apos;re wearing Light Armor.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Medium Armor */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Medium Armor</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Skilled in medium armor, you strike a balance between protection
								and mobility, allowing you to endure hits while maintaining a
								versatile combat stance.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your armor&apos;s Mitigation value improves by 1.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your armor&apos;s Mitigation value improves by 2.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your armor&apos;s Mitigation value improves by 3.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										The effect of Pierce damage no longer applies while
										you&apos;re wearing Medium Armor.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Heavy Armor */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Heavy Armor</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Mastering heavy armor, you become an indomitable force on the
								battlefield, absorbing blows with resilience and presenting an
								imposing front against adversaries.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your armor&apos;s Mitigation value improves by 1.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your armor&apos;s Mitigation value improves by 2.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your armor&apos;s Mitigation value improves by 3.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										The effect of Blunt damage no longer applies while
										you&apos;re wearing Heavy Armor.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Light Shields */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">
								Light Shields
							</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								With a light shield in hand, you deflect attacks with finesse,
								quickly repositioning to block threats while keeping your
								movements swift and agile.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your shield&apos;s Durability value increases by 1.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your shield&apos;s Durability value increases by 2.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your shield&apos;s Durability value increases by 3.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										Whenever you roll for Defense Dice, you now roll twice and
										take the highest.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Heavy Shields */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">
								Heavy Shields
							</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Wielding a heavy shield, you become an unyielding bulwark,
								absorbing brutal assaults and anchoring yourself as an immovable
								force on the battlefield.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your shield&apos;s Durability value increases by 1.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your shield&apos;s Durability value increases by 2.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your shield&apos;s Durability value increases by 3.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										Whenever you roll for Defense Dice, you now roll twice and
										take the highest.
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Melee Proficiences */}
				<section>
					<div className="text-xl font-semibold text-blue-700 mb-3">
						<h3>Melee Proficiencies</h3>
					</div>
					{/* Evasion */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Axes</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Mastering the art of axes, you effortlessly wield these brutal
								blades, cleaving through foes with precision and raw strength.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Attack Dice for this weapon type is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d12
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										If your attack brings the target to 0 Health, you can
										immediately make a free Normal Attack against an adjacent
										enemy.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Bludgeons */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Bludgeons</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								With an expertise in bludgeons, you dominate the battlefield,
								delivering bone-Blunt blows that leave your enemies dazed and
								defeated.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Attack Dice for this weapon type is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										If your attack deals at least 10 damage, the target is
										Dazed.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Brawling */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Brawling</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Whether swinging nunchakus or specialized martial art weapons,
								your proficiency in brawling grants you unmatched finesse and
								agility, turning combat into a dance of controlled chaos.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Attack Dice for this weapon type is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										Spend 1 Focus to disarm your opponent on a successful hit.
										Their weapon falls 2m away from them in a direction of your
										choice.
									</div>
								</div>
							</div>
							{/* Limit */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Limit:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										You can only disarm weapons that are being held.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Daggers */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Heavy Armor</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								A master of daggers, you move like a shadow, swiftly and
								lethally striking at vulnerable points, making each
								confrontation a deadly dance.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Attack Dice for this weapon type is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										Your requirement to inflict the negative conditions of Slice
										and Pierce damage is reduced by 5.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Poles */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Poles</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Excelling in pole weapons, you command the reach of your weapon,
								keeping foes at bay with calculated strikes that make you a
								formidable force on the battlefield.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Attack Dice for this weapon type is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										If your attack hits, you can spend 2 Focus to Knock Down the
										target.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Swords */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Swords</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								As a master of swords, your every move is a dance of deadly
								elegance, effortlessly parrying and striking with finesse and
								lethal precision.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Attack Dice for this weapon type is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										When wielding a sword, you have a +2 bonus to your Defense
										Dice.
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Ranged Proficiences */}
				<section>
					<div className="text-xl font-semibold text-blue-700 mb-3">
						<h3>Ranged Proficiencies</h3>
					</div>
					{/* Bows */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Bows</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Proficient in bows, you become a deadly archer, launching arrows
								with pinpoint accuracy and deadly intent.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Attack Dice for this weapon type is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										If your attack hits, you can spend 1 Focus to pin the target
										in place. They are Immobilized.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Crossbows */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Crossbows</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Adept in crossbows, you are a master of ranged precision,
								delivering powerful and accurate shots with lethal force.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Attack Dice for this weapon type is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										You reduce the difference needed to land critical hits by 1.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Launchers */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Launchers</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								With launchers, you strike from afar with uncanny accuracy,
								sending projectiles sailing true and catching your targets off
								guard.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Attack Dice for this weapon type is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										Whenever you land critical hits with this weapon type, the
										target is also Staggered.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Pistols */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Pistols</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								With a proficiency in pistols, you are a quick-draw expert,
								delivering rapid and precise shots with deadly accuracy.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Attack Dice for this weapon type is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										You deal an extra +2 damage whenever you hit a target within
										5m.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Rifles */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Rifles</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								As a rifle expert, you control the battlefield from a distance,
								picking off targets with calculated and powerful shots.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Attack Dice for this weapon type is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										If you did not move on your last Turn, roll twice on your
										next Attack Dice and take the highest result.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Shotguns */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Shotguns</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Proficient in shotguns, you dominate close-quarters combat,
								delivering devastating blasts that leave your enemies in
								disarray.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Attack Dice for this weapon type is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										On a successful hit, you can push the target 1m directly
										away from you if your damage is at least 5 (cumulative).
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Support Proficiences */}
				<section>
					<div className="text-xl font-semibold text-blue-700 mb-3">
						<h3>Support Proficiencies</h3>
					</div>
					{/* Siege */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Siege</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Proficient in siege weapons, you wield them with crushing force
								and ruthless efficiency, turning the battlefield into a smoking
								ruin in your wake.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your Base Attack Dice for this weapon type is now d8.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d10.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your Base Attack Dice for this weapon type is now d12.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										Whenever you carry a siege weapon, their slot size is
										reduced by 2.
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Disposable Proficiences */}
				<section>
					<div className="text-xl font-semibold text-blue-700 mb-3">
						<h3>Disposable Proficiencies</h3>
					</div>
					{/* Admixtures */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Admixtures</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								A practiced hand with admixtures, you expertly concoct and carry
								potent brews and salves, enhancing their effects and never
								lacking vital remedies when they’re needed most.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your maximum Compact size for this equipment type increases
										to 6.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your maximum Compact size for this equipment type
										increases to 7.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your maximum Compact size for this equipment type
										increases to 8.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										Your restoration potency for Health, Focus, and Reflex
										Admixtures increases to 150% (round up).
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Grenades */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Grenades</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Your skill with grenades lets you launch explosives farther and
								with greater control, raining havoc on the enemy from a safe
								distance.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										Your throwing range for all explosives increases by 5m.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- Your throwing range for all explosives increases by 10m.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- Your throwing range for all explosives increases by 15m.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										All of your Explosives’ Durability increases by 2 and their
										area of effect by 1 sqm.
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Snares */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Snares</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								As a trap specialist, you lay snares with masterful subtlety,
								making them harder to spot and ensuring unwary foes stumble
								right into your carefully laid plans.
							</p>
						</div>

						{/* Ranks Table */}
						<div className="divide-y divide-amber-300">
							{/* Rank I */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Rank I</span> -
										The Risk Threshold to detect or disarm your snares increases
										by 1.
									</div>
								</div>
							</div>

							{/* Rank II */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 1,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank II (requires Rank I)
										</span>{" "}
										- The Risk Threshold to detect or disarm your snares
										increases by 2.
									</div>
								</div>
							</div>

							{/* Rank III */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 2,500c
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">
											Rank III (requires Rank II)
										</span>{" "}
										- The Risk Threshold to detect or disarm your snares
										increases by 3.
									</div>
								</div>
							</div>

							{/* Special */}
							<div className="flex bg-amber-25">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Special:
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										The Stamina requirement and the Risk Threshold to set your
										snares is reduced by 1.
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}
