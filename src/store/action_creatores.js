import * as ACT from './actions';

export function getMovies(payload) {
	const requestURL = `https://api.tvmaze.com/search/shows?q=${ payload }`; // 'batman'

	return (dispatcher) => {

		dispatcher(updateLoadingAct(true));

		const movies = fetch(requestURL);

		movies.then((data) => {

			return data.json();

		}).then((data) => {
			dispatcher(updateMoviesAct(data));
			dispatcher(updateLoadingAct(false));

		}).catch((e) => {
			console.log("REQUEST ERROR: ". e);
			dispatcher(updateLoadingAct(false));
			dispatcher(errorOccuredAct(e));
		});
	}

}

export function updateLoadingAct(payload) {
	return {
		type: ACT.UPDATE_LOADING,
		payload: payload,
	}
}

export function updateMoviesAct(payload) {

	const action = {
		type: ACT.UPDATE_MOVIES,
		payload,
	};

	return action;
}

export function errorOccuredAct(payload) {

	return {
		type: ACT.ERROR_OCCURRED,
		payload,
	};
}

export function viewedMovieAct(payload) {
	return {
		type: ACT.VIEWED_MOVIE,
		payload,
	}
}

export function unViewedMovieAct(payload) {
	return {
		type: ACT.NOT_VIEWED_MOVIE,
		payload,
	}
}
