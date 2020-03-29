import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import * as ActionCreators from './store/action_creatores';
import Err from './components/err';
import MovieCard from './components/MovieCard';


class App extends React.PureComponent {

	static propTypes = {
		moviesList: PropTypes.array.isRequired,
		getMovies: PropTypes.func.isRequired,
		errState: PropTypes.bool,
	};

	componentDidMount() {
		this.props.getMovies('batman');
	}

	renderCard = () => {
		const { moviesList } = this.props;

		if (moviesList.length === 0) {
			return null;
		}

		return moviesList.map((item) => {

			const {
				id,
				name = "",
				url = "",
				image = {},
				summary,
				premiered,
			} = item.show || {};

			return <MovieCard
				id={id}
				name={ name }
				url={ url }
				image={ image.medium }
				summary={ summary }
				premiered={ premiered }
			/>
		});


	};


	render() {
		console.log("MAIN RND");


		if (this.props.errState !== null) {
			return <Err />
		}

		const styles = { display: "flex", flexWrap: "wrap" };

		return (
			<Container>

				<Row>
					<Col><h1>Batman Movies</h1></Col>
				</Row>
				<Row>
					<Col sm="12">
						<div style={ styles }>
							{
								this.renderCard()
							}
						</div>
					</Col>
				</Row>
			</Container>

		);

	}

}

// const mapStateToProps = (globalStorage) => ({ // более короткая версия без использования оператора RETURN
// 		moviesList: globalStorage.app.movies || [],
// 		errState: globalStorage.app.errState,
// 	});

const mapStateToProps = (globalStorage) => { // globalStorage => store - одно и то же
	return {
		moviesList: globalStorage.app.movies || [],
		errState: globalStorage.app.errState,
	}
};

const mapDispatchToProps = (dispatcher) => {
	return {
		// updateMovies: (payload) =>  dispatcher(ActionCreators.updateMovies(payload)),
		getMovies: (payload) => dispatcher(ActionCreators.getMovies(payload)),
	}
};

const connected = connect(mapStateToProps, mapDispatchToProps)(App);

export default connected;
