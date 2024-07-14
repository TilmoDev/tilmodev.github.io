import RootLayout from "../layout";

export default function RulesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <RootLayout>{children}</RootLayout>;
}
