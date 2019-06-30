import React, { Component } from "react";
import PageWrapper from "../components/pageWrapper/pageWrapper";
import Button from "../components/button/button";

class Plan extends Component {
	render() {
		return (
			<PageWrapper>
				<h2>Profile</h2>
				<Button signOut>Sign Out</Button>
			</PageWrapper>
		);
	}
}

export default Plan;
