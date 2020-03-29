import React from 'react';

function DetailsPage(props) {
	return (
		<div>
			<h1>Show Details</h1>
			<h2>{ props.match.params.code }</h2>
		</div>
	);
}

export default DetailsPage;
