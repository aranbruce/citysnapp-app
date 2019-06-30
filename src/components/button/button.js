import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.sass";

const Button = ({ to, type, children }) => {
	return to ? (
		<Link to={to}>
			<button className={styles.button}>{children}</button>
		</Link>
	) : type ? (
		<button type={type} className={styles.buttonForm}>
			{children}
		</button>
	) : (
		<button className={styles.button}>{children}</button>
	);
};

export default Button;
