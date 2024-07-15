import RootLayout from "../layout";

export default function ArmoryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <RootLayout>{children}</RootLayout>;
}
