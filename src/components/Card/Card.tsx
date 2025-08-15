import React from "react";

const Card = () => {
	return (
		<div className="max-w-2xl mx-auto bg-white border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
			{/* Header */}
			<div className="bg-amber-200 border-b-2 border-amber-600 px-4 py-2">
				<h2 className="text-xl font-bold text-amber-900">Finesse</h2>
			</div>

			{/* Description */}
			<div className="px-4 py-3 bg-amber-50 border-b border-amber-300">
				<p className="text-sm text-gray-800 italic">
					Your movements radiate precision and grace, deftly weaving through
					danger with agility, nimble reflexes, and effortless control.
				</p>
			</div>

			{/* Ranks Table */}
			<div className="divide-y divide-amber-300">
				{/* Rank I */}
				<div className="flex bg-white">
					<div className="w-24 px-3 py-3 bg-amber-100 border-r border-amber-300 text-center">
						<div className="text-xs font-semibold text-amber-800">
							Price: 500c
						</div>
					</div>
					<div className="flex-1 px-4 py-3">
						<div className="text-sm">
							<span className="font-bold text-amber-800">Rank I</span> - Your
							Base Action and Reaction Dice when encountering finesse-based
							scenarios is now d8.
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
				<div className="flex bg-white">
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
						<div className="text-xs font-semibold text-amber-800">Special:</div>
					</div>
					<div className="flex-1 px-4 py-3">
						<div className="text-sm">
							Draw and Holster maneuvers are now free. The Stamina cost for the
							Administer and Hide maneuvers is reduced by 1. Additionally, the
							Stamina cost for the Stand maneuver is reduced by 1.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
