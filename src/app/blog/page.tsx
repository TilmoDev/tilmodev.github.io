import ContentGroup from "@/components/ContentGroup/ContentGroup";
import FormulaDisplay from "@/components/FormulaDisplay/FormulaDisplay";
import InfoCard from "@/components/InfoCard/InfoCard";
import Layout from "@/components/Layout/Layout";
import SubSection from "@/components/SubSection/SubSection";
import TextContent from "@/components/TextContent/TextContent";

import { useRichTranslations } from "@/hooks/useRichTranslations";

export default function Page() {
	const { t } = useRichTranslations({
		namespace: "Blog1",
	});

	return (
		<Layout title="Blog">
			<InfoCard title="Dev Blog 1: Why Sellswords Initiative Was Created">
				<TextContent>September 8, 2025</TextContent>

				<ContentGroup>
					<TextContent>{t("intro.part1")}</TextContent>
					<TextContent>{t("intro.part2")}</TextContent>
				</ContentGroup>

				<SubSection title="Diving Deep Into the D&D Universe">
					<ContentGroup>
						<TextContent>{t("divingdeep.part1")}</TextContent>
						<TextContent>{t("divingdeep.part2")}</TextContent>
						<TextContent>{t("divingdeep.part3")}</TextContent>
					</ContentGroup>
				</SubSection>

				<SubSection title="The 5th Edition Honeymoon Period">
					<ContentGroup>
						<TextContent>{t("honeymoon.part1")}</TextContent>
					</ContentGroup>
				</SubSection>

				<FormulaDisplay>
					The Big Problems That Made Me Want to Scream
				</FormulaDisplay>

				<SubSection title="The Modifier System is Absolutely Bonkers">
					<ContentGroup>
						<TextContent>{t("modifiersystem.part1")}</TextContent>
						<TextContent>{t("modifiersystem.part2")}</TextContent>
					</ContentGroup>
				</SubSection>

				<SubSection title="Experience Points Create Murder Hobos">
					<ContentGroup>
						<TextContent>{t("experiencepoints.part1")}</TextContent>
						<TextContent>{t("experiencepoints.part2")}</TextContent>
					</ContentGroup>
				</SubSection>

				<SubSection title="Sidetracking is a DM's Nightmare">
					<ContentGroup>
						<TextContent>{t("sidetracking.part1")}</TextContent>
						<TextContent>{t("sidetracking.part2")}</TextContent>
					</ContentGroup>
				</SubSection>

				<SubSection title="The Birth of Sellswords Initiative">
					<ContentGroup>
						<TextContent>{t("birth.part1")}</TextContent>
						<TextContent>{t("birth.part2")}</TextContent>
						<TextContent>{t("birth.part3")}</TextContent>
						<TextContent>{t("birth.part4")}</TextContent>
						<TextContent>{t("birth.part5")}</TextContent>
					</ContentGroup>
				</SubSection>
			</InfoCard>
		</Layout>
	);
}
