import Navbar from "@/components/Navbar/Navbar";

export default function Layout({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-full">
			<Navbar />

			<header className="relative bg-gray-800 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-0 after:border-y after:border-white/10">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-white">
						{title}
					</h1>
				</div>
			</header>

			<main>
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					{children}
				</div>
			</main>
		</div>
	);
}
