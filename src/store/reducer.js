import { combineReducers } from "redux";
import * as ACT from './actions';

const initialState = {
	movies: [],
	watched: {},
	isLoading: false,
	viewId: null,
	errState: null,
};

function rootReducer(store = initialState, action) {

	switch (action.type) {
		case ACT.UPDATE_MOVIES:
			return { ...store, movies: action.payload };

		case ACT.ERROR_OCCURRED:
			return { ...store, errState: action.payload };

		case ACT.VIEWED_MOVIE:
			return { ...store, watched: action.payload };

		case ACT.NOT_VIEWED_MOVIE:
			return { ...store, watched: action.payload };

		case ACT.UPDATE_LOADING:
			return { ...store, isLoading: action.payload };
	}

	return store;
}

export default (history) => combineReducers({
	router: '',
	app: rootReducer,
});
