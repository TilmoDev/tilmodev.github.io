import * as React from "react";
import Link from "next/link";
import {
	Button,
	makeStyles,
	Menu,
	MenuTrigger,
	MenuList,
	MenuItem,
	MenuPopover,
} from "@fluentui/react-components";

const useStyles = makeStyles({
	nav: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "10px 0",
	},
	navOptions: {
		display: "flex",
		gap: "10px",
	},
	navButton: {
		border: "1px solid transparent",
		"&:hover, &:focus": {
			border: "1px solid white",
		},
	},
});

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
	const styles = useStyles();
	return (
		<Menu positioning={{ autoSize: true }}>
			<MenuTrigger disableButtonEnhancement>
				<Button className={styles.navButton}>{title}</Button>
			</MenuTrigger>
			<MenuPopover>
				<MenuList>
					{items.map((item, index) =>
						item.submenu ? (
							// If the item has a submenu, create a nested menu
							<Menu key={index}>
								<MenuTrigger disableButtonEnhancement>
									<MenuItem>{item.label}</MenuItem>
								</MenuTrigger>
								<MenuPopover>
									<MenuList>
										{item.submenu.map((subItem, subIndex) => (
											<MenuItem key={subIndex}>
												<Link href={subItem.href}>{subItem.label}</Link>
											</MenuItem>
										))}
									</MenuList>
								</MenuPopover>
							</Menu>
						) : (
							// If there's no submenu, render a normal menu item
							<MenuItem key={index}>
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
	const styles = useStyles();

	return (
		<nav className={styles.nav}>
			<Link href="/">Sellswords</Link>
			<div className={styles.navOptions}>
				<Button className={styles.navButton}>
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
				<Button className={styles.navButton}>
					<Link href="/abilities">Abilities</Link>
				</Button>
				<Button className={styles.navButton}>
					<Link href="/glossary">Glossary</Link>
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;
