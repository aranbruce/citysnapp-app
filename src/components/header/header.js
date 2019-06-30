import React from "react";
import { Link } from "react-router-dom";

import Profile from "./oval.png";
import SearchDefault from "./searchDefault.svg";
import DownArrow from "./downArrow.svg";

import styles from "./header.module.sass";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.profile}>
				<img src={Profile} alt="Profile" />
			</div>
			<div className={styles.locationWrapper}>
				<div className={styles.smallText}>You are in</div>
				<Link to={"/"} className={styles.location}>
					<div>London</div>
					<img src={DownArrow} alt="Down Arrow" />
				</Link>
			</div>
			<div className={styles.search}>
				<img src={SearchDefault} alt="Search" />
			</div>
		</header>
	);
};

export default Header;
