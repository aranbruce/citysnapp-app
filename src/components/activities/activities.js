import React from "react";
import Activity from "../activity/activity";

const Activities = ({ activities }) => {
	return (
		<div>
			{activities
				? activities.map(item => {
						return (
							<Activity
								item={item}
								key={item.title}
								title={item.title}
								description={item.description}
								image={item.image}
							/>
						);
				  })
				: null}
		</div>
	);
};

export default Activities;
