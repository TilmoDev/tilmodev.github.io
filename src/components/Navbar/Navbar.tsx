import * as React from "react";
import Link from "next/link";

import { DrawerProps } from "@fluentui/react-components";
import {
	Hamburger,
	NavCategory,
	NavCategoryItem,
	NavDivider,
	NavDrawer,
	NavDrawerBody,
	NavDrawerHeader,
	NavDrawerProps,
	NavItem,
	NavSectionHeader,
	NavSubItem,
	NavSubItemGroup,
} from "@fluentui/react-nav-preview";

import { Tooltip, makeStyles, tokens } from "@fluentui/react-components";
import {
	Board20Filled,
	Board20Regular,
	BoxMultiple20Filled,
	BoxMultiple20Regular,
	DataArea20Filled,
	DataArea20Regular,
	DocumentBulletListMultiple20Filled,
	DocumentBulletListMultiple20Regular,
	HeartPulse20Filled,
	HeartPulse20Regular,
	MegaphoneLoud20Filled,
	MegaphoneLoud20Regular,
	NotePin20Filled,
	NotePin20Regular,
	People20Filled,
	People20Regular,
	PeopleStar20Filled,
	PeopleStar20Regular,
	Person20Filled,
	PersonLightbulb20Filled,
	PersonLightbulb20Regular,
	Person20Regular,
	PersonSearch20Filled,
	PersonSearch20Regular,
	PreviewLink20Filled,
	PreviewLink20Regular,
	bundleIcon,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
	root: {
		overflow: "hidden",
		display: "flex",
		// height: "600px",
	},
	content: {
		flex: "1",
		padding: "16px",
		display: "grid",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	field: {
		display: "flex",
		marginTop: "4px",
		marginLeft: "8px",
		flexDirection: "column",
		gridRowGap: tokens.spacingVerticalS,
	},
	link: {
		textDecoration: "none",
		color: "inherit",
	},
});

const Person = bundleIcon(Person20Filled, Person20Regular);
const Dashboard = bundleIcon(Board20Filled, Board20Regular);
const Announcements = bundleIcon(MegaphoneLoud20Filled, MegaphoneLoud20Regular);
const EmployeeSpotlight = bundleIcon(
	PersonLightbulb20Filled,
	PersonLightbulb20Regular
);
const Search = bundleIcon(PersonSearch20Filled, PersonSearch20Regular);
const PerformanceReviews = bundleIcon(
	PreviewLink20Filled,
	PreviewLink20Regular
);
const JobPostings = bundleIcon(NotePin20Filled, NotePin20Regular);
const Interviews = bundleIcon(People20Filled, People20Regular);
const HealthPlans = bundleIcon(HeartPulse20Filled, HeartPulse20Regular);
const TrainingPrograms = bundleIcon(BoxMultiple20Filled, BoxMultiple20Regular);
const CareerDevelopment = bundleIcon(PeopleStar20Filled, PeopleStar20Regular);
const Analytics = bundleIcon(DataArea20Filled, DataArea20Regular);
const Reports = bundleIcon(
	DocumentBulletListMultiple20Filled,
	DocumentBulletListMultiple20Regular
);

type DrawerType = Required<DrawerProps>["type"];

const Navbar = (props: Partial<NavDrawerProps>) => {
	const styles = useStyles();

	const [isOpen, setIsOpen] = React.useState(true);

	const renderHamburgerWithToolTip = () => {
		return (
			<Tooltip content="Navigation" relationship="label">
				{/* <Hamburger onClick={() => setIsOpen(!isOpen)} /> */}
			</Tooltip>
		);
	};

	return (
		<NavDrawer defaultSelectedValue="1" open={isOpen} type="inline">
			<NavDrawerHeader>{renderHamburgerWithToolTip()}</NavDrawerHeader>
			<NavDrawerBody>
				<NavItem icon={<Dashboard />} value="1">
					<Link href="/" className={styles.link}>
						Sellswords
					</Link>
				</NavItem>
				<NavSectionHeader>Rules</NavSectionHeader>
				<NavCategory value="2">
					<NavCategoryItem icon={<Announcements />}>
						Character Creation
					</NavCategoryItem>
					<NavSubItemGroup>
						<NavSubItem value="3">
							<Link
								href="/rules/character-creation/proficiencies"
								className={styles.link}
							>
								Proficiencies
							</Link>
						</NavSubItem>
						<NavSubItem value="4">
							<Link
								href="/rules/character-creation/traits"
								className={styles.link}
							>
								Traits
							</Link>
						</NavSubItem>
					</NavSubItemGroup>
				</NavCategory>
				<NavItem icon={<Announcements />} value="5">
					<Link href="/rules/how-to" className={styles.link}>
						How To
					</Link>
				</NavItem>
				<NavSectionHeader>Armory</NavSectionHeader>
				<NavItem icon={<EmployeeSpotlight />} value="6">
					<Link href="/armory/armors" className={styles.link}>
						Armor
					</Link>
				</NavItem>
				<NavItem icon={<EmployeeSpotlight />} value="7">
					<Link href="/armory/consumables" className={styles.link}>
						Consumables
					</Link>
				</NavItem>
				<NavItem icon={<EmployeeSpotlight />} value="8">
					<Link href="/armory/utilities" className={styles.link}>
						Utilties
					</Link>
				</NavItem>
				<NavItem icon={<EmployeeSpotlight />} value="9">
					<Link href="/armory/weapons" className={styles.link}>
						Weapons
					</Link>
				</NavItem>
				<NavDivider />
				<NavItem icon={<Search />} value="10">
					<Link href="/skills" className={styles.link}>
						Skills
					</Link>
				</NavItem>
				<NavItem icon={<PerformanceReviews />} value="11">
					<Link href="/glossary" className={styles.link}>
						Glossary
					</Link>
				</NavItem>
			</NavDrawerBody>
		</NavDrawer>
	);
};

export default Navbar;
