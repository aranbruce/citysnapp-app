import React, { Component } from "react";
import PageWrapper from "../components/pageWrapper/pageWrapper";
import BrunchPlaces from "../components/brunchPlaces/brunchPlaces";

class Friends extends Component {
	render() {
		return (
			<PageWrapper>
				<h2>Friends</h2>
				<BrunchPlaces />
			</PageWrapper>
		);
	}
}

export default Friends;
