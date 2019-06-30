import React, { Component } from "react";
import "./App.sass";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Discover from "./pages/discover";
import Plan from "./pages/plan";
import Friends from "./pages/friends";
import Profile from "./pages/profile";
import { AuthProvider } from "./authentication/auth";
import PrivateRoute from "./routing/privateRoute";

class App extends Component {
	constructor() {
		super();
		this.state = {
			authenticated: false
		};
	}
	render() {
		return (
			<AuthProvider>
				<Router>
					<PrivateRoute
						authenticated={this.state.authenticated}
						exact
						path="/"
						component={Discover}
					/>
					<PrivateRoute
						authenticated={this.state.authenticated}
						exact
						path="/plan"
						component={Plan}
					/>
					<PrivateRoute
						authenticated={this.state.authenticated}
						exact
						path="/friends"
						component={Friends}
					/>
					<PrivateRoute
						authenticated={this.state.authenticated}
						exact
						path="/profile"
						component={Profile}
					/>
					<Route exact path="/login" component={Login} />
					<Route exact path="/sign-up" component={SignUp} />
				</Router>
			</AuthProvider>
		);
	}
}

export default App;
