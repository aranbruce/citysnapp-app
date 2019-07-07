import React from "react";

import Category from "../category/category";

import styles from "./categories.module.sass";

const Categories = ({ categories }) => {
	return (
		<div className={styles.categoriesWrapper}>
			{categories.map(category => {
				return (
					<Category
						category={category}
						key={category.title}
						title={category.title}
						image={category.image}
					/>
				);
			})}
		</div>
	);
};

export default Categories;
