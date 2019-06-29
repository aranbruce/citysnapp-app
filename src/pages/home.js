import React, { Component } from "react";
import app from "../authentication/base";

class Home extends Component {
	render() {
		return (
			<div>
				<h2>Welcome Home</h2>
				<button onClick={() => app.auth().signOut()}>Sign Out</button>
			</div>
		);
	}
}

export default Home;
