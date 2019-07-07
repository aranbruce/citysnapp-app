import React, { Component } from "react";
import PageWrapper from "../components/pageWrapper/pageWrapper";
import Categories from "../components/categories/categories";
import Activity from "../components/activity/activity";
import Brunch from "../images/brunch.jpg";
import Bars from "../images/bars.jpg";
import Restaurants from "../images/restaurants.jpg";
import Coffee from "../images/coffee.jpg";
import Culture from "../images/culture.jpg";
import Outdoors from "../images/outdoors.jpg";
import Indoors from "../images/indoors.jpg";
import Nightlife from "../images/nightlife.jpg";
import Steak from "../images/steak.jpg";
import Avocado from "../images/avocado.jpg";
import Waffles from "../images/waffles.jpg";

class Discover extends Component {
	render() {
		return (
			<PageWrapper>
				<h3>Categories</h3>
				<Categories
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
							title: "Restuarants",
							image: Restaurants
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
				<Activity
					title="Activity Title"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					image={Steak}
				/>
				<Activity
					title="Activity Title"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					image={Avocado}
				/>
				<Activity
					title="Activity Title"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					image={Waffles}
				/>
			</PageWrapper>
		);
	}
}

export default Discover;
