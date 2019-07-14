import React, { Component } from "react";

import Activity from "../activity/activity";

class BrunchPlaces extends Component {
	constructor(props) {
		super(props);
		this.state = {
			positionLat: 0,
			positionLng: 0,
			locationLoaded: false,
			places: [{}],
			placesLoaded: false
		};
		this.getPosition = this.getPosition.bind(this);
	}

	getPosition = () => {
		if ("geolocation" in navigator) {
			const success = position => {
				const lat = position.coords.latitude;
				const lng = position.coords.longitude;
				console.log(lat, lng);

				this.setState({
					positionLat: lat,
					positionLng: lng,
					locationLoaded: true
				});
				this.getPlaces();
			};
			const error = error_message => {
				console.error(
					"An error has occured while retrieving location",
					error_message
				);
			};
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			console.log("geolocation is not enabled on this browser");
		}
	};
	componentDidMount = () => {
		this.getPosition();
		this.getPosition = this.getPosition.bind(this);
		this.getPlaces = this.getPlaces.bind(this);
	};

	getPlaces = () => {
		console.log(this.state.positionLat, this.state.positionLng);
		if (this.state.locationLoaded === true) {
			const google = window.google;
			var request = {
				location: new google.maps.LatLng(
					this.state.positionLat,
					this.state.positionLng
				),
				radius: "1000",
				type: ["cafe", "restaurant"],
				keyword: "brunch"
			};
			var container = document.getElementById("results");
			var service = new google.maps.places.PlacesService(container);
			var placeArray = [];
			service.nearbySearch(request, callback);
			function callback(results, status) {
				if (status === google.maps.places.PlacesServiceStatus.OK) {
					for (var i = 0; i < results.length; i++) {
						const id = results[i].place_id;
						var request = {
							placeId: id,
							fields: ["name", "rating", "photos"]
						};
						service = new google.maps.places.PlacesService(
							container
						);
						service.getDetails(request, callback);

						function callback(place, status) {
							if (
								status ===
								google.maps.places.PlacesServiceStatus.OK
							) {
								placeArray.push(place);
								return placeArray;
							}
						}
					}
				}
			}
			this.setState({
				places: placeArray,
				placesLoaded: true
			});
		}
	};

	render() {
		return (
			<div>
				<div id="results" />
				{this.state.placesLoaded === true
					? this.state.places.map(place => {
							return (
								<Activity
									place={place}
									key={place.name}
									title={place.name}
									description={place.rating}
									image={"Foo"}
								/>
							);
					  })
					: null}
			</div>
		);
	}
}

export default BrunchPlaces;
