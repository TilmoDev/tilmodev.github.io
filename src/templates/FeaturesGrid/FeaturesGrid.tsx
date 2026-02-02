import Image from "next/image";
import Link from "next/link";

interface FeatureCard {
	id: string;
	title: string;
	description: string;
	image: string;
	icon?: string;
	cta?: {
		label: string;
		href: string;
	};
}

interface FeaturesGridProps {
	features: FeatureCard[];
	title?: string;
	seeMoreHref?: string;
}

export default function FeaturesGrid({
	features,
	title,
	seeMoreHref,
}: FeaturesGridProps) {
	return (
		<section className="py-12 md:py-16 px-4 md:px-8 lg:px-20 bg-transparent">
			<div>
				<div className="mb-6">
					<h2 className="text-sm md:text-base text-gray-300 font-medium">
						Features of Sellsword Initiative
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{features.map((feature) => (
						<article
							key={feature.id}
							className="flex flex-col md:flex-row items-stretch gap-0 rounded-2xl overflow-hidden border border-gray-800 bg-gray-900"
						>
							<div className="relative w-full md:w-72 h-44 md:h-auto flex-shrink-0">
								<Image
									src={feature.image}
									alt={feature.title}
									fill
									className="object-cover"
								/>
							</div>

							<div
								className="flex-1 p-6 md:p-8 flex flex-col justify-between"
								style={{
									background:
										"linear-gradient(to left, rgba(18, 59, 47, 0.7439024390243902) 0%, rgba(24, 46, 39, 0.39073663463907365) 50%, rgba(32, 32, 32, 0) 100%)",
								}}
							>
								<div>
									<h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
										{feature.title}
									</h3>
									<p className="text-gray-300 text-sm md:text-base leading-relaxed">
										{feature.description}
									</p>
								</div>

								<div className="mt-6 flex items-center justify-end">
									{feature.cta ? (
										<Link
											href={feature.cta.href}
											className="inline-flex items-center gap-3 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-colors"
										>
											{feature.cta.label}
										</Link>
									) : null}
								</div>
							</div>
						</article>
					))}
				</div>

				{seeMoreHref && (
					<div className="mt-6 flex justify-end">
						<Link
							href={seeMoreHref}
							className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400"
						>
							See more <span aria-hidden>→</span>
						</Link>
					</div>
				)}
			</div>
		</section>
	);
}
