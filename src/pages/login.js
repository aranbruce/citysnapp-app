import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import app from "../authentication/base.js";
import { AuthContext } from "../authentication/auth.js";
import Button from "../components/button/button";
import AuthenticationWrapper from "../components/authenticationWrapper/authenticationWrapper.js";
import styles from "../components/form/form.module.sass";

import logo from "../images/citySnappLogo.svg";

const Login = ({ history }) => {
	const handleLogin = useCallback(
		async event => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app
					.auth()
					.signInWithEmailAndPassword(email.value, password.value);
				history.push("/");
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to="/" />;
	}

	return (
		<AuthenticationWrapper>
			<img src={logo} alt="CitySnapp Logo" className={"logoImage"} />
			<h1>Login</h1>
			<form onSubmit={handleLogin} className={styles.form}>
				<input
					name="email"
					type="email"
					placeholder="Email"
					aria-label="Email"
					className={styles.input}
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
					aria-label="Password"
					className={styles.input}
				/>
				<Button form type="submit">
					Login
				</Button>
			</form>
			<Link to="/sign-up">Sign Up</Link>
		</AuthenticationWrapper>
	);
};

export default withRouter(Login);
