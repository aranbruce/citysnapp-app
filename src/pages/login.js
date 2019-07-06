import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import app from "../authentication/base";
import Button from "../components/button/button";
import styles from "../components/form/form.module.sass";

import logo from "../images/citySnappLogo.svg";
import AuthenticationWrapper from "../components/authenticationWrapper/authenticationWrapper";

class Login extends Component {
	handleLogin = async event => {
		event.preventDefault();
		const { email, password } = event.target.elements;
		try {
			await app
				.auth()
				.signInWithEmailAndPassword(email.value, password.value);
			this.props.history.push("/discover");
		} catch (error) {
			alert(error);
		}
	};
	render() {
		return (
			<AuthenticationWrapper>
				<img src={logo} alt="CitySnapp Logo" className={"logoImage"} />
				<h1>Login</h1>
				<form onSubmit={this.handleLogin} className={styles.form}>
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
						Login
					</Button>
				</form>
				<Link to={"/sign-up"}>Create an Account</Link>
			</AuthenticationWrapper>
		);
	}
}

export default withRouter(Login);
