"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface SubMenuItem {
	label: string;
	sublabel: string;
	icon: string;
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
	introduction: {
		title: "Introduction",
		items: [{ label: "Introduction", href: "/" }],
	},
	mercenary: {
		title: "Mercenary",
		items: [{ label: "Mercenary", href: "/" }],
	},
	skills: {
		title: "Skills",
		items: [
			{
				label: "Skills",
				submenu: [
					{
						label: "Equipment",
						sublabel: "Learn the basics",
						icon: "/assets/vectors/backpack.svg",
						href: "/skills/equipment",
					},
					{
						label: "Proficiency",
						sublabel: "Learn the basics",
						icon: "/assets/vectors/handshake.svg",
						href: "/skills/proficiency",
					},
					{
						label: "Expertise",
						sublabel: "Your character's profession",
						icon: "/assets/vectors/career.svg",
						href: "/skills/proficiency",
					},
					{
						label: "Talents",
						sublabel: "???",
						icon: "/assets/vectors/star.svg",
						href: "/skills/talents",
					},
					{
						label: "Techniques",
						sublabel: "Your character's combat prowess",
						icon: "/assets/vectors/lightbulb.svg",
						href: "/skills/techniques",
					},
					{
						label: "Masteries",
						sublabel: "Pinnacle of your character's specialization",
						icon: "/assets/vectors/scroll.svg",
						href: "/skills/masteries",
					},
				],
			},
		],
	},
	directorsToolkit: {
		title: "Director's Toolkit",
		items: [
			{
				label: "Toolkits",
				submenu: [
					{
						label: "Director's Toolkit",
						sublabel: "All you need to become a good Director",
						icon: "/assets/vectors/book.svg",
						href: "/skills/equipment",
					},
				],
			},
			{
				label: "Blog",
				submenu: [
					{
						label: "Dev Journal",
						sublabel: "History and updates of the game",
						icon: "/assets/vectors/book2.svg",
						href: "/skills/equipment",
					},
					{
						label: "Short Stories",
						sublabel: "Action and drama stories",
						icon: "/assets/vectors/tree.svg",
						href: "/skills/equipment",
					},
				],
			},
		],
	},
};

