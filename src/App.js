import React from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from 'reactstrap';



class App extends React.PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			list: [], // список комиксов
			watched: [], // список смотрел / не смотрел
			errState: null, // состояние запроса - есть ошибка / все ок
		}

	}

	componentDidMount() {
		const movies = fetch('https://api.tvmaze.com/search/shows?q=batman');

		movies.then((data) => {

			return data.json();

		}).then((data) => {

			this.setState({
				list: data || [],
			});
			console.log("DATA: ", data);

		}).catch((e) => {
			console.log("REQUEST ERROR: ". e);
		});
	}

	renderCard = () => {
		const item = this.state.list[0] ? this.state.list[0] : {};

		const {
			name = "",
			url = "",
			image = {},
		} = item;

		return (
			<div>
			<Card>
				<CardImg top width="100%" src={ image.medium} alt={ name } />
				<CardBody>
					<CardTitle>{ name }</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
			</div>
		)
	};


	render() {

		return (
			<Container>
				<Row>
					<Col><h1>Batman Movies</h1></Col>
				</Row>
				<Row>
					<Col>
						{
							this.renderCard()
						}
					</Col>
				</Row>
				<Row>
					<Col>
						{
							JSON.stringify(this.state.list)
						}
					</Col>
				</Row>
			</Container>

		);

	}

}

export default App;
