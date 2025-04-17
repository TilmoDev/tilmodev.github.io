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

const DropdownMenu = ({
	title,
	items,
}: {
	title: string;
	items: {
		label: string;
		href?: string;
		submenu?: { label: string; href: string }[];
	}[];
}) => {
	return (
		<Menu positioning={{ autoSize: true }}>
			<MenuTrigger disableButtonEnhancement>
				<Button className="px-4 py-2" appearance="transparent">
					{title}
				</Button>
			</MenuTrigger>
			<MenuPopover>
				<MenuList className="text-white p-2 rounded-md">
					{items.map((item, index) =>
						item.submenu ? (
							// If the item has a submenu, create a nested menu
							<Menu key={index}>
								<MenuTrigger disableButtonEnhancement>
									<MenuItem className="px-4 py-2 cursor-pointer hover:bg-gray-700">
										{item.label}
									</MenuItem>
								</MenuTrigger>
								<MenuPopover>
									<MenuList className="text-white p-2 rounded-md shadow-lg">
										{item.submenu.map((subItem, subIndex) => (
											<MenuItem
												key={subIndex}
												className="px-4 py-2 cursor-pointer hover:bg-gray-700"
											>
												<Link href={subItem.href}>{subItem.label}</Link>
											</MenuItem>
										))}
									</MenuList>
								</MenuPopover>
							</Menu>
						) : (
							// If there's no submenu, render a normal menu item
							<MenuItem
								key={index}
								className="px-4 py-2 cursor-pointer hover:bg-gray-700"
							>
								<Link href={item.href!}>{item.label}</Link>
							</MenuItem>
						)
					)}
				</MenuList>
			</MenuPopover>
		</Menu>
	);
};

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center py-4 px-6 text-white">
			<Link href="/" className="text-xl font-bold">
				Sellswords
			</Link>
			<div className="flex gap-4">
				<Button className="px-4 py-2" appearance="transparent">
					<Link href="/">Home</Link>
				</Button>
				<DropdownMenu
					title="Rules"
					items={[
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
					]}
				/>
				<DropdownMenu
					title="Armory"
					items={[
						{ label: "Armors", href: "/armory/armors" },
						{ label: "Consumables", href: "/armory/consumables" },
						{ label: "Utilities", href: "/armory/utilities" },
						{ label: "Weapons", href: "/armory/weapons" },
					]}
				/>
				<Button className="px-4 py-2" appearance="transparent">
					<Link href="/abilities">Abilities</Link>
				</Button>
				<Button className="px-4 py-2" appearance="transparent">
					<Link href="/appendix">Appendix</Link>
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;
