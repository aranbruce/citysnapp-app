import React from "react";
import "./App.sass";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import { AuthProvider } from "./authentication/auth";
import PrivateRoute from "./routing/privateRoute";

function App() {
	return (
		<AuthProvider>
			<Router>
				<PrivateRoute exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/sign-up" component={SignUp} />
			</Router>
		</AuthProvider>
	);
}

export default App;
