"use client";

import Layout from "@/components/Layout/Layout";

export default function Page() {
	return (
		<Layout title="Weapons">
			<div className="px-[100px]">
				{/* Melee Weapons */}
				<section>
					{/* Axes */}
					<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
							<h2 className="text-xl font-bold text-amber-900">Axes</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
							<p className="text-sm text-gray-800 italic">
								Heavy, two-handed weapons with a bladed head, delivering
								powerful, sweeping strikes and capable of cleaving through
								armor.
							</p>
						</div>

						{/* Axes Table */}
						<div className="divide-y divide-amber-300">
							{/* Battleaxe */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 90c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Battleaxe</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 1d12 Slice + 1d6 Blunt damage, Melee, Durability 5, Slot
										6, Two-Handed
									</div>
								</div>
							</div>
							{/* Greataxe */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 110c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Greataxe</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 2d10 Slice + 1d10 Blunt damage, Melee, Durability 8, Slot
										8, Two-Handed, Heavy
									</div>
								</div>
							</div>
							{/* Hatchet */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 20c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Hatchet</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 1d6 Slice + 1d6 Blunt damage, Melee, Thrown 15m,
										Durability 3, Slot 2, One-Handed, Light
									</div>
								</div>
							</div>
							{/* Longaxe */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 90c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Longaxe</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 1d10 Slice + 1d6 Blunt damage, Melee, Durability 5, Slot
										5, Versatile
									</div>
								</div>
							</div>
							{/* Pickaxe */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 90c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Pickaxe</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 1d12 Pierce + 1d6 Blunt damage, Melee 2m, Durability 6,
										Slot 6, Two-Handed
									</div>
								</div>
							</div>
							{/* Poleaxe */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 100c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Poleaxe</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 2d8 Slice + 1d6 Blunt damage, Melee 2m, Durability 8, Slot
										8, Two-Handed, Heavy
									</div>
								</div>
							</div>
							{/* War Axe */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 120c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">War Axe</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 1d12 Slice + 1d6 Blunt damage, Melee, Durability 5, Slot
										4, Versatile
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
								Weighty melee weapons designed for Blunt blows, offering high
								impact and effective against armored foes.
							</p>
						</div>

						{/* Bludgeons Table */}
						<div className="divide-y divide-amber-300">
							{/* Cudgel */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 15c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Cudgel</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 3d4 Blunt damage, Melee, Durability 3, Slot 2, One-Handed
									</div>
								</div>
							</div>
							{/* Flail */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 90c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Flail</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 5d4 Blunt damage, Melee, Durability 5, Slot 4, One-Handed,
										Risky
									</div>
								</div>
							</div>
							{/* Great Club */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Great Club</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 5d4 Blunt damage, Melee, Durability 8, Slot 6, Two-Handed,
										Heavy
									</div>
								</div>
							</div>
							{/* Mace */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 60c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Mace</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 4d4 Blunt damage, Melee, Durability 5, Slot 4, One-Handed
									</div>
								</div>
							</div>
							{/* Maul */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 125c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Maul</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 6d4 Blunt damage, Melee, Durability 8, Slot 8, Two-Handed,
										Heavy
									</div>
								</div>
							</div>
							{/* Morningstar */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 100c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Morningstar</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 3d4 Blunt + 1d6 Pierce damage, Melee, Durability 5, Slot
										4, Versatile
									</div>
								</div>
							</div>
							{/* War Hammer */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">War Hammer</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 4d4 Blunt damage, Melee, Durability 5, Slot 4, Versatile
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
								Unarmed combat styles that emphasize quick, close-range strikes
								and grapples, providing versatility in melee confrontations.
							</p>
						</div>

						{/* Brawling Table */}
						<div className="divide-y divide-amber-300">
							{/* Unarmed */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 0c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Unarmed</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 1d8 Blunt or Pierce damage, Melee, Durability 2, Slot 0
									</div>
								</div>
							</div>
							{/* Brass Knuckle */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 10c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Brass Knuckle</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 1d12 Blunt or Pierce damage, Melee, Durability 3, Slot 1,
										Attached, Unarmed, Precise
									</div>
								</div>
							</div>
							{/* Bo Staff */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 50c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Bo Staff</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 2d8 Blunt or Pierce damage, Melee, Durability 3, Slot 4,
										Two-Handed, Defensive, Precise
									</div>
								</div>
							</div>
							{/* Fighting Stick */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 15c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Fighting Stick</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 2d6 Blunt or Pierce damage, Melee, Durability 2, Slot 2,
										One-Handed, Light, Precise
									</div>
								</div>
							</div>
							{/* Nunchaku */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 15c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Nunchaku</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 2d6 Blunt or Pierce damage, Melee, Durability 3, Slot 2,
										One-Handed, Light, Precise, Risky
									</div>
								</div>
							</div>
							{/* Sectioned Staff */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 50c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Sectioned Staff</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 2d8 Blunt or Pierce damage, Melee, Durability 3, Slot 3,
										Two-Handed, Precise, Risky
									</div>
								</div>
							</div>
							{/* Tonfa */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 15c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Tonfa</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 2d6 Blunt or Pierce damage, Melee, Durability 3, Slot 2,
										One-Handed, Defensive, Light, Precise
									</div>
								</div>
							</div>
							{/* Whip */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs font-semibold text-amber-800">
										Price: 45c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
									<div className="text-xs text-amber-800">Whip</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-amber-800">Properties</span>
										: 2d8 Pierce or Slice damage, Melee 3m, Durability 3, Slot
										2, One-Handed, Precise, Risky
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Daggers */}
					<div className="max-w-2xl mx-auto border-2 border-purple-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-purple-200 border-b-2 border-purple-600 px-4 py-2">
							<h2 className="text-xl font-bold text-purple-900">Daggers</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-purple-50 border-b border-purple-300">
							<p className="text-sm text-gray-800 italic">
								Lightweight, short-bladed weapons ideal for swift and precise
								attacks, often used for stealthy maneuvers.
							</p>
						</div>

						{/* Daggers Table */}
						<div className="divide-y divide-purple-300">
							{/* Bladed Fan */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs font-semibold text-purple-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs text-purple-800">Bladed Fan</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-purple-800">
											Properties
										</span>
										: 1d10 Slice or Pierce damage, Melee, Durability 3, Slot 2,
										One-Handed, Defensive, Light, Precise
									</div>
								</div>
							</div>
							{/* Chakram */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs font-semibold text-purple-800">
										Price: 10c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs text-purple-800">Chakram</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-purple-800">
											Properties
										</span>
										: 1d10 Slice or Pierce damage, Melee, Thrown 20m, Durability
										3, Slot 2, One-Handed, Light, Sneak, Precise, Returning,
										Compact 3
									</div>
								</div>
							</div>
							{/* Dagger */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs font-semibold text-purple-800">
										Price: 30c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs text-purple-800">Dagger</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-purple-800">
											Properties
										</span>
										: 1d10 Slice or Pierce damage, Melee, Thrown 10m, Durability
										2, Slot 2, One-Handed, Light, Sneak, Precise
									</div>
								</div>
							</div>
							{/* Karambit */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs font-semibold text-purple-800">
										Price: 50c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs text-purple-800">Karambit</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-purple-800">
											Properties
										</span>
										: 1d10 Slice or Pierce damage, Melee, Durability 2, Slot 1,
										One-Handed, Light, Sneak, Precise, Compact 2
									</div>
								</div>
							</div>
							{/* Katar */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs font-semibold text-purple-800">
										Price: 50c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs text-purple-800">Katar</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-purple-800">
											Properties
										</span>
										: 1d12 Slice or Pierce damage, Melee, Durability 2, Slot 2,
										One-Handed, Light, Sneak, Precise
									</div>
								</div>
							</div>
							{/* Kukri */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs font-semibold text-purple-800">
										Price: 50c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs text-purple-800">Kukri</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-purple-800">
											Properties
										</span>
										: 1d12 Slice or Pierce damage, Melee, Durability 3, Slot 2,
										One-Handed, Light, Sneak, Precise
									</div>
								</div>
							</div>
							{/* Kunai */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs font-semibold text-purple-800">
										Price: 7c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs text-purple-800">Kunai</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-purple-800">
											Properties
										</span>
										: 1d6 Pierce damage, Melee, Thrown 10m, Durability 3, Slot
										1, One-Handed, Light, Sneak, Precise, Compact 6, Burst 3
									</div>
								</div>
							</div>
							{/* Kusarigama */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs font-semibold text-purple-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs text-purple-800">Kusarigama</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-purple-800">
											Properties
										</span>
										: 1d12 Slice, Blunt, or Pierce damage, Melee 3m, Durability
										3, Slot 2, Two-Handed, Light, Sneak, Precise, Risky
									</div>
								</div>
							</div>
							{/* Sai */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs font-semibold text-purple-800">
										Price: 50c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs text-purple-800">Sai</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-purple-800">
											Properties
										</span>
										: 1d10 Pierce damage, Melee, Durability 3, Slot 2,
										One-Handed, Defensive, Light, Sneak, Precise
									</div>
								</div>
							</div>
							{/* Secret Knife */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs font-semibold text-purple-800">
										Price: 125c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs text-purple-800">Secret Knife</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-purple-800">
											Properties
										</span>
										: 1d10 Pierce damage, Melee, Durability 2, Slot 2, Attached,
										Light, Sneak, Precise
									</div>
								</div>
							</div>
							{/* Shuriken */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs font-semibold text-purple-800">
										Price: 5c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-purple-100 border-r border-purple-300 text-center">
									<div className="text-xs text-purple-800">Shuriken</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-purple-800">
											Properties
										</span>
										: 1d4 Pierce damage, Melee, Thrown 10m, Durability 3, Slot
										1, One-Handed, Light, Sneak, Precise, Compact 12, Burst 5
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Poles */}
					<div className="max-w-2xl mx-auto border-2 border-green-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-green-200 border-b-2 border-green-600 px-4 py-2">
							<h2 className="text-xl font-bold text-green-900">Poles</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-green-50 border-b border-green-300">
							<p className="text-sm text-gray-800 italic">
								Long-reaching weapons with various heads, offering versatility
								in both offensive and defensive combat strategies.
							</p>
						</div>

						{/* Poles Table */}
						<div className="divide-y divide-green-300">
							{/* Bardiche */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs font-semibold text-green-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs text-green-800">Bardiche</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-green-800">Properties</span>
										: 3d8 Slice damage, Melee, Durability 8, Slot 8, Two-Handed,
										Heavy, Brace
									</div>
								</div>
							</div>
							{/* Billhook */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs font-semibold text-green-800">
										Price: 50c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs text-green-800">Billhook</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-green-800">Properties</span>
										: 2d12 Slice or Pierce damage, Melee 2m, Durability 5, Slot
										6, Two-Handed, Precise, Heavy, Brace
									</div>
								</div>
							</div>
							{/* Halberd */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs font-semibold text-green-800">
										Price: 100c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs text-green-800">Halberd</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-green-800">Properties</span>
										: 3d8 Slice, Blunt, or Pierce damage, Melee 2m, Durability
										8, Slot 8, Two-Handed, Heavy, Brace
									</div>
								</div>
							</div>
							{/* Glaive */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs font-semibold text-green-800">
										Price: 90c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs text-green-800">Glaive</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-green-800">Properties</span>
										: 3d6 Slice or Pierce damage, Melee 2m, Durability 5, Slot
										8, Two-Handed, Heavy, Brace
									</div>
								</div>
							</div>
							{/* Pike */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs font-semibold text-green-800">
										Price: 50c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs text-green-800">Pike</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-green-800">Properties</span>
										: 3d8 Pierce damage, Melee 2m, Durability 8, Slot 8,
										Two-Handed, Heavy, Brace
									</div>
								</div>
							</div>
							{/* Scythe */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs font-semibold text-green-800">
										Price: 50c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs text-green-800">Scythe</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-green-800">Properties</span>
										: 3d8 Slice damage, Melee, Durability 8, Slot 8, Two-Handed,
										Heavy
									</div>
								</div>
							</div>
							{/* Spear */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs font-semibold text-green-800">
										Price: 30c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs text-green-800">Spear</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-green-800">Properties</span>
										: 2d10 Pierce damage, Melee, Thrown 25m, Durability 3, Slot
										4, Versatile, Brace
									</div>
								</div>
							</div>
							{/* Trident */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs font-semibold text-green-800">
										Price: 90c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-green-100 border-r border-green-300 text-center">
									<div className="text-xs text-green-800">Trident</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-green-800">Properties</span>
										: 2d10 Pierce damage, Melee, Thrown 25m, Durability 3, Slot
										4, One-Handed, Defensive, Brace
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Swords */}
					<div className="max-w-2xl mx-auto border-2 border-blue-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-blue-200 border-b-2 border-blue-600 px-4 py-2">
							<h2 className="text-xl font-bold text-blue-900">Swords</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-blue-50 border-b border-blue-300">
							<p className="text-sm text-gray-800 italic">
								Versatile one-handed or two-handed bladed weapons designed for
								balanced and agile combat, suitable for various fighting styles.
							</p>
						</div>

						{/* Swords Table */}
						<div className="divide-y divide-blue-300">
							{/* Arming Sword */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Arming Sword</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										3d4 Slice or Pierce damage, Melee, Durability 5, Slot 3,
										One-Handed, Light
									</div>
								</div>
							</div>
							{/* Bastard Sword */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 100c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Bastard Sword</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										3d6 Slice or Pierce damage, Melee, Durability 5, Slot 5,
										Versatile
									</div>
								</div>
							</div>
							{/* Broadsword */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Broadsword</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										3d6 Slice or Pierce damage, Melee, Durability 5, Slot 4,
										One-Handed
									</div>
								</div>
							</div>
							{/* Cane Sword */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Cane Sword</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										3d4 Slice or Pierce damage, Melee, Durability 3, Slot 3,
										One-Handed, Light, Sneak
									</div>
								</div>
							</div>
							{/* Double Sword */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 150c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Double Sword</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										4d4 Slice or Pierce damage, Melee, Durability 5, Slot 5,
										Two-Handed, Defensive
									</div>
								</div>
							</div>
							{/* Greatsword */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 125c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Greatsword</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										3d10 Slice or Pierce damage, Melee, Durability 8, Slot 8,
										Two-Handed, Heavy
									</div>
								</div>
							</div>
							{/* Hook Sword */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 100c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Hook Sword</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										3d6 Slice or Pierce damage, Melee, Durability 3, Slot 4,
										One-Handed, Defensive, Risky
									</div>
								</div>
							</div>
							{/* Katana */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 100c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Katana</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										4d4 Slice or Pierce damage, Melee, Durability 3, Slot 4,
										Versatile, Precise
									</div>
								</div>
							</div>
							{/* Khopesh */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 100c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Khopesh</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										4d4 Slice damage, Melee, Durability 5, Slot 4, One-Handed,
										Defensive
									</div>
								</div>
							</div>
							{/* Longsword */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 100c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Longsword</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										3d8 Slice or Pierce damage, Melee, Durability 5, Slot 5,
										Two-Handed
									</div>
								</div>
							</div>
							{/* Machete */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 50c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Machete</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										2d8 Slice damage, Melee, Durability 3, Slot 2, One-Handed,
										Light
									</div>
								</div>
							</div>
							{/* Rapier */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Rapier</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										3d4 Slice or Pierce damage, Melee, Durability 3, Slot 3,
										One-Handed, Light, Accurate
									</div>
								</div>
							</div>
							{/* Sabre */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 100c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Sabre</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										3d6 Slice or Pierce damage, Melee, Durability 5, Slot 4,
										One-Handed, Accurate
									</div>
								</div>
							</div>
							{/* Umbrella Sword */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Umbrella Sword</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										3d4 Slice or Pierce damage, Melee, Durability 3, Slot 3,
										One-Handed, Light, Sneak
									</div>
								</div>
							</div>
							{/* Wakizashi */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Wakizashi</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										3d4 Slice or Pierce damage, Melee, Durability 3, Slot 2,
										One-Handed, Light, Sneak, Precise
									</div>
								</div>
							</div>
							{/* Whip Sword */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs font-semibold text-blue-800">
										Price: 150c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-blue-100 border-r border-blue-300 text-center">
									<div className="text-xs text-blue-800">Whip Sword</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-blue-800">Properties</span>:
										3d6 Slice or Pierce damage, Melee 3m, Durability 3, Slot 3,
										One-Handed, Risky
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Ranged Weapons */}
				<section>
					{/* Bows */}
					<div className="max-w-2xl mx-auto border-2 border-emerald-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-emerald-200 border-b-2 border-emerald-600 px-4 py-2">
							<h2 className="text-xl font-bold text-emerald-900">Bows</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-emerald-50 border-b border-emerald-300">
							<p className="text-sm text-gray-800 italic">
								Versatile ranged weapons with varying draw strengths, allowing
								for precise and sneak attacks.
							</p>
						</div>

						{/* Bows Table */}
						<div className="divide-y divide-emerald-300">
							{/* Compound Bow */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 150c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Compound Bow</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: 2d8 (arrow) damage, Ammo 1, Reload 1, Awkward 15m, Range
										75m, Snipe 150m, Durability 5, Slot 4, Two-Handed, Sneak
									</div>
								</div>
							</div>
							{/* Greatbow */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 150c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Greatbow</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: 2d12 (arrow) damage, Ammo 1, Reload 1, Awkward 25m, Range
										100m, Snipe 200m, Durability 3, Slot 6, Two-Handed
									</div>
								</div>
							</div>
							{/* Longbow */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Longbow</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: 2d6 (arrow) damage, Ammo 1, Reload 1, Awkward 15m, Range
										75m, Snipe 150m, Durability 3, Slot 5, Two-Handed
									</div>
								</div>
							</div>
							{/* Recurve Bow */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Recurve Bow</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: 1d12 (arrow) damage, Ammo 1, Reload 1, Awkward 15m, Range
										40m, Durability 3, Slot 4, Two-Handed
									</div>
								</div>
							</div>
							{/* Shortbow */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 50c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Shortbow</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: 1d10 (arrow) damage, Ammo 1, Reload 1, Awkward 10m, Range
										40m, Durability 3, Slot 3, Two-Handed, Light, Sneak
									</div>
								</div>
							</div>
							{/* Warbow */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Warbow</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: 3d4 (arrow) damage, Ammo 1, Reload 1, Awkward 15m, Range
										50m, Durability 3, Slot 5, Two-Handed
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Crossbows */}
					<div className="max-w-2xl mx-auto border-2 border-indigo-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-indigo-200 border-b-2 border-indigo-600 px-4 py-2">
							<h2 className="text-xl font-bold text-indigo-900">Crossbows</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-indigo-50 border-b border-indigo-300">
							<p className="text-sm text-gray-800 italic">
								Powerful, one-shot ranged weapons featuring a mechanical design
								for increased accuracy and force.
							</p>
						</div>

						{/* Crossbows Table */}
						<div className="divide-y divide-indigo-300">
							{/* Compound Crossbow */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs font-semibold text-indigo-800">
										Price: 150c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs text-indigo-800">
										Compound Crossbow
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-indigo-800">
											Properties
										</span>
										: 2d10 (arrow) damage, Ammo 1, Reload 2, Awkward 15m, Range
										100m, Snipe 200m, Durability 3, Slot 5, Two-Handed, Sneak
									</div>
								</div>
							</div>
							{/* Heavy Crossbow */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs font-semibold text-indigo-800">
										Price: 150c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs text-indigo-800">Heavy Crossbow</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-indigo-800">
											Properties
										</span>
										: 2d12 (arrow) damage, Ammo 1, Reload 2, Awkward 15m, Range
										150m, Snipe 300m, Durability 5, Slot 6, Two-Handed
									</div>
								</div>
							</div>
							{/* Pistol Crossbow */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs font-semibold text-indigo-800">
										Price: 50c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs text-indigo-800">Pistol Crossbow</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-indigo-800">
											Properties
										</span>
										: 1d10 (arrow) damage, Ammo 1, Reload 1, Awkward 10m, Range
										20m, Durability 3, Slot 2, One-Handed, Light, Sneak
									</div>
								</div>
							</div>
							{/* Recurve Crossbow */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs font-semibold text-indigo-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs text-indigo-800">
										Recurve Crossbow
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-indigo-800">
											Properties
										</span>
										: 2d8 (arrow) damage, Ammo 1, Reload 2, Awkward 15m, Range
										75m, Durability 3, Slot 4, Versatile, Sneak
									</div>
								</div>
							</div>
							{/* Repeating Crossbow */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs font-semibold text-indigo-800">
										Price: 350c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs text-indigo-800">
										Repeating Crossbow
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-indigo-800">
											Properties
										</span>
										: 1d8 (arrow) damage, Ammo 6, Reload 5, Awkward 15m, Range
										40m, Durability 3, Slot 5, Versatile, Burst 6, Malfunction 2
									</div>
								</div>
							</div>
							{/* Wrist Crossbow */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs font-semibold text-indigo-800">
										Price: 90c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs text-indigo-800">Wrist Crossbow</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-indigo-800">
											Properties
										</span>
										: 1d10 (arrow) damage, Ammo 4, Reload 2, Awkward 5m, Range
										20m, Durability 3, Slot 2, Attached, Light, Sneak,
										Malfunction 2
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Launchers */}
					<div className="max-w-2xl mx-auto border-2 border-orange-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-orange-200 border-b-2 border-orange-600 px-4 py-2">
							<h2 className="text-xl font-bold text-orange-900">Launchers</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-orange-50 border-b border-orange-300">
							<p className="text-sm text-gray-800 italic">
								Launchers are versatile ranged weapons that propel projectiles
								with force.
							</p>
						</div>

						{/* Launchers Table */}
						<div className="divide-y divide-orange-300">
							{/* Blowpipe */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-orange-100 border-r border-orange-300 text-center">
									<div className="text-xs font-semibold text-orange-800">
										Price: 10c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-orange-100 border-r border-orange-300 text-center">
									<div className="text-xs text-orange-800">Blowpipe</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-orange-800">
											Properties
										</span>
										: 1d12 (arrows) damage, Ammo 1, Reload 1, Awkward 5m, Range
										15m, Durability 2, Slot 1, Two-Handed, Light, Sneak
									</div>
								</div>
							</div>
							{/* Boomerang */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-orange-100 border-r border-orange-300 text-center">
									<div className="text-xs font-semibold text-orange-800">
										Price: 5c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-orange-100 border-r border-orange-300 text-center">
									<div className="text-xs text-orange-800">Boomerang</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-orange-800">
											Properties
										</span>
										: 3d4 Blunt or Slice damage, Ammo 1, Reload 1, Awkward 5m,
										Range 15m, Durability 3, Slot 1, One-Handed, Light,
										Returning, Risky, Compact 5
									</div>
								</div>
							</div>
							{/* Sling */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-orange-100 border-r border-orange-300 text-center">
									<div className="text-xs font-semibold text-orange-800">
										Price: 10c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-orange-100 border-r border-orange-300 text-center">
									<div className="text-xs text-orange-800">Sling</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-orange-800">
											Properties
										</span>
										: 2d8 (bullets) damage, Ammo 1, Reload 1, Awkward 25m, Range
										50m, Snipe 100m, Durability 2, Slot 1, One-Handed, Risky,
										Special (can use Explosives as ammo)
									</div>
								</div>
							</div>
							{/* Slingshot */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-orange-100 border-r border-orange-300 text-center">
									<div className="text-xs font-semibold text-orange-800">
										Price: 20c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-orange-100 border-r border-orange-300 text-center">
									<div className="text-xs text-orange-800">Slingshot</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-orange-800">
											Properties
										</span>
										: 2d6 (bullets) damage, Ammo 1, Reload 1, Awkward 5m, Range
										20m, Durability 2, Slot 1, Two-Handed, Light, Sneak, Special
										(can use Explosives as ammo)
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Pistols */}
					<div className="max-w-2xl mx-auto border-2 border-red-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-red-200 border-b-2 border-red-600 px-4 py-2">
							<h2 className="text-xl font-bold text-red-900">Pistols</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-red-50 border-b border-red-300">
							<p className="text-sm text-gray-800 italic">
								Compact and easily wielded firearms with moderate damage,
								suitable for quick and agile combat scenarios.
							</p>
						</div>

						{/* Pistols Table */}
						<div className="divide-y divide-red-300">
							{/* Flintlock Pistol */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
									<div className="text-xs font-semibold text-red-800">
										Price: 65c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
									<div className="text-xs text-red-800">Flintlock Pistol</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-red-800">Properties</span>:
										4d4 (bullets) damage, Ammo 1, Reload 3, Awkward 3m, Range
										20m, Durability 3, Slot 2, Versatile, Loud, Malfunction 3
									</div>
								</div>
							</div>
							{/* Handcannon */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
									<div className="text-xs font-semibold text-red-800">
										Price: 350c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
									<div className="text-xs text-red-800">Handcannon</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-red-800">Properties</span>:
										6d4 (bullets) damage, Ammo 6, Reload 5, Awkward 3m, Range
										25m, Durability 5, Slot 3, Versatile, Loud, Malfunction 3
									</div>
								</div>
							</div>
							{/* Machine Pistol */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
									<div className="text-xs font-semibold text-red-800">
										Price: 350c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
									<div className="text-xs text-red-800">Machine Pistol</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-red-800">Properties</span>:
										1d4-2 (bullets) damage, Ammo 20, Reload 3, Awkward 3m, Range
										20m, Durability 3, Slot 2, Versatile, Loud, Burst 10,
										Malfunction 3
									</div>
								</div>
							</div>
							{/* Pepperbox */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
									<div className="text-xs font-semibold text-red-800">
										Price: 150c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
									<div className="text-xs text-red-800">Pepperbox</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-red-800">Properties</span>:
										1d4 (bullets) damage, Ammo 12, Reload 5, Awkward 3m, Range
										20m, Durability 3, Slot 2, Versatile, Loud, Burst 6,
										Malfunction 3
									</div>
								</div>
							</div>
							{/* Pocket Pistol */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
									<div className="text-xs font-semibold text-red-800">
										Price: 120c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
									<div className="text-xs text-red-800">Pocket Pistol</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-red-800">Properties</span>:
										2d4 (bullets) damage, Ammo 4, Reload 2, Awkward 3m, Range
										15m, Durability 3, Slot 1, One-Handed, Light, Sneak,
										Malfunction 2
									</div>
								</div>
							</div>
							{/* Revolver */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
									<div className="text-xs font-semibold text-red-800">
										Price: 200c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
									<div className="text-xs text-red-800">Revolver</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-red-800">Properties</span>:
										4d4 (bullets) damage, Ammo 6, Reload 5, Awkward 3m, Range
										20m, Durability 3, Slot 2, Versatile, Loud, Malfunction 3
									</div>
								</div>
							</div>
							{/* Tactical Pistol */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
									<div className="text-xs font-semibold text-red-800">
										Price: 120c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
									<div className="text-xs text-red-800">Tactical Pistol</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-red-800">Properties</span>:
										3d4 (bullets) damage, Ammo 8, Reload 3, Awkward 3m, Range
										20m, Durability 3, Slot 2, Versatile, Loud, Sneak,
										Malfunction 2
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Rifles */}
					<div className="max-w-2xl mx-auto border-2 border-slate-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-slate-200 border-b-2 border-slate-600 px-4 py-2">
							<h2 className="text-xl font-bold text-slate-900">Rifles</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-slate-50 border-b border-slate-300">
							<p className="text-sm text-gray-800 italic">
								Long-barreled firearms designed for accuracy at longer ranges,
								offering stability and higher damage.
							</p>
						</div>

						{/* Rifles Table */}
						<div className="divide-y divide-slate-300">
							{/* Assault Rifle */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-slate-100 border-r border-slate-300 text-center">
									<div className="text-xs font-semibold text-slate-800">
										Price: 500c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-slate-100 border-r border-slate-300 text-center">
									<div className="text-xs text-slate-800">Assault Rifle</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-slate-800">Properties</span>
										: 1d4 (bullets) damage, Ammo 20, Reload 5, Awkward 15m,
										Range 50m, Durability 5, Slot 4, Two-Handed, Loud, Burst 5,
										Malfunction 2
									</div>
								</div>
							</div>
							{/* Battle Rifle */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-slate-100 border-r border-slate-300 text-center">
									<div className="text-xs font-semibold text-slate-800">
										Price: 350c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-slate-100 border-r border-slate-300 text-center">
									<div className="text-xs text-slate-800">Battle Rifle</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-slate-800">Properties</span>
										: 3d8 (bullets) damage, Ammo 5, Reload 3, Awkward 15m, Range
										75m, Durability 5, Slot 4, Two-Handed, Loud, Malfunction 3
									</div>
								</div>
							</div>
							{/* Flintlock Rifle */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-slate-100 border-r border-slate-300 text-center">
									<div className="text-xs font-semibold text-slate-800">
										Price: 100c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-slate-100 border-r border-slate-300 text-center">
									<div className="text-xs text-slate-800">Flintlock Rifle</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-slate-800">Properties</span>
										: 3d10 (bullets) damage, Ammo 1, Reload 3, Awkward 15m,
										Range 50m, Durability 3, Slot 4, Two-Handed, Loud,
										Malfunction 3
									</div>
								</div>
							</div>
							{/* Hunting Rifle */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-slate-100 border-r border-slate-300 text-center">
									<div className="text-xs font-semibold text-slate-800">
										Price: 200c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-slate-100 border-r border-slate-300 text-center">
									<div className="text-xs text-slate-800">Hunting Rifle</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-slate-800">Properties</span>
										: 3d8 (bullets) damage, Ammo 1, Reload 2, Awkward 15m, Range
										100m, Snipe 400m, Durability 3, Slot 4, Two-Handed,
										Accurate, Loud, Sneak, Malfunction 3
									</div>
								</div>
							</div>
							{/* Machine Rifle */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-slate-100 border-r border-slate-300 text-center">
									<div className="text-xs font-semibold text-slate-800">
										Price: 800c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-slate-100 border-r border-slate-300 text-center">
									<div className="text-xs text-slate-800">Machine Rifle</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-slate-800">Properties</span>
										: 1d4-1 (bullets) damage, Ammo 30, Reload 5, Awkward 15m,
										Range 50m, Durability 5, Slot 6, Two-Handed, Loud, Burst 10,
										Malfunction 3
									</div>
								</div>
							</div>
							{/* Marksman Rifle */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-slate-100 border-r border-slate-300 text-center">
									<div className="text-xs font-semibold text-slate-800">
										Price: 500c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-slate-100 border-r border-slate-300 text-center">
									<div className="text-xs text-slate-800">Marksman Rifle</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-slate-800">Properties</span>
										: 3d8 (bullets) damage, Ammo 8, Reload 3, Awkward 15m, Range
										100m, Snipe 600m, Durability 5, Slot 4, Two-Handed,
										Accurate, Loud, Malfunction 2
									</div>
								</div>
							</div>
							{/* Sniper Rifle */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-slate-100 border-r border-slate-300 text-center">
									<div className="text-xs font-semibold text-slate-800">
										Price: 800c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-slate-100 border-r border-slate-300 text-center">
									<div className="text-xs text-slate-800">Sniper Rifle</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-slate-800">Properties</span>
										: 3d10 (bullets) damage, Ammo 6, Reload 3, Awkward 25m,
										Range 150m, Snipe 1200m, Durability 5, Slot 6, Two-Handed,
										Accurate, Sneak, Malfunction 2
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Shotguns */}
					<div className="max-w-2xl mx-auto border-2 border-yellow-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-yellow-200 border-b-2 border-yellow-600 px-4 py-2">
							<h2 className="text-xl font-bold text-yellow-900">Shotguns</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-yellow-50 border-b border-yellow-300">
							<p className="text-sm text-gray-800 italic">
								Short-ranged firearms delivering powerful, spread-out shots,
								ideal for close-quarters combat.
							</p>
						</div>

						{/* Shotguns Table */}
						<div className="divide-y divide-yellow-300">
							{/* Assault Shotgun */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-yellow-100 border-r border-yellow-300 text-center">
									<div className="text-xs font-semibold text-yellow-800">
										Price: 500c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-yellow-100 border-r border-yellow-300 text-center">
									<div className="text-xs text-yellow-800">Assault Shotgun</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-yellow-800">
											Properties
										</span>
										: 1d6 (shells) damage, Ammo 15, Reload 5, Awkward 2m, Range
										10m, Durability 5, Slot 4, Two-Handed, Loud, Burst 3,
										Malfunction 2
									</div>
								</div>
							</div>
							{/* Blunderbuss */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-yellow-100 border-r border-yellow-300 text-center">
									<div className="text-xs font-semibold text-yellow-800">
										Price: 100c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-yellow-100 border-r border-yellow-300 text-center">
									<div className="text-xs text-yellow-800">Blunderbuss</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-yellow-800">
											Properties
										</span>
										: 4d6 (shells) damage, Ammo 1, Reload 3, Awkward 2m, Range
										10m, Durability 3, Slot 4, Two-Handed, Loud, Malfunction 3
									</div>
								</div>
							</div>
							{/* Boomstick */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-yellow-100 border-r border-yellow-300 text-center">
									<div className="text-xs font-semibold text-yellow-800">
										Price: 50c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-yellow-100 border-r border-yellow-300 text-center">
									<div className="text-xs text-yellow-800">Boomstick</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-yellow-800">
											Properties
										</span>
										: 1d6 (shells) damage, Ammo 2, Reload 3, Awkward 2m, Range
										10m, Durability 3, Slot 2, One-Handed, Loud, Burst 2,
										Malfunction 3
									</div>
								</div>
							</div>
							{/* Combat Shotgun */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-yellow-100 border-r border-yellow-300 text-center">
									<div className="text-xs font-semibold text-yellow-800">
										Price: 350c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-yellow-100 border-r border-yellow-300 text-center">
									<div className="text-xs text-yellow-800">Combat Shotgun</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-yellow-800">
											Properties
										</span>
										: 4d6 (shells) damage, Ammo 6, Reload 5, Awkward 2m, Range
										10m, Durability 5, Slot 4, Two-Handed, Loud, Malfunction 3
									</div>
								</div>
							</div>
							{/* Hunting Shotgun */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-yellow-100 border-r border-yellow-300 text-center">
									<div className="text-xs font-semibold text-yellow-800">
										Price: 100c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-yellow-100 border-r border-yellow-300 text-center">
									<div className="text-xs text-yellow-800">Hunting Shotgun</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-yellow-800">
											Properties
										</span>
										: 1d10 (shells) damage, Ammo 2, Reload 3, Awkward 2m, Range
										20m, Durability 3, Slot 4, Two-Handed, Loud, Burst 2,
										Malfunction 3
									</div>
								</div>
							</div>
							{/* Scattergun */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-yellow-100 border-r border-yellow-300 text-center">
									<div className="text-xs font-semibold text-yellow-800">
										Price: 100c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-yellow-100 border-r border-yellow-300 text-center">
									<div className="text-xs text-yellow-800">Scattergun</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-yellow-800">
											Properties
										</span>
										: 3d6 (shells) damage, Ammo 5, Reload 5, Awkward 2m, Range
										10m, Durability 3, Slot 4, Two-Handed, Loud, Malfunction 3
									</div>
								</div>
							</div>
							{/* Tactical Shotgun */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-yellow-100 border-r border-yellow-300 text-center">
									<div className="text-xs font-semibold text-yellow-800">
										Price: 500c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-yellow-100 border-r border-yellow-300 text-center">
									<div className="text-xs text-yellow-800">
										Tactical Shotgun
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-yellow-800">
											Properties
										</span>
										: 3d6 (shells) damage, Ammo 6, Reload 5, Awkward 2m, Range
										15m, Durability 5, Slot 4, Two-Handed, Sneak, Malfunction 2
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Disposable Weapons */}
				<section>
					<div className="max-w-2xl mx-auto border-2 border-emerald-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-emerald-200 border-b-2 border-emerald-600 px-4 py-2">
							<h2 className="text-xl font-bold text-emerald-900">Grenades</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-emerald-50 border-b border-emerald-300">
							<p className="text-sm text-gray-800 italic">
								Explosive devices thrown or launched to deliver area-of-effect
								damage, perfect for disrupting groups or flushing out enemies
								from cover.
							</p>
						</div>

						{/* Grenades Table */}
						<div className="divide-y divide-emerald-300">
							{/* Grenade */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Grenade</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: 4d4 Blunt + 4d4 Pierce Damage at the end of the next Turn,
										Thrown 10m, Area 5 sqm, Durability 2, Slot 1, Disposable,
										One-Handed, Compact 3, Blast, Explosive, Loud
									</div>
								</div>
							</div>

							{/* Acid Grenade */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Acid Grenade</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: 5d4 Corrosion Damage and Inflicts Weakened at the end of
										the next Turn, Thrown 10m, Area 5 sqm, Durability 2, Slot 1,
										Disposable, One-Handed, Compact 3, Blast, Explosive, Loud
									</div>
								</div>
							</div>

							{/* Corruption Grenade */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">
										Corruption Grenade
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: At the end of the next Turn, Area is Corrupted for 2d4
										Turns (Apply &apos;Vulnerable All&apos; condition to
										creatures in the area); Thrown 10m, Area 5 sqm, Durability
										2, Slot 1, Disposable, One-Handed, Compact 3, Blast, Loud
									</div>
								</div>
							</div>

							{/* Flash Grenade */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Flash Grenade</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: 5d4 Brilliant damage at the end of the next Turn, Thrown
										10m, Area 5 sqm, Durability 2, Slot 1, Disposable,
										One-Handed, Compact 3, Blast, Explosive, Loud
									</div>
								</div>
							</div>

							{/* Fire Grenade */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Fire Grenade</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: At the end of the next Turn, Area is ablaze for 2d4 Turns
										(Any creature that starts its Turn in, enters, or moves
										within the area takes 5d4 Burn damage); Thrown 10m, Area 5
										sqm, Durability 2, Slot 1, Disposable, One-Handed, Compact
										3, Blast, Loud
									</div>
								</div>
							</div>

							{/* Frost Grenade */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Frost Grenade</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: 5d4 Frost damage and Inflicts Slowed at the end of the
										next Turn, Thrown 10m, Area 5 sqm, Durability 2, Slot 1,
										Disposable, One-Handed, Compact 3, Blast, Explosive, Loud
									</div>
								</div>
							</div>

							{/* Plasma Grenade */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 125c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Plasma Grenade</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: 10d4 Pure damage at the end of the next Turn, Thrown 10m,
										Area 5 sqm, Durability 2, Slot 1, Disposable, One-Handed,
										Compact 3, Blast, Explosive, Loud
									</div>
								</div>
							</div>

							{/* Shock Grenade */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Shock Grenade</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: 5d4 Shock damage and Inflicts Staggered at the end of the
										next Turn, Thrown 10m, Area 5 sqm, Durability 2, Slot 1,
										Disposable, One-Handed, Compact 3, Blast, Explosive, Loud
									</div>
								</div>
							</div>

							{/* Sleep Grenade */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Sleep Grenade</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: Inflicts Asleep at the end of the next Turn, Thrown 10m,
										Area 5 sqm, Durability 2, Slot 1, Disposable, One-Handed,
										Compact 3, Blast
									</div>
								</div>
							</div>

							{/* Smoke Grenade */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 50c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Smoke Grenade</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: At the end of the next Turn, Area is obscured for 2d4
										Turns (Any creature within the area gains Greater Cover but
										is also considered Blinded while inside the area); Thrown
										10m, Area 5 sqm, Durability 2, Slot 1, Disposable,
										One-Handed, Compact 3, Blast
									</div>
								</div>
							</div>

							{/* Stench Grenade */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Stench Grenade</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: At the end of the next Turn, Area is stenched for 2d4
										Turns (Any creature that starts its Turn in, enters, or
										moves within the area are Dazed and Dizzied); Thrown 10m,
										Area 5 sqm, Durability 2, Slot 1, Disposable, One-Handed,
										Compact 3, Blast, Loud
									</div>
								</div>
							</div>

							{/* Toxic Grenade */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Toxic Grenade</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: 5d4 Toxic damage and Inflicts Fatigued at the end of the
										next Turn, Thrown 10m, Area 5 sqm, Durability 2, Slot 1,
										Disposable, One-Handed, Compact 3, Blast, Explosive, Loud
									</div>
								</div>
							</div>

							{/* Web Grenade */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Web Grenade</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: At the end of the next Turn, All creatures in the area are
										Restrained and Immobilised; Thrown 10m, Area 5 sqm,
										Durability 2, Slot 1, Disposable, One-Handed, Compact 3,
										Blast, Loud
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="max-w-2xl mx-auto border-2 border-emerald-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-emerald-200 border-b-2 border-emerald-600 px-4 py-2">
							<h2 className="text-xl font-bold text-emerald-900">Snares</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-emerald-50 border-b border-emerald-300">
							<p className="text-sm text-gray-800 italic">
								Concealed traps designed to immobilize or hinder foes, ideal for
								controlling the battlefield or setting up ambushes.
							</p>
						</div>

						{/* Snares Table */}
						<div className="divide-y divide-emerald-300">
							{/* Caltrops */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 15c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Caltrops</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: Instant 2d4 Pierce damage and Slowed, Trap (Proximity),
										Area 3 sqm, Durability 2, Slot 1, Disposable, One-Handed,
										Light, Compact 5
									</div>
								</div>
							</div>

							{/* Explosive Clay */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 35c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Explosive Clay</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: Combine this with a grenade you possess and it becomes a
										trap, Trap (Remote), Area 1 sqm, Durability 2, Slot 1,
										Disposable, One-Handed, Compact 5
									</div>
								</div>
							</div>

							{/* Grease */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 30c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Grease</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: Instant Knocked Down until they escape the area, Trap
										(Proximity), Area 3 sqm, Durability 2, Slot 1, Disposable,
										One-Handed, Light, Compact 5
									</div>
								</div>
							</div>

							{/* Sticky Substance */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 30c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">
										Sticky Substance
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: Instant Immobilised, Trap (Proximity), Area 3 sqm,
										Durability 2, Slot 1, Disposable, One-Handed, Light, Compact
										5
									</div>
								</div>
							</div>

							{/* Perimeter Alarm */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 25c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">
										Perimeter Alarm
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: Loud acoustic alarm when triggered, alerts all allies
										within 100m, Trap (Tripwire), Area 10m line, Durability 2,
										Slot 1, Disposable, One-Handed, Compact 5
									</div>
								</div>
							</div>

							{/* Motion Sensor */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 40c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Motion Sensor</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: Silent alert to user&apos;s communicator when triggered,
										detects movement within 5m radius, Trap (Motion), Area 5
										sqm, Durability 2, Slot 1, Disposable, One-Handed, Compact 5
									</div>
								</div>
							</div>

							{/* Lure */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 20c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Lure</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: Blinking lights and sound to attract enemies, draws
										enemies toward the device location, Trap (Timer or Remote),
										Area 3 sqm attraction radius, Durability 2, Slot 1,
										Disposable, One-Handed, Compact 5
									</div>
								</div>
							</div>

							{/* Net */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 45c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Net</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: Instant Immobilized and Prone until they escape (Strength
										vs Risk 8), Trap (Proximity), Area 4 sqm, Durability 3, Slot
										2, Disposable, Two-Handed, Compact 3
									</div>
								</div>
							</div>

							{/* Bear Trap */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 35c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Bear Trap</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: Instant Immobilized and Bleeding, target must spend 5
										Stamina per Turn to attempt escape (Strength vs Risk 8),
										Trap (Pressure), Area 1 sqm, Durability 4, Slot 1,
										Disposable, One-Handed, Compact 2
									</div>
								</div>
							</div>

							{/* Pitfall */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 50c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Pitfall</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: Instant 5d6 Pierce damage and Prone, requires 10 minutes
										and tools to dig, Trap (Pressure), Area 2 sqm, Durability 2,
										Slot 3, Disposable, Two-Handed, Compact 2
									</div>
								</div>
							</div>

							{/* Decoy */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 30c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Decoy</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: False target that appears valuable, enemies must pass
										Intellect vs Risk 7 to recognize as fake, draws enemy
										attention and movement, Trap (Remote), Durability 2, Slot 1,
										Disposable, One-Handed, Compact 3
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Support Weapons */}
				<section>
					<div className="max-w-2xl mx-auto border-2 border-emerald-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-emerald-200 border-b-2 border-emerald-600 px-4 py-2">
							<h2 className="text-xl font-bold text-emerald-900">Siege</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-emerald-50 border-b border-emerald-300">
							<p className="text-sm text-gray-800 italic">
								Bulkier, high-impact weapons built to unleash devastating
								firepower and control the battlefield.
							</p>
						</div>

						{/* Siege Table */}
						<div className="divide-y divide-emerald-300">
							{/* Cannon */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 350c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Cannon</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: 6d12 (charges) damage, Ammo 1, Reload 4, Awkward 10m,
										Range 150m, Durability 6, Slot 6, Two-Handed, Explosive,
										Loud, Malfunction 3
									</div>
								</div>
							</div>

							{/* Chemthrower */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 300c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">Chemthrower</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: 2d10 (canisters) damage, Ammo 5, Reload 3, Awkward 3m,
										Range 20m, Durability 5, Slot 5, Two-Handed, Loud,
										Malfunction 3
									</div>
								</div>
							</div>

							{/* Grenade Launcher */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs font-semibold text-emerald-800">
										Price: 255c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-emerald-100 border-r border-emerald-300 text-center">
									<div className="text-xs text-emerald-800">
										Grenade Launcher
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-emerald-800">
											Properties
										</span>
										: [Grenade] damage, Ammo 10, Reload 5, Range 50m, Durability
										3, Slot 4, Two-Handed, Malfunction 3, Limit: Only grenades
										can be used as ammunition and can be pre-loaded during
										downtime (loaded grenades do not take Equipment Slots.)
										Special: If the grenade travels at least 10m, the explosion
										becomes instantaneous however the target has to roll Defense
										Die against your Attack Die.
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Ammunition */}
				<section>
					{/* Arrows */}
					<div className="max-w-2xl mx-auto border-2 border-indigo-600 rounded-lg overflow-hidden shadow-lg">
						{/* Header */}
						<div className="bg-indigo-200 border-b-2 border-indigo-600 px-4 py-2">
							<h2 className="text-xl font-bold text-indigo-900">Arrows</h2>
						</div>

						{/* Description */}
						<div className="px-4 py-3 bg-indigo-50 border-b border-indigo-300">
							<p className="text-sm text-gray-800 italic">
								Arrows are finely crafted projectiles designed for use with
								bows, crossbows, and launchers, offering ranged precision and
								lethal impact.
							</p>
						</div>

						{/* Arrows Table */}
						<div className="divide-y divide-indigo-300">
							{/* Arrows */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs font-semibold text-indigo-800">
										Price: 15c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs text-indigo-800">Arrows (10pcs)</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-indigo-800">
											Properties
										</span>
										: Pierce damage, Durability 3, Slot 1, Compact 50
									</div>
								</div>
							</div>
							{/* Caustic Arrows */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs font-semibold text-indigo-800">
										Price: 35c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs text-indigo-800">
										Caustic Arrows (10pcs)
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-indigo-800">
											Properties
										</span>
										: Corrosion damage, Durability 3, Slot 1, Compact 50
									</div>
								</div>
							</div>
							{/* Corruption Arrows */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs font-semibold text-indigo-800">
										Price: 45c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs text-indigo-800">
										Corruption Arrows (10 pcs)
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-indigo-800">
											Properties
										</span>
										: Corruption damage, Durability 3, Slot 1, Compact 50
									</div>
								</div>
							</div>
							{/* Fire Arrows */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs font-semibold text-indigo-800">
										Price: 75c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs text-indigo-800">
										Fire Arrows (10 pcs)
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-indigo-800">
											Properties
										</span>
										: Burn damage, Durability 3, Slot 1, Compact 50
									</div>
								</div>
							</div>
							{/* Poison Arrows */}
							<div className="flex">
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs font-semibold text-indigo-800">
										Price: 350c
									</div>
								</div>
								<div className="w-24 px-3 py-3 bg-indigo-100 border-r border-indigo-300 text-center">
									<div className="text-xs text-indigo-800">
										Poison Arrows (10 pcs)
									</div>
								</div>
								<div className="flex-1 px-4 py-3">
									<div className="text-sm">
										<span className="font-bold text-indigo-800">
											Properties
										</span>
										: Toxic damage, Durability 3, Slot 1, Compact 50
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="space-y-6">
						{/* Bullets */}
						<div className="max-w-2xl mx-auto border-2 border-red-600 rounded-lg overflow-hidden shadow-lg">
							{/* Header */}
							<div className="bg-red-200 border-b-2 border-red-600 px-4 py-2">
								<h2 className="text-xl font-bold text-red-900">Bullets</h2>
							</div>

							{/* Description */}
							<div className="px-4 py-3 bg-red-50 border-b border-red-300">
								<p className="text-sm text-gray-800 italic">
									Bullets are ammunition designed for firearms and launchers,
									delivering a powerful and controlled burst to engage targets
									at a distance.
								</p>
							</div>

							{/* Bullets Table */}
							<div className="divide-y divide-red-300">
								{/* Regular Bullets */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 25c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">Bullets (10 pcs)</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Pierce damage, Durability 3, Slot 1, Compact 50
										</div>
									</div>
								</div>
								{/* Cryo Bullets */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 45c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Cryo Bullets (10 pcs)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Frost damage, Durability 3, Slot 1, Compact 50
										</div>
									</div>
								</div>
								{/* Shock Bullets */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 45c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Shock Bullets (10 pcs)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Shock damage, Durability 3, Slot 1, Compact 50
										</div>
									</div>
								</div>
								{/* Silver Bullets */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 65c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Silver Bullets (10 pcs)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Pure damage, Durability 3, Slot 1, Compact 50
										</div>
									</div>
								</div>
								{/* Sonic Bullets */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 45c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Sonic Bullets (10 pcs)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Sonic damage, Durability 3, Slot 1, Compact 50
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Shells */}
						<div className="max-w-2xl mx-auto border-2 border-red-600 rounded-lg overflow-hidden shadow-lg">
							{/* Header */}
							<div className="bg-red-200 border-b-2 border-red-600 px-4 py-2">
								<h2 className="text-xl font-bold text-red-900">Shells</h2>
							</div>

							{/* Description */}
							<div className="px-4 py-3 bg-red-50 border-b border-red-300">
								<p className="text-sm text-gray-800 italic">
									Shells are munitions crafted for shotguns, providing a wide
									and destructive spread upon impact.
								</p>
							</div>

							{/* Shells Table */}
							<div className="divide-y divide-red-300">
								{/* Flechette */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 35c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Flechette (10 pcs)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Slice damage, Durability 3, Slot 1, 15° spread at 5m,
											20° spread at 10m, Compact 50
										</div>
									</div>
								</div>
								{/* Buckshot */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 35c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Buckshot (10 pcs)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Pierce damage, Durability 3, Slot 1, 15° spread at 5m,
											20° spread at 10m, Compact 50
										</div>
									</div>
								</div>
								{/* Flameshot */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 55c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Flameshot (10 pcs)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Burn damage, Durability 3, Slot 1, 15° spread at 5m, 20°
											spread at 10m, Compact 50
										</div>
									</div>
								</div>
								{/* Brightshot */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 55c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Brightshot (10 pcs)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Brilliant damage, Durability 3, Slot 1, 15° spread at
											5m, 20° spread at 10m, Compact 50
										</div>
									</div>
								</div>
								{/* Slug */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 30c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">Slug (10 pcs)</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Blunt damage, Durability 3, Slot 1, Compact 50
										</div>
										<div className="text-xs text-red-700 mt-1 italic">
											Note: This ammunition&apos;s area of effect only affects
											the first target it hits and is not Continuous
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Charges */}
						<div className="max-w-2xl mx-auto border-2 border-red-600 rounded-lg overflow-hidden shadow-lg">
							{/* Header */}
							<div className="bg-red-200 border-b-2 border-red-600 px-4 py-2">
								<h2 className="text-xl font-bold text-red-900">Charges</h2>
							</div>

							{/* Description */}
							<div className="px-4 py-3 bg-red-50 border-b border-red-300">
								<p className="text-sm text-gray-800 italic">
									Specialized ammunition packed with explosive force, designed
									for cannons to deliver maximum destruction to targets and
									fortifications.
								</p>
							</div>

							{/* Charges Table */}
							<div className="divide-y divide-red-300">
								{/* Fragment Charge */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 105c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Fragment Charge (1pc)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Blunt-Slice damage, Durability 3, Slot 1, Area 3 sqm,
											Compact 5
										</div>
									</div>
								</div>
								{/* Concussive Charge */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 105c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Concussive Charge (1pc)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Sonic-Brilliant damage, Durability 3, Slot 1, Area 3
											sqm, Compact 5
										</div>
									</div>
								</div>
								{/* Freezing Charge */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 105c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Freezing Charge (1pc)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Frost-Pierce damage, Durability 3, Slot 1, Area 3 sqm,
											Compact 5
										</div>
									</div>
								</div>
								{/* Incendiary Charge */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 105c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Incendiary Charge (1pc)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Burn-Corrosion damage, Durability 3, Slot 1, Area 3 sqm,
											Compact 5
										</div>
									</div>
								</div>
								{/* Chemical Charge */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 135c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Chemical Charge (1pc)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Toxic-Corruption damage, Durability 3, Slot 1, Area 3
											sqm, Compact 5
										</div>
									</div>
								</div>
								{/* Electric Charge */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 135c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Electric Charge (1pc)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Shock-Pure damage, Durability 3, Slot 1, Area 3 sqm,
											Compact 5
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Canisters */}
						<div className="max-w-2xl mx-auto border-2 border-red-600 rounded-lg overflow-hidden shadow-lg">
							{/* Header */}
							<div className="bg-red-200 border-b-2 border-red-600 px-4 py-2">
								<h2 className="text-xl font-bold text-red-900">Canisters</h2>
							</div>

							{/* Description */}
							<div className="px-4 py-3 bg-red-50 border-b border-red-300">
								<p className="text-sm text-gray-800 italic">
									Pressurized containers loaded with volatile chemicals, fueling
									chemthrowers to blanket areas with corrosive, incendiary, or
									toxic effects.
								</p>
							</div>

							{/* Canisters Table */}
							<div className="divide-y divide-red-300">
								{/* Flame Canister */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 125c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Flame Canister (5 pcs)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Burn damage, Durability 3, Slot 1, 15° spread at 5m, 20°
											spread at 10m, Compact 25, Continuous, Lingering (Burned)
										</div>
									</div>
								</div>
								{/* Freeze Canister */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 125c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Freeze Canister (5 pcs)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Frost damage, Durability 3, Slot 1, 15° spread at 5m,
											20° spread at 10m, Compact 25, Continuous, Lingering
											(Chilled)
										</div>
									</div>
								</div>
								{/* Electric Canister */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 125c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Electric Canister (5 pcs)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Shock-Pure damage, Durability 3, Slot 1, 15° spread at
											5m, 20° spread at 10m, Compact 25, Continuous
										</div>
									</div>
								</div>
								{/* Toxic Canister */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 125c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Toxic Canister (5 pcs)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Toxic damage, Durability 3, Slot 1, 15° spread at 5m,
											20° spread at 10m, Compact 25, Continuous, Lingering
											(Poisoned)
										</div>
									</div>
								</div>
								{/* Acid Canister */}
								<div className="flex">
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs font-semibold text-red-800">
											Price: 125c
										</div>
									</div>
									<div className="w-24 px-3 py-3 bg-red-100 border-r border-red-300 text-center">
										<div className="text-xs text-red-800">
											Acid Canister (5 pcs)
										</div>
									</div>
									<div className="flex-1 px-4 py-3">
										<div className="text-sm">
											<span className="font-bold text-red-800">Properties</span>
											: Corrosion damage, Durability 3, Slot 1, 15° spread at
											5m, 20° spread at 10m, Compact 25, Continuous, Lingering
											(Corrode)
										</div>
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
