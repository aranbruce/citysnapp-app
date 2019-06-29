import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import app from "../authentication/base";
import Button from "../components/button/button";
import AuthenticationWrapper from "../components/authenticationWrapper/authenticationWrapper";
import styles from "../components/form/form.module.sass";

import logo from "../images/citySnappLogo.svg";

const SignUp = ({ history }) => {
	const handleSignUp = useCallback(
		async event => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app
					.auth()
					.createUserWithEmailAndPassword(
						email.value,
						password.value
					);
				history.push("/");
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	return (
		<AuthenticationWrapper>
			<img src={logo} alt="CitySnapp Logo" className={"logoImage"} />

			<h1>Create an Account</h1>
			<form onSubmit={handleSignUp} className={styles.form}>
				<input
					name="email"
					type="email"
					placeholder="Email"
					aria-label="Email"
					className={styles.input}
					required
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
					aria-label="Password"
					className={styles.input}
					minLength={6}
					maxLength={100}
					required
				/>
				<Button form type="submit">
					Sign Up
				</Button>
			</form>
			<Link to={"/login"}>Login</Link>
		</AuthenticationWrapper>
	);
};

export default withRouter(SignUp);
