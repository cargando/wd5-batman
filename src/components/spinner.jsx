import React from 'react';
import * as PropTypes from 'prop-types';
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
	return (
		<ClipLoader
			size={150}
			color={"#123abc"}
			loading
		/>
	)
};
export default React.memo(Spinner);