export default function Navigation({
	menuConfig = defaultMenuConfig,
	logoSrc = "/assets/vectors/placeholder.svg",
	companyName = "Your Company",
	showLogin = true,
	className = "sticky inset-x-0 top-0 z-50",
}: NavigationProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [mobileActiveSection, setMobileActiveSection] = useState<string | null>(
		null,
	);
	const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
	const timeoutRef = useRef<NodeJS.Timeout>();

	// Handle click outside to close dropdowns
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node;
			const isInsideDropdown = Object.values(dropdownRefs.current).some(
				(ref) => ref && ref.contains(target),
			);
			if (!isInsideDropdown) {
				setActiveDropdown(null);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	// Handle Escape key to close dropdowns and mobile menu
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setActiveDropdown(null);
				setMobileMenuOpen(false);
			}
		};
		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
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
			mobileActiveSection === sectionKey ? null : sectionKey,
		);
	};

	return (
		<header className={className}>
			<nav
				aria-label="Global"
				className="bg-stone-900 text-white flex items-center justify-between px-4 md:px-8 h-14"
			>
				<div className="flex items-center flex-1 lg:flex-1">
					<Link href="/" className="flex items-center -m-1.5 p-1.5">
						<span className="sr-only">{companyName}</span>
						<Image
							src={logoSrc}
							alt={`${companyName} Logo`}
							width={28}
							height={28}
							className="h-6 w-auto brightness-0 invert"
						/>
					</Link>
				</div>

				{/* Mobile menu button */}
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200 hover:text-white transition-colors"
						aria-label="Open main menu"
						aria-expanded={mobileMenuOpen}
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
				<div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center lg:gap-x-4 h-full">
					{Object.entries(menuConfig).map(([sectionKey, section]) => {
						if (isSimpleLink(section)) {
							return (
								<Link
									key={sectionKey}
									href={section.items[0].href!}
									className="flex h-full items-center px-6 text-base leading-tight font-semibold text-white hover:text-emerald-400 hover:bg-white/10 transition-colors"
								>
									{section.title}
								</Link>
							);
						}
						return (
							<div
								key={sectionKey}
								className="h-full"
								ref={(el) => (dropdownRefs.current[sectionKey] = el)}
								onMouseEnter={() => handleMouseEnter(sectionKey)}
								onMouseLeave={handleMouseLeave}
							>
								<button
									type="button"
									className="flex h-full items-center px-6 text-base leading-tight font-semibold text-white hover:text-emerald-400 hover:bg-white/10 transition-colors"
									aria-expanded={activeDropdown === sectionKey}
									onClick={() =>
										setActiveDropdown(
											activeDropdown === sectionKey ? null : sectionKey,
										)
									}
									onKeyDown={(e) => {
										if (e.key === "Enter" || e.key === " ") {
											e.preventDefault();
											setActiveDropdown(
												activeDropdown === sectionKey ? null : sectionKey,
											);
										}
									}}
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
									<div className="absolute inset-x-0 z-10">
										<div className="">
											<div className="bg-stone-900 overflow-hidden shadow-lg ring-1 ring-gray-900/5">
												<div className="grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-2">
													{section.items.map((item) => (
														<div key={item.label} className="space-y-4">
															{item.submenu ? (
																<>
																	<div className="font-semibold text-white group-hover:text-emerald-400">
																		{item.label}
																	</div>
																	<div
																		className="grid gap-2 text-base leading-tight"
																		style={{
																			gridTemplateRows:
																				"repeat(4, minmax(0, 1fr))",
																			gridAutoFlow: "column",
																		}}
																	>
																		{item.submenu.map((subItem) => (
																			<Link
																				key={subItem.label}
																				href={subItem.href}
																				className="group/link flex items-center gap-3 rounded-lg px-3 py-2 text-white hover:bg-white/10 hover:text-emerald-400 transition-colors"
																				onClick={() => setActiveDropdown(null)}
																				role="menuitem"
																			>
																				{subItem.icon && (
																					<Image
																						src={subItem.icon}
																						alt=""
																						width={20}
																						height={20}
																						className="brightness-0 invert group-hover/link:brightness-0 flex-shrink-0"
																					/>
																				)}
																				<div className="flex flex-col">
																					{subItem.label && (
																						<span className="font-medium">
																							{subItem.label}
																						</span>
																					)}
																					{subItem.sublabel && (
																						<span className="text-xs text-gray-400">
																							{subItem.sublabel}
																						</span>
																					)}
																				</div>
																			</Link>
																		))}
																	</div>
																</>
															) : (
																<Link
																	href={item.href!}
																	className="block rounded-lg px-3 py-2 font-semibold text-white hover:bg-gray-50 hover:text-emerald-400 transition-colors"
																	onClick={() => setActiveDropdown(null)}
																	role="menuitem"
																>
																	{item.label}
																</Link>
															)}
														</div>
													))}
												</div>
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
							className="text-base leading-tight font-semibold text-white hover:text-emerald-400 transition-colors"
						>
							Log in
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
									className="h-8 w-auto brightness-0 invert"
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
																				className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white hover:bg-gray-50 hover:text-emerald-400 transition-colors"
																				role="menuitem"
																			>
																				{subItem.icon && (
																					<Image
																						src={subItem.icon}
																						alt=""
																						width={20}
																						height={20}
																						className="brightness-0 invert flex-shrink-0"
																					/>
																				)}
																				<div className="flex flex-col">
																					{subItem.label && (
																						<span>{subItem.label}</span>
																					)}
																					{subItem.sublabel && (
																						<span className="text-xs text-gray-400">
																							{subItem.sublabel}
																						</span>
																					)}
																				</div>
																			</Link>
																		))}
																	</div>
																) : (
																	<Link
																		href={item.href!}
																		onClick={() => setMobileMenuOpen(false)}
																		className="block rounded-lg px-3 py-2 text-white"
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
