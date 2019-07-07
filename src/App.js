import React, { Component } from "react";
import "./App.sass";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Media from "react-media";
import app from "./authentication/base.js";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Discover from "./pages/discover";
import Plan from "./pages/plan";
import Friends from "./pages/friends";
import Profile from "./pages/profile";
import PrivateRoute from "./authentication/privateRoute";

class App extends Component {
	state = {
		loading: true,
		authenticated: false,
		user: null
	};

	componentWillMount() {
		app.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({
					authenticated: true,
					currentUser: user,
					loading: false
				});
			} else {
				this.setState({
					authenticated: false,
					currentUser: null,
					loading: false
				});
			}
		});
	}

	render() {
		const { authenticated, loading } = this.state;
		if (loading) {
			return null;
		}
		return (
			<Media query="(max-width: 425px)">
				{matches =>
					matches ? (
						<Router>
							<Route
								exact
								path="/"
								render={() =>
									authenticated ? (
										<Redirect to="/discover" />
									) : (
										<Redirect to="login" />
									)
								}
							/>
							<PrivateRoute
								exact
								path="/discover"
								component={Discover}
								authenticated={authenticated}
							/>
							<PrivateRoute
								exact
								path="/plan"
								component={Plan}
								authenticated={this.state.authenticated}
							/>
							<PrivateRoute
								exact
								path="/friends"
								component={Friends}
								authenticated={this.state.authenticated}
							/>
							<PrivateRoute
								exact
								path="/profile"
								component={Profile}
								authenticated={this.state.authenticated}
							/>
							<Route exact path="/login" component={Login} />
							<Route exact path="/sign-up" component={SignUp} />
						</Router>
					) : (
						<div style={{ textAlign: "center", marginTop: "4rem" }}>
							This app is only available on portrait on mobile.
							Please view it portrait on mobile for the best
							experience
						</div>
					)
				}
			</Media>
		);
	}
}

export default App;
