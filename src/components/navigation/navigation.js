import React from "react";
import { Link } from "react-router-dom";

import Discover from "./discover.svg";
import Plan from "./plan.svg";
import Friends from "./friends.svg";
import Profile from "./profile.svg";

import styles from "./navigation.module.sass";

const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<div className={styles.navigationContent}>
				<Link to={"/"}>
					<img src={Discover} alt="Discover Icon" />
				</Link>
				<Link to={"/plan"}>
					<img src={Plan} alt="Planner Icon" />
				</Link>
				<Link to={"/friends"}>
					<img src={Friends} alt="Friends Icon" />
				</Link>
				<Link to={"/profile"}>
					<img src={Profile} alt="Profile Icon" />
				</Link>
			</div>
		</nav>
	);
};

export default Navigation;
