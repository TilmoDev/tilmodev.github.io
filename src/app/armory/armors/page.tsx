"use client";

export default function Page() {
	return (
		<div className="px-[100px]">
			{/* Armors */}
			<section>
				{/* Light Armors */}
				<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
					{/* Header */}
					<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
						<h2 className="text-xl font-bold text-amber-900">Light Armors</h2>
					</div>

					{/* Description */}
					<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
						<p className="text-sm text-gray-800 italic">
							Light Armors provide agile protection, allowing wearers to swiftly
							navigate the battlefield with minimal hindrance, making them ideal
							for nimble and evasive combat styles.
						</p>
					</div>

					{/* Light Armors Table */}
					<div className="divide-y divide-amber-300">
						{/* Padded Armor */}
						<div className="flex">
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs font-semibold text-amber-800">
									Price: 30c
								</div>
							</div>
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs text-amber-800">Padded Armor</div>
							</div>
							<div className="flex-1 px-4 py-3">
								<div className="text-sm">
									<span className="font-bold text-amber-800">Properties</span>:
									Mitigation 1, Durability 5, Slot 3, Bulk 0, Sole
								</div>
							</div>
						</div>

						{/* Leather Armor */}
						<div className="flex">
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs font-semibold text-amber-800">
									Price: 75c
								</div>
							</div>
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs text-amber-800">Leather Armor</div>
							</div>
							<div className="flex-1 px-4 py-3">
								<div className="text-sm">
									<span className="font-bold text-amber-800">Properties</span>:
									Mitigation 2, Durability 6, Slot 3, Bulk 0, Sole
								</div>
							</div>
						</div>

						{/* Fiber Armor */}
						<div className="flex">
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs font-semibold text-amber-800">
									Price: 150c
								</div>
							</div>
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs text-amber-800">Fiber Armor</div>
							</div>
							<div className="flex-1 px-4 py-3">
								<div className="text-sm">
									<span className="font-bold text-amber-800">Properties</span>:
									Mitigation 3, Durability 8, Slot 4, Bulk 0, Sole
								</div>
							</div>
						</div>

						{/* Lightsteel Armor */}
						<div className="flex">
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs font-semibold text-amber-800">
									Price: 500c
								</div>
							</div>
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs text-amber-800">Lightsteel Armor</div>
							</div>
							<div className="flex-1 px-4 py-3">
								<div className="text-sm">
									<span className="font-bold text-amber-800">Properties</span>:
									Mitigation 4, Durability 10, Slot 4, Bulk 0, Sole
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Medium Armors */}
				<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
					{/* Header */}
					<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
						<h2 className="text-xl font-bold text-amber-900">Medium Armors</h2>
					</div>

					{/* Description */}
					<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
						<p className="text-sm text-gray-800 italic">
							Medium Armors strike a balance between protection and mobility,
							offering wearers versatility in combat scenarios by providing
							decent defense without sacrificing maneuverability.
						</p>
					</div>

					<div className="divide-y divide-amber-300">
						{/* Scale Armor */}
						<div className="flex">
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs font-semibold text-amber-800">
									Price: 250c
								</div>
							</div>
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs text-amber-800">Scale Armor</div>
							</div>
							<div className="flex-1 px-4 py-3">
								<div className="text-sm">
									<span className="font-bold text-amber-800">Properties</span>:
									Mitigation 4, Durability 10, Slot 4, Bulk 1, Sole
								</div>
							</div>
						</div>

						{/* Mesh Armor */}
						<div className="flex">
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs font-semibold text-amber-800">
									Price: 250c
								</div>
							</div>
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs text-amber-800">Mesh Armor</div>
							</div>
							<div className="flex-1 px-4 py-3">
								<div className="text-sm">
									<span className="font-bold text-amber-800">Properties</span>:
									Mitigation 5, Durability 12, Slot 5, Bulk 1, Sole
								</div>
							</div>
						</div>

						{/* Midplate Armor */}
						<div className="flex">
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs font-semibold text-amber-800">
									Price: 500c
								</div>
							</div>
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs text-amber-800">Midplate Armor</div>
							</div>
							<div className="flex-1 px-4 py-3">
								<div className="text-sm">
									<span className="font-bold text-amber-800">Properties</span>:
									Mitigation 6, Durability 15, Slot 5, Bulk 2, Sole
								</div>
							</div>
						</div>

						{/* Exo Armor */}
						<div className="flex">
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs font-semibold text-amber-800">
									Price: 800c
								</div>
							</div>
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs text-amber-800">Exo Armor</div>
							</div>
							<div className="flex-1 px-4 py-3">
								<div className="text-sm">
									<span className="font-bold text-amber-800">Properties</span>:
									Mitigation 7, Durability 18, Slot 5, Bulk 2, Sole
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Heavy Armors */}
				<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
					{/* Header */}
					<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
						<h2 className="text-xl font-bold text-amber-900">Heavy Armors</h2>
					</div>

					{/* Description */}
					<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
						<p className="text-sm text-gray-800 italic">
							Heavy Armors are the epitome of battlefield resilience, offering
							wearers maximum protection at the cost of some mobility, ensuring
							they stand as unyielding bastions against the onslaught of
							adversaries.
						</p>
					</div>

					<div className="divide-y divide-amber-300">
						{/* Steel Armor */}
						<div className="flex">
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs font-semibold text-amber-800">
									Price: 500c
								</div>
							</div>
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs text-amber-800">Steel Armor</div>
							</div>
							<div className="flex-1 px-4 py-3">
								<div className="text-sm">
									<span className="font-bold text-amber-800">Properties</span>:
									Mitigation 8, Durability 20, Slot 6, Bulk 3, Sole
								</div>
							</div>
						</div>

						{/* Plated Armor */}
						<div className="flex">
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs font-semibold text-amber-800">
									Price: 750c
								</div>
							</div>
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs text-amber-800">Plated Armor</div>
							</div>
							<div className="flex-1 px-4 py-3">
								<div className="text-sm">
									<span className="font-bold text-amber-800">Properties</span>:
									Mitigation 9, Durability 25, Slot 7, Bulk 4, Sole
								</div>
							</div>
						</div>

						{/* Titan Armor */}
						<div className="flex">
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs font-semibold text-amber-800">
									Price: 1500c
								</div>
							</div>
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs text-amber-800">Titan Armor</div>
							</div>
							<div className="flex-1 px-4 py-3">
								<div className="text-sm">
									<span className="font-bold text-amber-800">Properties</span>:
									Mitigation 10, Durability 30, Slot 8, Bulk 5, Sole
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Shields */}
			<section>
				{/* Light Shields */}
				<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
					{/* Header */}
					<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
						<h2 className="text-xl font-bold text-amber-900">Light Shields</h2>
					</div>

					{/* Description */}
					<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
						<p className="text-sm text-gray-800 italic">
							Light Shields provide a blend of defense and agility, offering
							wielders the ability to deflect attacks while maintaining
							flexibility in movement, making them suitable for those who favor
							a balanced approach.
						</p>
					</div>

					{/* Light Shields Table */}
					<div className="divide-y divide-amber-300">
						{/* Buckler */}
						<div className="flex">
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs font-semibold text-amber-800">
									Price: 50c
								</div>
							</div>
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs text-amber-800">Buckler</div>
							</div>
							<div className="flex-1 px-4 py-3">
								<div className="text-sm">
									<span className="font-bold text-amber-800">Properties</span>:
									Defense Dice 1d8, Durability 5, Slot 2, Bulk 0, One-Handed
								</div>
							</div>
						</div>

						{/* Small Shield */}
						<div className="flex">
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs font-semibold text-amber-800">
									Price: 90c
								</div>
							</div>
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs text-amber-800">Small Shield</div>
							</div>
							<div className="flex-1 px-4 py-3">
								<div className="text-sm">
									<span className="font-bold text-amber-800">Properties</span>:
									Defense Dice 1d10, Durability 10, Slot 3, Bulk 0, One-Handed
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Heavy Shields */}
				<div className="max-w-2xl mx-auto border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
					{/* Header */}
					<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
						<h2 className="text-xl font-bold text-amber-900">Heavy Shields</h2>
					</div>

					{/* Description */}
					<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
						<p className="text-sm text-gray-800 italic">
							Heavy Shields are imposing defenses that prioritize absolute
							protection, allowing wielders to weather even the most formidable
							attacks while sacrificing some agility in exchange for unyielding
							stability on the battlefield.
						</p>
					</div>

					<div className="divide-y divide-amber-300">
						{/* Large Shield */}
						<div className="flex">
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs font-semibold text-amber-800">
									Price: 200c
								</div>
							</div>
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs text-amber-800">Large Shield</div>
							</div>
							<div className="flex-1 px-4 py-3">
								<div className="text-sm">
									<span className="font-bold text-amber-800">Properties</span>:
									Defense Dice 1d12, Durability 15, Slot 4, Bulk 1, One-Handed
								</div>
							</div>
						</div>

						{/* Tower Shield */}
						<div className="flex">
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs font-semibold text-amber-800">
									Price: 350c
								</div>
							</div>
							<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
								<div className="text-xs text-amber-800">Tower Shield</div>
							</div>
							<div className="flex-1 px-4 py-3">
								<div className="text-sm">
									<span className="font-bold text-amber-800">Properties</span>:
									Defense Dice 1d12, Durability 20, Slot 5, Bulk 2, One-Handed
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
