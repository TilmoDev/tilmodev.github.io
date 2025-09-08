import ContentGroup from "@/components/ContentGroup/ContentGroup";
import FormulaDisplay from "@/components/FormulaDisplay/FormulaDisplay";
import InfoCard from "@/components/InfoCard/InfoCard";
import Layout from "@/components/Layout/Layout";
import SubSection from "@/components/SubSection/SubSection";
import TextContent from "@/components/TextContent/TextContent";

export default function Page() {
	return (
		<Layout title="Blog">
			<InfoCard title="Dev Blog 1: Why Sellswords Initiative Was Created">
				<TextContent>September 8, 2025</TextContent>

				<ContentGroup>
					<TextContent>
						Growing up in the 90s, my world revolved around video games and
						fantasy novels. But everything changed when I stepped into my first
						Dungeons & Dragons session back in 2007. A girl from college invited
						me to her friend's house, and honestly, I had no clue what I was
						getting into. I just remember creating a dwarf paladin based on my
						World of Warcraft character—because that seemed logical at the time,
						right?
					</TextContent>
					<TextContent>
						The scenario was pretty wild: our group was protecting a village
						from a swarm of ninjas. That's literally all I remember from that
						first game, but something clicked. The concept of tabletop
						roleplaying games grabbed me by the throat and wouldn't let go.
						Right then and there, I decided I wanted to become a Dungeon Master.
					</TextContent>
				</ContentGroup>

				<SubSection title="Diving Deep Into the D&D Universe">
					<ContentGroup>
						<TextContent>
							I started with Dungeons & Dragons 3.5 and went absolutely crazy
							collecting books. I'm talking about devouring everything—even the
							really obscure stuff like that book with the Sword Sage class that
							probably only twelve people ever actually used. I was obsessed
							with understanding every mechanic, every rule, every possibility
							the system offered.
						</TextContent>
						<TextContent>
							When D&D 4th Edition dropped, I became one of the few people who
							actually loved it. While the community was tearing it apart, I was
							out there converting new players left and right. There was
							something about the video game-like feel that just worked for me
							and my groups. I ran games in that system for years and brought so
							many fresh faces into the hobby.
						</TextContent>
						<TextContent>
							But here's where things got frustrating: the math was completely
							out of control on the monster side. The amount of prep work
							required was insane. I constantly had to scale enemies to match my
							players' power levels just to keep encounters challenging. Players
							only had to manage one character, but as a GM, I was juggling
							dozens of different monster stat blocks. Eventually, I started to
							hate that aspect of the game.
						</TextContent>
					</ContentGroup>
				</SubSection>

				<SubSection title="The 5th Edition Honeymoon Period">
					<ContentGroup>
						<TextContent>
							Then 5th Edition arrived like a breath of fresh air. It combined
							the best elements of 3rd and 4th editions, and everyone—including
							me—fell in love with it. The system felt streamlined, accessible,
							and fun. But after running it for several years, I started
							noticing some serious problems that were driving me nuts.
						</TextContent>
					</ContentGroup>
				</SubSection>

				<FormulaDisplay>
					The Big Problems That Made Me Want to Scream
				</FormulaDisplay>

				<SubSection title="The Modifier System is Absolutely Bonkers">
					<ContentGroup>
						<TextContent>
							The thing I hated most about teaching new players was character
							creation, specifically explaining those six attributes and their
							modifiers. Think about it: why does having 19 Strength only give
							you a +4 bonus when rolling dice? Why not just use the full 19? I
							can't tell you how many times a new player would roll a d20 and
							add their full Strength score instead of the modifier. It makes no
							logical sense from a new player's perspective.
						</TextContent>
						<TextContent>
							This isn't just a minor inconvenience—it's a fundamental design
							flaw that creates unnecessary confusion. When someone picks up
							dice for the first time, they shouldn't need a math lesson to
							understand why their impressive 18 in a stat translates to a
							measly +4 bonus.
						</TextContent>
					</ContentGroup>
				</SubSection>

				<SubSection title="Experience Points Create Murder Hobos">
					<ContentGroup>
						<TextContent>
							The XP system in D&D has a massive flaw: it's primarily tied to
							killing monsters. This creates what we call "murder hobos"—players
							who want to kill everything that moves because that's how you get
							stronger. My players would hear about some cool quest or
							interesting NPC, but if there wasn't a good chance of combat and
							XP at the end, they'd lose interest fast.
						</TextContent>
						<TextContent>
							I watched perfectly reasonable people turn into bloodthirsty
							maniacs because the game mechanics rewarded violence over
							creativity. Social encounters, clever problem-solving, and
							peaceful resolutions got completely ignored because they didn't
							advance your character. It was maddening.
						</TextContent>
					</ContentGroup>
				</SubSection>

				<SubSection title="Sidetracking is a DM's Nightmare">
					<ContentGroup>
						<TextContent>
							Here's something every DM knows but doesn't talk about enough:
							players will ignore your carefully planned quests. You spend hours
							preparing this amazing adventure, and your players decide they
							want to chase a random rumor about a haunted bakery instead. Since
							XP isn't really tied to completing the main quest—it's more about
							fighting stronger monsters—there's no mechanical incentive for
							players to stay focused.
						</TextContent>
						<TextContent>
							The amount of on-the-fly improvisation this requires is
							exhausting. You're constantly making things up, trying to salvage
							your prep work, and hoping you can guide them back to something
							resembling a coherent story.
						</TextContent>
					</ContentGroup>
				</SubSection>

				<SubSection title="The Birth of Sellswords Initiative">
					<ContentGroup>
						<TextContent>
							These problems were eating away at my enjoyment of the hobby I
							loved. I realized that D&D, despite all its improvements over the
							years, still wasn't truly friendly to people who were brand new to
							tabletop gaming. The learning curve was steep, the mechanics
							sometimes worked against good storytelling, and I was spending
							more time fighting the system than enjoying it.
						</TextContent>
						<TextContent>
							That's when I started developing what would eventually become
							Sellswords Initiative. Back then, it wasn't even called that—it
							was just a collection of homebrew materials. Little fixes here and
							there, alternative rules that made more sense, systems that
							encouraged the kind of gameplay I actually wanted to see at my
							table.
						</TextContent>
						<TextContent>
							I wanted to create something that would solve these fundamental
							problems: make character creation actually intuitive for new
							players, reward good storytelling over mindless violence, and give
							DMs tools to keep their games focused and engaging without
							drowning in prep work.
						</TextContent>
						<TextContent>
							The goal wasn't to compete with D&D or tear down what already
							existed. I just wanted to build something better—something that
							would let me and my players focus on the parts of tabletop gaming
							that made us fall in love with it in the first place:
							collaborative storytelling, memorable characters, and adventures
							that mattered.
						</TextContent>
						<TextContent>
							That's the foundation of why Sellswords Initiative exists. In my
							next post, I'll dive into the specific solutions I developed and
							how they address each of these core problems. Because honestly, if
							we're going to spend our precious free time rolling dice and
							pretending to be heroes, shouldn't the system actually support
							heroic storytelling instead of fighting against it?
						</TextContent>
					</ContentGroup>
				</SubSection>
			</InfoCard>
		</Layout>
	);
}
