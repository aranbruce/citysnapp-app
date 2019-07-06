import React from "react";

import styles from "./activity.module.sass";

const Activity = ({ image, title, description }) => {
	return (
		<div className={styles.activityContainer}>
			<div className={styles.title}>Title</div>
			<div className={styles.description}>
				Lorem ipsum dolor sit amet, consectetur  adipiscing elit.
			</div>
		</div>
	);
};
export default Activity;
