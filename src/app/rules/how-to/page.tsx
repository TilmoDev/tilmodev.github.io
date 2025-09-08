"use client";

import Layout from "@/components/Layout/Layout";
import InfoCard from "@/components/InfoCard/InfoCard";
import TextContent from "@/components/TextContent/TextContent";
import ProTip from "@/components/ProTip/ProTip";
import SubSection from "@/components/SubSection/SubSection";
import ContentGroup from "@/components/ContentGroup/ContentGroup";
import FormulaDisplay from "@/components/FormulaDisplay/FormulaDisplay";
import RollTypeList from "@/components/RollTypeList/RollTypeList";

import { useTranslations } from "next-intl";

export default function Page() {
	const t = useTranslations("HowTo");

	const richText = (key: string) =>
		t.rich(key, {
			emphasis: (chunks) => <strong>{chunks}</strong>,
			critical: (chunks) => (
				<strong>
					<i>{chunks}</i>
				</strong>
			),
		});

	const getComponents = (key: string) =>
		t.raw(key) as Array<{ title: string; content: string; example?: string }>;
	const getTypes = (key: string) =>
		t.raw(key) as Array<{ title: string; content: string; example?: string }>;

	return (
		<Layout title={t("title")}>
			<div className="grid gap-6">
				<InfoCard title={t("sections.introduction.title")} titleLevel="h2">
					<TextContent>{t("sections.introduction.content")}</TextContent>
				</InfoCard>

				<InfoCard title={t("sections.player.title")}>
					<TextContent>{t("sections.player.content")}</TextContent>
				</InfoCard>

				<InfoCard title={t("sections.director.title")}>
					<ContentGroup>
						<TextContent>{t("sections.director.content")}</TextContent>
						<ProTip>{t("sections.director.protips.0.content")}</ProTip>
						<ProTip label={t("sections.director.protips.1.label")}>
							{t("sections.director.protips.1.content")}
						</ProTip>
					</ContentGroup>
				</InfoCard>

				<InfoCard title={t("sections.table.title")}>
					<TextContent>{t("sections.table.content")}</TextContent>
				</InfoCard>

				<InfoCard title={t("sections.dice.title")}>
					<ContentGroup>
						<TextContent>{richText("sections.dice.content")}</TextContent>
						<TextContent variant="note">
							{richText("sections.dice.reminder")}
						</TextContent>
						<ProTip>{t("sections.dice.protips.0.content")}</ProTip>
					</ContentGroup>
				</InfoCard>

				<InfoCard title={t("sections.session.title")}>
					<TextContent>{t("sections.session.content")}</TextContent>
				</InfoCard>

				<InfoCard title={t("sections.roleplay.title")}>
					<ContentGroup>
						<TextContent>{t("sections.roleplay.content")}</TextContent>
						<ProTip>{t("sections.roleplay.protips.0.content")}</ProTip>
					</ContentGroup>
				</InfoCard>

				<InfoCard title={t("sections.story.title")}>
					<ContentGroup>
						<TextContent>{richText("sections.story.content")}</TextContent>
						<TextContent variant="note">
							{richText("sections.story.note")}
						</TextContent>
					</ContentGroup>
				</InfoCard>

				<InfoCard title={t("sections.mission.title")}>
					<ContentGroup>
						<TextContent>{t("sections.mission.content")}</TextContent>
						<TextContent variant="note">
							{richText("sections.mission.note")}
						</TextContent>

						<SubSection
							title={t(
								"sections.mission.subsections.creditsAndCharacterProgression.title"
							)}
							spacing="compact"
						>
							<TextContent>
								{t(
									"sections.mission.subsections.creditsAndCharacterProgression.content"
								)}
							</TextContent>
						</SubSection>
					</ContentGroup>
				</InfoCard>

				<InfoCard title={t("sections.rolls.title")}>
					<SubSection title={t("sections.rolls.subsections.anatomy.title")}>
						<TextContent variant="intro">
							{t("sections.rolls.subsections.anatomy.content")}
						</TextContent>
					</SubSection>

					<SubSection title={t("sections.rolls.subsections.whatIsRoll.title")}>
						<TextContent>
							{t("sections.rolls.subsections.whatIsRoll.content")}
						</TextContent>
					</SubSection>

					<SubSection
						title={t("sections.rolls.subsections.whatIsDicePool.title")}
					>
						<TextContent>
							{t("sections.rolls.subsections.whatIsDicePool.content")}
						</TextContent>
					</SubSection>

					<SubSection title={t("sections.rolls.subsections.structure.title")}>
						<ContentGroup>
							<TextContent>
								{t("sections.rolls.subsections.structure.content")}
							</TextContent>
							<FormulaDisplay>
								{richText("sections.rolls.subsections.structure.formula")}
							</FormulaDisplay>
							<RollTypeList
								types={getComponents(
									"sections.rolls.subsections.structure.components"
								)}
							/>
						</ContentGroup>
					</SubSection>

					<SubSection title={t("sections.rolls.subsections.modifiers.title")}>
						<ContentGroup>
							<TextContent>
								{t("sections.rolls.subsections.modifiers.content")}
							</TextContent>
							<RollTypeList
								types={getTypes("sections.rolls.subsections.modifiers.types")}
							/>
						</ContentGroup>
					</SubSection>

					<SubSection
						title={t("sections.rolls.subsections.opposedRolls.title")}
					>
						<ContentGroup spacing="tight">
							<TextContent>
								{t("sections.rolls.subsections.opposedRolls.content")}
							</TextContent>
							<TextContent>
								{t("sections.rolls.subsections.opposedRolls.subtitle")}
							</TextContent>
						</ContentGroup>
					</SubSection>

					<SubSection
						title={t("sections.rolls.subsections.dynamicOpposed.title")}
					>
						<ContentGroup>
							<TextContent>
								{t("sections.rolls.subsections.dynamicOpposed.content")}
							</TextContent>
							<RollTypeList
								types={getTypes(
									"sections.rolls.subsections.dynamicOpposed.types"
								)}
							/>
						</ContentGroup>
					</SubSection>

					<SubSection
						title={t("sections.rolls.subsections.staticOpposed.title")}
					>
						<ContentGroup>
							<TextContent>
								{t("sections.rolls.subsections.staticOpposed.content")}
							</TextContent>
							<RollTypeList
								types={getTypes(
									"sections.rolls.subsections.staticOpposed.types"
								)}
							/>
							<ProTip>
								{t("sections.rolls.subsections.staticOpposed.protip.content")}
							</ProTip>
						</ContentGroup>
					</SubSection>

					<SubSection
						title={t("sections.rolls.subsections.criticalHits.title")}
					>
						<TextContent>
							{richText("sections.rolls.subsections.criticalHits.content")}
						</TextContent>
					</SubSection>

					<SubSection title={t("sections.rolls.subsections.aimedShots.title")}>
						<TextContent>
							{richText("sections.rolls.subsections.aimedShots.content")}
						</TextContent>
					</SubSection>

					<SubSection title={t("sections.rolls.subsections.fumbles.title")}>
						<ContentGroup>
							<TextContent>
								{t("sections.rolls.subsections.fumbles.content")}
							</TextContent>
							<TextContent variant="note">
								{richText("sections.rolls.subsections.fumbles.note")}
							</TextContent>
						</ContentGroup>
					</SubSection>
				</InfoCard>
			</div>
		</Layout>
	);
}
