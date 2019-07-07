import React, { Component } from "react";

import Category from "../category/category";

import styles from "./categories.module.sass";

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: this.props.selected
		};
	}

	handleChange = event => {
		this.setState({ selected: event.target.value });
	};
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
							selected={this.state.selected}
							onChange={this.handleChange}
							checked={category.title === this.state.selected}
						/>
					);
				})}
			</div>
		);
	}
}

export default Categories;
