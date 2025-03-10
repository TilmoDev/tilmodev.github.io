const abilities = [
	{
		skillName: "Grappler",
		tags: ["Active", "Utility"],
		skillDescription:
			"You unleash your grappling expertise, swiftly seizing your opponent with a tenacious hold that renders them helpless, caught in the vice of your unyielding grip until they muster the strength to break free or succumb to your dominating restraint.",
		requirements:
			"You must have a free hand to initiate or maintain your grab.",
		rankDescriptions: [
			{
				rank: "Rank I",
				price: "250c",
				description:
					"Spend 5 Stamina to roll an Action (Strength) Dice to grab your target. If you succeed, deal unarmed damage and the target is grabbed until you release them, are forcibly moved away, or become incapacitated. While grabbed, the target is both Immobilized and Restrained. They can spend 3 Stamina to roll an Action (any) Dice to break free on their Turn.",
			},
			{
				rank: "Rank II",
				price: "750c",
				description: "You only need to spend 4 Stamina points to grab instead.",
			},
			{
				rank: "Rank III",
				price: "1,500c",
				description: "You only need to spend 3 Stamina points to grab instead.",
			},
		],
		limitation:
			"You cannot use this skill against a target that is twice as large as you.",
		specials:
			"You are Slowed for the duration of the grab and your target moves together with you. You can also let go of your target without spending any Stamina.",
	},
	{
		skillName: "Iron Fists",
		tags: ["Passive", "Upgrade"],
		skillDescription:
			"Your fists transform into formidable weapons, each strike a versatile onslaught capable of delivering a mix of lethal force, ensuring that every punch is a devastating symphony of martial prowess.",
		rankDescriptions: [
			{
				rank: "Rank I",
				price: "250c",
				description:
					"As long as you have 3 Focus, your unarmed attacks now deal 3+1d8 damage.",
			},
			{
				rank: "Rank II",
				price: "750c",
				description: "Your unarmed attacks now deal 3+1d10 damage instead.",
			},
			{
				rank: "Rank III",
				price: "1,500c",
				description: "Your unarmed attacks now deal 3+1d12 damage instead.",
			},
		],
		specials:
			"Your attacks deal Slice, Blunt, or Pierce damage per strike. You choose.",
	},
	{
		skillName: "Like Water",
		tags: ["Passive", "Defensive"],
		skillDescription:
			"As your strikes find their mark in the dance of combat, a fluid grace envelopes you, akin to water responding to the touch of a skilled sculptor, enhancing your defensive finesse with each precise melee blow.",
		rankDescriptions: [
			{
				rank: "Rank I",
				price: "250c",
				description:
					"Each time you damage a target in melee, your Defense Dice increases by 1 size until your next Turn begins.",
			},
			{
				rank: "Rank II",
				price: "750c",
				description: "The size increase is now 2 instead.",
			},
			{
				rank: "Rank III",
				price: "1,500c",
				description: "The size increase is now 3 instead.",
			},
		],
	},
	{
		skillName: "Refocus",
		tags: ["Passive", "Utility"],
		skillDescription:
			"As the last ember of your concentration flickers out, an internal surge reignites your mental fortitude, restoring a renewed clarity that propels you back into the fray with unwavering focus.",
		rankDescriptions: [
			{
				rank: "Rank I",
				price: "250c",
				description: "When your Focus reaches zero, you gain 5 Focus.",
			},
			{
				rank: "Rank II",
				price: "750c",
				description: "You can activate this skill twice before resting.",
			},
			{
				rank: "Rank III",
				price: "1,500c",
				description: "You can activate this skill thrice before resting.",
			},
		],
		limitation:
			"After using this skill, you must rest for 6 hours before using it again.",
	},
	{
		skillName: "Snake Bite",
		tags: ["Passive", "Offensive"],
		skillDescription:
			"Like a coiled serpent, you effortlessly evade the oncoming assault, your every nimble maneuver channeling the latent energy of each missed strike into a retaliatory strike.",
		rankDescriptions: [
			{
				rank: "Rank I",
				price: "250c",
				description:
					"Each time a melee attack misses you, your next melee Damage Dice has a bonus of +1d4.",
			},
			{
				rank: "Rank II",
				price: "750c",
				description: "The bonus is now +1d6 instead.",
			},
			{
				rank: "Rank III",
				price: "1,500c",
				description: "The bonus is now +1d8 instead.",
			},
		],
	},
	{
		skillName: "Weapon Master",
		tags: ["Passive", "Upgrade"],
		skillDescription:
			"Your mastery over brawling weapons transforms each strike into a deadly dance, your proficiency allowing you to seamlessly shift between dealing bone-Blunt blows and penetrating strikes, all executed with a fluid finesse that leaves adversaries reeling.",
		rankDescriptions: [
			{
				rank: "Rank I",
				price: "250c",
				description:
					"As long as you have 3 Focus, all your Damage Dice for brawling weapons have an extra +1d4 bonus damage. You also do not need to spend Stamina when switching weapons to a brawling weapon.",
			},
			{
				rank: "Rank II",
				price: "750c",
				description: "The damage bonus is now +1d6.",
			},
			{
				rank: "Rank III",
				price: "1,500c",
				description: "The damage bonus is now +1d8.",
			},
		],
	},
];

export default abilities;
