"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface SubMenuItem {
	label: string;
	href: string;
}

interface MenuItem {
	label: string;
	href?: string;
	submenu?: SubMenuItem[];
}

interface MenuSection {
	title: string;
	items: MenuItem[];
}

interface MenuConfig {
	[key: string]: MenuSection;
}

interface NavigationProps {
	menuConfig?: MenuConfig;
	logoSrc?: string;
	companyName?: string;
	showLogin?: boolean;
	className?: string;
}

const defaultMenuConfig: MenuConfig = {
	home: {
		title: "Home",
		items: [{ label: "Home", href: "/" }],
	},
	rules: {
		title: "Rules",
		items: [
			{
				label: "Character Creation",
				submenu: [
					{
						label: "Proficiencies",
						href: "/rules/character-creation/proficiencies",
					},
					{
						label: "Traits",
						href: "/rules/character-creation/traits",
					},
				],
			},
			{ label: "How To", href: "/rules/how-to" },
		],
	},
	armory: {
		title: "Armory",
		items: [
			{ label: "Armors", href: "/armory/armors" },
			{ label: "Weapons", href: "/armory/weapons" },
		],
	},
	abilities: {
		title: "Abilities",
		items: [{ label: "Abilities", href: "/abilities" }],
	},
	blog: {
		title: "Blog",
		items: [{ label: "Blog", href: "/blog" }],
	},
	appendix: {
		title: "Appendix",
		items: [{ label: "Appendix", href: "/appendix" }],
	},
};

