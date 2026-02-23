import Image from "next/image";
import Link from "next/link";

interface Badge {
	label: string;
	value: string;
}

interface HomeHeroProps {
	title: string;
	subtitle?: string;
	description: string;
	backgroundImage?: string;
	ctas?: Array<{
		label: string;
		href: string;
		variant?: "primary" | "secondary";
	}>;
	badges?: Badge[];
}

export default function HomeHero({
	title,
	subtitle,
	description,
	backgroundImage,
	ctas = [],
	badges = [],
}: HomeHeroProps) {
	return (
		<section className="relative min-h-screen w-full overflow-hidden">
			{/* Background Image */}
			{backgroundImage && (
				<div className="absolute inset-0 z-0">
					<Image
						src={backgroundImage}
						alt="Hero background"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-black/50" />
				</div>
			)}

			{/* Content */}
			<div className="relative z-10 flex items-center justify-start min-h-screen px-4 md:px-8 lg:px-20">
				<div className="max-w-2xl">
					{subtitle && (
						<p className="text-emerald-400 text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
							{subtitle}
						</p>
					)}

					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
						{title}
					</h1>

					<p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
						{description}
					</p>

					{ctas.length > 0 && (
						<div className="flex flex-wrap gap-4">
							{ctas.map((cta) => (
								<Link
									key={cta.label}
									href={cta.href}
									className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
										cta.variant === "secondary"
											? "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
											: "bg-emerald-500 text-white hover:bg-emerald-600"
									}`}
								>
									{cta.label}
									<span aria-hidden="true">→</span>
								</Link>
							))}
						</div>
					)}
				</div>
			</div>

			{/* Badges - Positioned at bottom center */}
			{badges.length > 0 && (
				<div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center gap-8 px-4 md:px-8 lg:px-12 py-8 bg-gradient-to-t from-black/40 to-transparent">
					{badges.map((badge, idx) => (
						<div key={idx} className="flex flex-col gap-1 text-center">
							<p className="text-white text-xl md:text-2xl font-bold">
								{badge.value}
							</p>
							<p className="text-gray-400 text-sm font-medium">{badge.label}</p>
						</div>
					))}
				</div>
			)}
		</section>
	);
}
