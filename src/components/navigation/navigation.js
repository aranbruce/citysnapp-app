import React from "react";

import styles from "./navigation.module.sass";

const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<div>Explore</div>
			<div>Calender</div>
			<div>Connect</div>
			<div>Profile</div>
		</nav>
	);
};

export default Navigation;
