import { CSSProperties } from "react";

export default function ContentWithImage() {
	const sectionStyle: CSSProperties = {
		width: "100%",
		height: "1117px",
		backgroundImage: "url('/assets/images/background2.png')",
		backgroundSize: "cover",
		backgroundPosition: "center",
		position: "relative",
		overflow: "hidden",
	};

	const gradientOverlay: CSSProperties = {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background:
			"linear-gradient(to left, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0.4029850746268656) 56%, rgba(0, 0, 0, 0) 83%)",
		pointerEvents: "none",
	};

	const contentTitle = "About Sellswords Initiative";
	const contentText = [
		"Sellswords Initiative is a fast-paced, mission-focused tabletop RPG about mercenaries taking on high-risk contracts in a ruthless world.",
		"Built for busy players it trims away bloated leveling, endless prep, and meandering campaigns, replacing them with tight 3-4 hour missions where every decision matters and every credit earned translates directly into better gear and new options.",
		"Instead of grinding for XP, your crew thrives by planning smart, executing clean, and surviving long enough to cash out and upgrade. With streamlined combat, a Momentum-based action system, and a focus on tactical choices over math-heavy bookkeeping, Sellswords Initiative delivers sharp, cinematic firefights and heists that start on-time, hit hard, and actually finish in one sitting.",
	];

	return (
		<section style={sectionStyle}>
			{/* Gradient overlay */}
			<div style={gradientOverlay} />

			{/* Content grid */}
			<div
				className="relative h-full px-4 md:px-8 lg:px-20"
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 630px",
					alignItems: "center",
					maxWidth: "100%",
				}}
			>
				{/* Left side (empty, shows background) */}
				<div />

				{/* Right side (text content) */}
				<div className="text-white pr-6 md:pr-8 py-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-8">
						{contentTitle}
					</h2>

					<div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-100">
						{contentText.map((paragraph, idx) => (
							<p key={idx}>{paragraph}</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
