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
			this.setState({errState: e});
		});
	}

	renderCard = () => {
		const item = this.state.list[0] ? this.state.list[0].show : {};

		const {
			id,
			name = "",
			url = "",
			image = {},
			summary,
			premiered,
		} = item;


		const watched = false;

		const onChange = () => null;
		const onViewMore = () => null;

		return (
			<div>
			<Card color={ watched ? "primary" : ""} >
				<CardImg top width="100%" src={ image.medium } alt={ name } />
				<CardBody>
					<CardTitle>{ name }</CardTitle>
					<CardText>
						<small className="text-muted" dangerouslySetInnerHTML={ { __html: summary } } />
					</CardText>
					<CardText>
						<small className="text-muted">{ premiered }</small> <br />
						<small><a target="_blank" href={ url }>Visit movie page</a></small> <br /> <br/>
						<Row>
							<Col>
								<Button
									size="sm"
									onClick={ () => { onChange(id) }}
									variant={ watched ? "success" : "outline-secondary" }
								>
									{ watched ? "Смотрел" : "Не смотрел"}
								</Button>
							</Col>
							<Col>
								<Button
									size="sm"
									onClick={ () => { onViewMore(id) }}
									variant="info"
								>
									Детали
								</Button>
							</Col>
						</Row>
					</CardText>
				</CardBody>
			</Card>
			</div>
		)
	};


	render() {
		console.log("MAIN RND");
		return (
			<Container>

				<Row>
					<Col><h1>Batman Movies</h1></Col>
				</Row>
				<Row>
					<Col sm="4">
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
