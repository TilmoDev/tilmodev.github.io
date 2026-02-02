import Navbar from "@/components/Navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-full">
			<Navbar />
			<main>{children}</main>
			<footer className="bg-stone-900 text-white mt-12">
				<div className="px-10 py-10 md:py-12 flex flex-col gap-10">
					<div className="text-xs md:text-sm">
						© {new Date().getFullYear()} Badass Studios. All rights reserved.
						Sellsword Initiative may not be used by anyone other than Badass
						Studios.
					</div>

					<div className="mt-4 md:mt-0 flex gap-10 text-sm">
						<a href="#" className="hover:text-white">
							Terms of Service
						</a>
						<a href="#" className="hover:text-white">
							About the Developers
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
