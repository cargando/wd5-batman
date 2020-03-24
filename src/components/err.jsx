import React from 'react';
import { Alert } from 'reactstrap';


function Err(props) {
	return (
		<div style={ { display: "flex", alignItems: "center", justifyContent: "center"} }>
			<Alert color="primary">
				This is a primary alert — check it out!
			</Alert>
		</div>
	);
}

export default Err;