export default function Navigation({
	menuConfig = defaultMenuConfig,
	logoSrc = "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500",
	companyName = "Your Company",
	showLogin = true,
	className = "sticky inset-x-0 top-0 z-50",
}: NavigationProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [mobileActiveSection, setMobileActiveSection] = useState<string | null>(
		null
	);
	const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
	const timeoutRef = useRef<NodeJS.Timeout>();

	// Handle click outside to close dropdowns
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node;
			const isInsideDropdown = Object.values(dropdownRefs.current).some(
				(ref) => ref && ref.contains(target)
			);
			if (!isInsideDropdown) {
				setActiveDropdown(null);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleMouseEnter = (sectionKey: string) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		setActiveDropdown(sectionKey);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setActiveDropdown(null);
		}, 150);
	};

	const isSimpleLink = (section: MenuSection) => {
		return (
			section.items.length === 1 &&
			!section.items[0].submenu &&
			section.items[0].href
		);
	};

	const toggleMobileSection = (sectionKey: string) => {
		setMobileActiveSection(
			mobileActiveSection === sectionKey ? null : sectionKey
		);
	};

	return (
		<header className={className}>
			<nav
				aria-label="Global"
				className="flex items-center justify-between p-6 lg:px-8"
			>
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">{companyName}</span>
						<Image
							src={logoSrc}
							alt={`${companyName} Logo`}
							width={32}
							height={32}
							className="h-8 w-auto"
						/>
					</Link>
				</div>

				{/* Mobile menu button */}
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200 hover:text-white transition-colors"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							aria-hidden="true"
							className="size-6"
						>
							<path
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>

				{/* Desktop navigation */}
				<div className="hidden lg:flex lg:gap-x-8">
					{Object.entries(menuConfig).map(([sectionKey, section]) => {
						if (isSimpleLink(section)) {
							return (
								<Link
									key={sectionKey}
									href={section.items[0].href!}
									className="text-sm/6 font-semibold text-white hover:text-gray-300 transition-colors"
								>
									{section.title}
								</Link>
							);
						}
						return (
							<div
								key={sectionKey}
								className="relative"
								ref={(el) => (dropdownRefs.current[sectionKey] = el)}
								onMouseEnter={() => handleMouseEnter(sectionKey)}
								onMouseLeave={handleMouseLeave}
							>
								<button
									type="button"
									className="flex items-center gap-x-1 text-sm/6 font-semibold text-white hover:text-gray-300 transition-colors"
									aria-expanded={activeDropdown === sectionKey}
								>
									{section.title}
									<svg
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
										className={`size-5 flex-none transition-transform ${
											activeDropdown === sectionKey ? "rotate-180" : ""
										}`}
									>
										<path
											fillRule="evenodd"
											d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
											clipRule="evenodd"
										/>
									</svg>
								</button>

								{/* Desktop Dropdown */}
								{activeDropdown === sectionKey && (
									<div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
										<div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
											<div className="p-4">
												{section.items.map((item) => (
													<div key={item.label} className="group relative">
														{item.submenu ? (
															<div className="block py-2">
																<div className="font-semibold text-gray-900 group-hover:text-indigo-600">
																	{item.label}
																</div>
																<div className="mt-1 space-y-1">
																	{item.submenu.map((subItem) => (
																		<Link
																			key={subItem.label}
																			href={subItem.href}
																			className="block rounded-lg px-3 py-1 text-gray-500 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
																			onClick={() => setActiveDropdown(null)}
																		>
																			{subItem.label}
																		</Link>
																	))}
																</div>
															</div>
														) : (
															<Link
																href={item.href!}
																className="block rounded-lg px-3 py-2 font-semibold text-gray-900 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
																onClick={() => setActiveDropdown(null)}
															>
																{item.label}
															</Link>
														)}
													</div>
												))}
											</div>
										</div>
									</div>
								)}
							</div>
						);
					})}
				</div>

				{/* Desktop login */}
				{showLogin && (
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<Link
							href="/login"
							className="text-sm/6 font-semibold text-white hover:text-gray-300 transition-colors"
						>
							Log in <span aria-hidden="true">&rarr;</span>
						</Link>
					</div>
				)}
			</nav>

			{/* Mobile menu */}
			{mobileMenuOpen && (
				<div className="fixed inset-0 z-50 lg:hidden">
					{/* Backdrop */}
					<div
						className="fixed inset-0 bg-black/20 backdrop-blur-sm"
						onClick={() => setMobileMenuOpen(false)}
					/>

					{/* Menu panel */}
					<div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
						<div className="flex items-center justify-between">
							<Link href="/" className="-m-1.5 p-1.5">
								<span className="sr-only">{companyName}</span>
								<Image
									src={logoSrc}
									alt={`${companyName} Logo`}
									width={32}
									height={32}
									className="h-8 w-auto"
								/>
							</Link>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-gray-200 hover:text-white transition-colors"
							>
								<span className="sr-only">Close menu</span>
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									aria-hidden="true"
									className="size-6"
								>
									<path
										d="M6 18 18 6M6 6l12 12"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>

						{/* Mobile menu items */}
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-white/10">
								<div className="space-y-2 py-6">
									{Object.entries(menuConfig).map(([sectionKey, section]) => {
										if (isSimpleLink(section)) {
											return (
												<Link
													key={sectionKey}
													href={section.items[0].href!}
													onClick={() => setMobileMenuOpen(false)}
													className="block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 transition-colors"
												>
													{section.title}
												</Link>
											);
										}

										// Render as accordion for complex sections
										return (
											<div key={sectionKey}>
												<button
													type="button"
													onClick={() => toggleMobileSection(sectionKey)}
													className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 transition-colors"
												>
													{section.title}
													<svg
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
														className={`size-5 flex-none transition-transform ${
															mobileActiveSection === sectionKey
																? "rotate-180"
																: ""
														}`}
													>
														<path
															fillRule="evenodd"
															d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
															clipRule="evenodd"
														/>
													</svg>
												</button>

												{/* Mobile submenu */}
												{mobileActiveSection === sectionKey && (
													<div className="mt-2 space-y-2 pl-4">
														{section.items.map((item) => (
															<div key={item.label}>
																{item.submenu ? (
																	<div>
																		<div className="px-3 py-1 text-sm font-medium text-gray-400">
																			{item.label}
																		</div>
																		{item.submenu.map((subItem) => (
																			<Link
																				key={subItem.label}
																				href={subItem.href}
																				onClick={() => setMobileMenuOpen(false)}
																				className="block rounded-lg px-6 py-2 text-sm text-white hover:bg-white/5 transition-colors"
																			>
																				{subItem.label}
																			</Link>
																		))}
																	</div>
																) : (
																	<Link
																		href={item.href!}
																		onClick={() => setMobileMenuOpen(false)}
																		className="block rounded-lg px-3 py-2 text-white hover:bg-white/5 transition-colors"
																	>
																		{item.label}
																	</Link>
																)}
															</div>
														))}
													</div>
												)}
											</div>
										);
									})}
								</div>

								{showLogin && (
									<div className="py-6">
										<Link
											href="/login"
											onClick={() => setMobileMenuOpen(false)}
											className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5 transition-colors"
										>
											Log in
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
