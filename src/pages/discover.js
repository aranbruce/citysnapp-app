import React, { Component } from "react";
import PageWrapper from "../components/pageWrapper/pageWrapper";
import Categories from "../components/categories/categories";
import Activities from "../components/activities/activities";

import Brunch from "../images/brunch.jpg";
import Bars from "../images/bars.jpg";
import Dinner from "../images/dinner.jpg";
import Coffee from "../images/coffee.jpg";
import Culture from "../images/culture.jpg";
import Outdoors from "../images/outdoors.jpg";
import Indoors from "../images/indoors.jpg";
import Nightlife from "../images/nightlife.jpg";

const brunchActivities = [
	{
		title: "Drake & Morgan",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "Granger & Co.",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "Plum Split Milk",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	}
];

const barActivities = [
	{
		title: "London Cocktail Club",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "Simmons Bar",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "The Racketeer",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	}
];

const dinnerActivities = [
	{
		title: "Lorem Ipsum 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "Lorem Ipsum 2",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "Lorem Ipsum 3",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	}
];

const coffeeActivities = [
	{
		title: "Lorem Ipsum 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "Lorem Ipsum 2",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "Lorem Ipsum 3",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	}
];

const cultureActivities = [
	{
		title: "Lorem Ipsum 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "Lorem Ipsum 2",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "Lorem Ipsum 3",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	}
];

const outdoorsActivities = [
	{
		title: "Lorem Ipsum 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "Lorem Ipsum 2",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "Lorem Ipsum 3",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	}
];

const indoorsActivities = [
	{
		title: "Lorem Ipsum 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "Lorem Ipsum 2",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "Lorem Ipsum 3",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	}
];

const nightlifeActivities = [
	{
		title: "Lorem Ipsum 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "Lorem Ipsum 2",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	},
	{
		title: "Lorem Ipsum 3",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "Foo"
	}
];

class Discover extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: "Brunch"
		};
	}
	handleChange = event => {
		this.setState({ selected: event.target.value });
	};
	render() {
		return (
			<PageWrapper>
				<h3>Categories</h3>
				<Categories
					selected={this.state.selected}
					onChange={this.handleChange}
					categories={[
						{
							title: "Brunch",
							image: Brunch
						},
						{
							title: "Bars",
							image: Bars
						},
						{
							title: "Dinner",
							image: Dinner
						},
						{
							title: "Coffee",
							image: Coffee
						},
						{
							title: "Culture",
							image: Culture
						},
						{
							title: "Outdoors",
							image: Outdoors
						},
						{
							title: "Indoors",
							image: Indoors
						},
						{
							title: "Nightlife",
							image: Nightlife
						}
					]}
				/>
				<Activities
					activities={
						this.state.selected === "Brunch"
							? brunchActivities
							: this.state.selected === "Bars"
							? barActivities
							: this.state.selected === "Dinner"
							? dinnerActivities
							: this.state.selected === "Coffee"
							? coffeeActivities
							: this.state.selected === "Culture"
							? cultureActivities
							: this.state.selected === "Outdoors"
							? outdoorsActivities
							: this.state.selected === "Indoors"
							? indoorsActivities
							: this.state.selected === "Nightlife"
							? nightlifeActivities
							: null
					}
				/>
			</PageWrapper>
		);
	}
}

export default Discover;
