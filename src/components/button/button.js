import React from "react";
import { Link } from "react-router-dom";
import app from "../../authentication/base";
import styles from "./button.module.sass";

const Button = ({ to, type, signOut, form, children }) => {
	return to ? (
		<Link to={to}>
			<button className={styles.button}>{children}</button>
		</Link>
	) : type ? (
		<button type={type} className={styles.buttonForm}>
			{children}
		</button>
	) : signOut ? (
		<button className={styles.button} onClick={() => app.auth().signOut()}>
			{children}
		</button>
	) : (
		<button className={styles.button}>{children}</button>
	);
};

export default Button;
