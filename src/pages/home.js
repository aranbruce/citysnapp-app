import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageWrapper from "../components/pageWrapper/pageWrapper";
import Discover from "./discover";
import Plan from "./plan";
import Friends from "./friends";
import Profile from "./profile";

class Home extends Component {
	render() {
		return (
			<PageWrapper>
				<Router>
					<Route exact path="/" component={Discover} />
					<Route exact path="/plan" component={Plan} />
					<Route exact path="/friends" component={Friends} />
					<Route exact path="/profile" component={Profile} />
				</Router>
			</PageWrapper>
		);
	}
}

export default Home;
