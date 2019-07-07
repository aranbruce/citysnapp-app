import React from "react";

import styles from "./activity.module.sass";

const Activity = ({ image, title, description }) => {
	return (
		<div
			style={{
				backgroundImage: `linear-gradient(-180deg, rgba(0,0,0,0.00) 22%, #000000 100%), url(${image})`
			}}
			className={styles.activityContainer}
		>
			<div className={styles.title}>{title}</div>
			<div className={styles.description}>{description}</div>
		</div>
	);
};
export default Activity;
