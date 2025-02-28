"use client";

import { makeStyles } from "@fluentui/react-components";

import Header from "../components/Header/Header";

const useStyles = makeStyles({
	container: {
		// TODO
		// display: "flex",
		// flexDirection: "column",
		// alignItems: "center",
		// justifyContent: "center",
		// minHeight: "100vh",
	},
});

export default function Home() {
	const styles = useStyles();

	return (
		<main className={styles.container}>
			<Header />
		</main>
	);
}
