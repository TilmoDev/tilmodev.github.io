import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
	corePlugins: {
		preflight: true,
	},
	// Only in production
	...(process.env.NODE_ENV === "production" && {
		purge: {
			enabled: true,
			content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
		},
	}),
};
export default config;
