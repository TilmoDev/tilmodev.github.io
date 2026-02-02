"use client";

import Layout from "@/components/Layout/Layout";
import ContentWithImage from "@/templates/ContentWithImage/ContentWithImage";
import FeaturesGrid from "@/templates/FeaturesGrid/FeaturesGrid";
import HomeHero from "@/templates/HomeHero/HomeHero";

const heroTitle = "SciFi Tabletop RPG for Mercenaries";
const heroDescription =
	"Embark on a mission together with your friends in this mercenary-themed tabletop RPG where you are free to do anything. Become a hitman, be the greatest rangeer, wreack havoc as a criminal, or take the world as a medieval soldier. Your imagination is the limit.";
const badges = [
	{ label: "Infinite possibilities", value: "∞" },
	{ label: "Concurrent players possible", value: "9+" },
];
const seeMoreHref = "#";

const features = [
	{
		id: "1",
		title: "Roleplay Anyone You Want",
		description:
			"Become anyone you want. May it be a mercenary who uses brass knuckles. A silent deadly assassin who kills enemies with high burst attacks. A favorite character from other fiction content that you want to recreate. Your imagination is the limit.",
		image: "/assets/images/background3.png",
		cta: { label: "Learn More", href: "#" },
	},
	{
		id: "2",
		title: "Explore the Ends of the Universe",
		description:
			"The world of fiction is endless. Raid an ancient temple filled with impossible boss monsters,, explore unknown galaxies, or reimagine famous world histories. Nothing really stops you from doing anything.",
		image: "/assets/images/background4.png",
		cta: { label: "Learn More", href: "#" },
	},
];

export default function Home() {
	return (
		<Layout>
			<HomeHero
				title={heroTitle}
				description={heroDescription}
				backgroundImage="/assets/images/background.png"
				badges={badges}
			/>
			<FeaturesGrid features={features} seeMoreHref={seeMoreHref} />
			<ContentWithImage />
		</Layout>
	);
}
