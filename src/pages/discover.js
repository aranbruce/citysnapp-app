import React, { Component } from "react";
import PageWrapper from "../components/pageWrapper/pageWrapper";
import Activity from "../components/activity/activity";

class Discover extends Component {
	render() {
		return (
			<PageWrapper>
				<h2>Discover</h2>
				<Activity />
				<Activity />
				<Activity />
			</PageWrapper>
		);
	}
}

export default Discover;
