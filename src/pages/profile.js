import React, { Component } from "react";
import app from "../authentication/base";
import PageWrapper from "../components/pageWrapper/pageWrapper";

class Plan extends Component {
	render() {
		return (
			<PageWrapper>
				<h2>Profile</h2>
				<div className={"link"} onClick={() => app.auth().signOut()}>
					Sign Out
				</div>
			</PageWrapper>
		);
	}
}

export default Plan;
