import React, { Component } from "react";

import styles from "./category.module.sass";

class Category extends Component {
	render() {
		return (
			<label className={styles.activityContainer}>
				<input
					type="radio"
					onChange={this.props.onChange}
					value={this.props.title}
					checked={this.props.checked}
					style={{ display: "none" }}
				/>
				<div
					className={
						this.props.selected === this.props.title
							? styles.imgSelected
							: styles.img
					}
					style={{
						backgroundImage: `url(${this.props.image})`
					}}
				/>

				<div
					className={
						this.props.selected === this.props.title
							? styles.titleSelected
							: styles.title
					}
				>
					{this.props.title}
				</div>
			</label>
		);
	}
}

export default Category;
