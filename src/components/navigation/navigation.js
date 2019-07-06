import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Discover } from "./discover.svg";
import { ReactComponent as Plan } from "./plan.svg";
import { ReactComponent as Friends } from "./friends.svg";
import { ReactComponent as Profile } from "./profile.svg";
// import Discover from "./discover.svg";
// import Plan from "./plan.svg";
// import Friends from "./friends.svg";
// import Profile from "./profile.svg";

import styles from "./navigation.module.sass";

const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<div className={styles.navigationContent}>
				<NavLink
					to={"/discover"}
					className={styles.icon}
					activeClassName={styles.active}
				>
					<Discover />
					Discover
				</NavLink>
				<NavLink
					to={"/plan"}
					className={styles.icon}
					activeClassName={styles.active}
				>
					<Plan />
					Plan
				</NavLink>
				<NavLink
					to={"/friends"}
					className={styles.icon}
					activeClassName={styles.active}
				>
					<Friends />
					Friends
				</NavLink>
				<NavLink
					to={"/profile"}
					className={styles.icon}
					activeClassName={styles.active}
				>
					<Profile />
					Profile
				</NavLink>
			</div>
		</nav>
	);
};

export default Navigation;
