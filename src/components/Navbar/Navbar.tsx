import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<ul className={styles.navbar}>
			<li className={styles.navbar__link}>
				<Link href="/">Sellswords</Link>
			</li>
			<li className={styles.navbar__link}>
				<Link href="/rules">Rules</Link>
			</li>
			<li className={styles.navbar__link}>
				<Link href="/armory">Armory</Link>
			</li>
			<li className={styles.navbar__link}>
				<Link href="/skills">Skills</Link>
			</li>
			<li className={styles.navbar__link}>
				<Link href="/glossary">Glossary</Link>
			</li>
		</ul>
	);
};

export default Navbar;
