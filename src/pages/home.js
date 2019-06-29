import React, { Component } from "react";
import Button from "../components/button/button";
import PageWrapper from "../components/pageWrapper/pageWrapper";

class Home extends Component {
	render() {
		return (
			<PageWrapper>
				<h2>Welcome Home</h2>
				<Button signOut>Sign Out</Button>
			</PageWrapper>
		);
	}
}

export default Home;
