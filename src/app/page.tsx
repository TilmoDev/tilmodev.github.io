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
		</div>
	);
}
