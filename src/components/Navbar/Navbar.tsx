import * as React from "react";
import Link from "next/link";
import {
	Button,
	Menu,
	MenuTrigger,
	MenuList,
	MenuItem,
	MenuPopover,
} from "@fluentui/react-components";

// Menu data config for maintainability
const menuConfig = {
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
					{ label: "Traits", href: "/rules/character-creation/traits" },
				],
			},
			{ label: "How To", href: "/rules/how-to" },
		],
	},
	armory: {
		title: "Armory",
		items: [
			{ label: "Armors", href: "/armory/armors" },
			{ label: "Consumables", href: "/armory/consumables" },
			{ label: "Utilities", href: "/armory/utilities" },
			{ label: "Weapons", href: "/armory/weapons" },
		],
	},
};

// Improved DropdownMenu with semantic HTML and accessibility
const DropdownMenu = ({ title, items }: { title: string; items: any[] }) => (
	<Menu positioning={{ autoSize: true }}>
		<MenuTrigger disableButtonEnhancement>
			<Button
				className="px-4 py-2"
				appearance="transparent"
				aria-haspopup="menu"
				aria-label={title}
			>
				{title}
			</Button>
		</MenuTrigger>
		<MenuPopover>
			<MenuList className="text-white p-2 rounded-md" role="menu">
				{items.map((item, index) =>
					item.submenu ? (
						<Menu key={index}>
							<MenuTrigger disableButtonEnhancement>
								<MenuItem
									className="px-4 py-2 cursor-pointer hover:bg-gray-700"
									aria-haspopup="menu"
								>
									{item.label}
								</MenuItem>
							</MenuTrigger>
							<MenuPopover>
								<MenuList
									className="text-white p-2 rounded-md shadow-lg"
									role="menu"
								>
									{item.submenu.map((subItem: any, subIndex: number) => (
										<MenuItem
											key={subIndex}
											className="px-4 py-2 cursor-pointer hover:bg-gray-700"
											role="menuitem"
											tabIndex={0}
										>
											<Link href={subItem.href} tabIndex={-1}>
												{subItem.label}
											</Link>
										</MenuItem>
									))}
								</MenuList>
							</MenuPopover>
						</Menu>
					) : (
						<MenuItem
							key={index}
							className="px-4 py-2 cursor-pointer hover:bg-gray-700"
							role="menuitem"
							tabIndex={0}
						>
							<Link href={item.href!} tabIndex={-1}>
								{item.label}
							</Link>
						</MenuItem>
					)
				)}
			</MenuList>
		</MenuPopover>
	</Menu>
);

const Navbar = () => (
	<nav
		className="flex justify-between items-center py-4 px-6 text-white"
		role="navigation"
		aria-label="Main Navigation"
	>
		<Link href="/" className="text-xl font-bold" tabIndex={0} aria-label="Home">
			Sellswords
		</Link>
		<ul className="flex gap-4" role="menubar">
			<li role="none">
				<Button
					className="px-4 py-2"
					appearance="transparent"
					aria-label="Home"
				>
					<Link href="/" tabIndex={-1}>
						Home
					</Link>
				</Button>
			</li>
			<li role="none">
				<DropdownMenu {...menuConfig.rules} />
			</li>
			<li role="none">
				<DropdownMenu {...menuConfig.armory} />
			</li>
			<li role="none">
				<Button
					className="px-4 py-2"
					appearance="transparent"
					aria-label="Abilities"
				>
					<Link href="/abilities" tabIndex={-1}>
						Abilities
					</Link>
				</Button>
			</li>
			<li role="none">
				<Button
					className="px-4 py-2"
					appearance="transparent"
					aria-label="Appendix"
				>
					<Link href="/appendix" tabIndex={-1}>
						Appendix
					</Link>
				</Button>
			</li>
		</ul>
	</nav>
);

export default Navbar;
