import React from "react";

import styles from "./header.module.sass";

const Header = () => {
	return (
		<header className={styles.header}>
			<div>Profile</div>
			<div>Location</div>
			<div>Search</div>
		</header>
	);
};

export default Header;
