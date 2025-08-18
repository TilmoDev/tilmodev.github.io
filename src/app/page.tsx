"use client";

import { Image } from "@fluentui/react-components";
import logo from "../../public/images/logo.png";

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<Image
				alt="Sellwords Initiative"
				src={logo.src}
				height={200}
				width={200}
			/>
			<h2>Welcome to Sellswords Initiative</h2>
			<p className="mb-4">
				Three mercenaries huddle behind a half-destroyed concrete barrier as
				bullets ping off the edges. McCoin, the team&apos;s sniper, calmly
				assembles his custom rifle while bullets whiz overhead. &quot;I count
				six hostiles, two with heavy weapons,&quot; he mutters, not looking up
				from his work. Ivan, his massive frame barely concealed by the cover,
				flexes his mechanical fist with an electric whirr. &quot;Is good
				odds,&quot; the Novistani grins, the servos in his machine-fist weapon
				humming to life. Meanwhile, Cath&apos;s fingers dance across her
				holographic interface, her eyes reflecting scrolling code. &quot;Their
				security system is garbage,&quot; she smirks. &quot;I&apos;ve locked
				down the east door and killed their comms. You&apos;ve got 30 seconds
				before their backup protocols kick in.&quot; McCoin slots his final
				round into the chamber with a satisfying click. &quot;Ladies
				first,&quot; he says with a nod to Ivan, who flips him off before
				launching over the barrier with a battle cry. As gunfire erupts, Cath
				gives McCoin a knowing look. &quot;Same plan as Krovopol?&quot; The
				sniper just winks, disappearing into the shadows as Cath&apos;s fingers
				fly across her keyboard, ready to turn the enemy&apos;s own security
				turrets against them.
			</p>
			<p className="mb-4">
				The ancient temple trembled as a massive stone golem advanced, its fists
				shattering the floor with each thunderous step. Scott, a pint-sized
				hunter perched atop a fallen pillar, kept his crossbow trained on the
				glowing runes etched into the construct&apos;s chest while his loyal
				boar, Bacon, snorted anxiously beside him. &quot;Any time now,
				Lynn!&quot; he shouted to the swashbuckling pirate frantically
				deciphering arcane symbols across the chamber. Meanwhile, Edmund, a
				stalwart knight clad in dented armor, held his ground against the
				golem&apos;s relentless assault, deflecting crushing blows with his
				shield and buying precious seconds for Lynn. Just as the golem raised
				its fists for a devastating strike, Lynn cried out triumphantly,
				activating a final glyph that froze the construct mid-swing. As it began
				to crumble, Scott grinned and commanded, &quot;Bacon, fetch!&quot; The
				eager boar charged forward through falling debris and snatched the
				pulsing magical heart from the disintegrating golem&apos;s chest.
			</p>
			<p>
				Gregg sprinted down the alleyway, covering the team&apos;s rear with his
				heavy machine gun. Major, the captain, led the way, her eyes fixed on
				the extraction point - a dropship hovering above the rooftop a block
				ahead. Vina scanned the rooftops for Mutateds, while Steel, the android,
				tracked the horde closing in with his advanced sensors. As they burst
				into the open street, chaos erupted. Mutateds poured out of every
				doorway, sprinting towards them with unnatural speed.
				&quot;Extraction&apos;s in sight!&quot; Major yelled, pointing to the
				chopper&apos;s spotlight. Steel grabbed his flamethrower, blasting a
				path through the Mutateds with a powerful jet of flame. &quot;Clearing a
				path!&quot; he shouted with his bionic voice. Vina leapt onto a
				dumpster, using it to reach the rooftop where the dropship awaited.
				Gregg laid down a withering field of fire, holding off the Mutateds as
				Major and Steel followed. On the rooftop, the dropship&apos;s rotors
				whipped the air into a frenzy. &quot;In, in, in!&quot; the pilot yelled,
				gesturing wildly. As they piled aboard, a Mutated leapt onto the skid,
				but Steel dispatched it with a precise kick. With a final burst of
				speed, the dropship lifted off, leaving the Mutateds to swarm futilely
				beneath them. &quot;That was fun,&quot; Gregg quipped, grinning as the
				city fell away beneath them.
			</p>
		</div>
	);
}
