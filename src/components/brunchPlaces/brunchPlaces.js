import React, { Component } from "react";
import Script from "react-load-script";

class BrunchPlaces extends Component {
	constructor(props) {
		super(props);
		this.state = {
			positionLat: 0,
			positionLng: 0
		};
	}

	handlePosittion() {
		if ("geolocation" in navigator) {
			let self = this;
			navigator.geolocation.getCurrentPosition(
				function success(position) {
					const lat = position.coords.latitude;
					const lng = position.coords.longitude;
					console.log(lat, lng);

					self.setState({
						positionLat: lat,
						positionLng: lng
					});
				},
				function error(error_message) {
					console.error(
						"An error has occured while retrieving location",
						error_message
					);
				}
			);
		} else {
			console.log("geolocation is not enabled on this browser");
		}
	}

	componentDidMount = () => {
		this.handlePosittion();
	};

	handleScriptLoad = () => {
		const google = window.google;
		this.handlePosittion();
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
		service.nearbySearch(request, callback);
		function callback(results, status) {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				for (var i = 0; i < results.length; i++) {
					const id = results[i].place_id;
					var request = {
						placeId: id,
						fields: ["name", "rating", "photos"]
					};
					service = new google.maps.places.PlacesService(container);
					service.getDetails(request, callback);

					function callback(place, status) {
						if (
							status === google.maps.places.PlacesServiceStatus.OK
						) {
							console.log(place);
							container.innerHTML +=
								"Name:" +
								" " +
								place.name +
								" " +
								"Rating:" +
								" " +
								place.rating +
								" ";
						}
					}
				}
			}
		}
	};

	render() {
		return (
			<div>
				<Script
					url={`https://maps.googleapis.com/maps/api/js?key=${
						process.env.REACT_APP_GOOGLE_PLACES_API_KEY
					}&libraries=places`}
					onLoad={this.handleScriptLoad}
				/>
				<div id="results" />
			</div>
		);
	}
}

export default BrunchPlaces;
