import React from "react";

import styles from "./category.module.sass";

const Category = ({ image, title }) => {
	return (
		<div className={styles.activityContainer}>
			<div
				className={styles.img}
				style={{
					backgroundImage: `url(${image})`
				}}
			/>
			<div className={styles.title}>{title}</div>
		</div>
	);
};

export default Category;
