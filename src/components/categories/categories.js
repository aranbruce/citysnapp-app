import React, { Component } from "react";

import Category from "../category/category";

import styles from "./categories.module.sass";

class Categories extends Component {
	render() {
		return (
			<div className={styles.categoriesWrapper}>
				{this.props.categories.map(category => {
					return (
						<Category
							category={this.props.category}
							key={category.title}
							title={category.title}
							image={category.image}
							selected={this.props.selected}
							onChange={this.props.onChange}
							checked={category.title === this.props.selected}
						/>
					);
				})}
			</div>
		);
	}
}

export default Categories;
