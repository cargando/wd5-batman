import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row, Table } from "reactstrap";

const TableRow = (item) => {

	const dataValidHelper = (localItem) => { // функция-помошник для проверки данных, чтобы не дублировать код

		if(!localItem) {
			return ' - ';
		}

		return localItem;
	};

		return Object.entries(item).map((localItem) => {
			const data = localItem[1];
			let textData = dataValidHelper(data);

			if (Array.isArray(data)) {
				textData = data.join(", ");

			} else if (typeof data === "object") {
				console.log("DATA = ", data);
				textData = !!data && Object.values(data).map((subItem) => {

					if (Array.isArray(subItem)) {
						return subItem.join(", ");
					} else return JSON.stringify(subItem);
				});
			}


			return (
				<tr>
					<td><strong>{ localItem[0] }</strong></td>
					<td>{ textData }</td>
				</tr>);
		});
	};

function DetailsPage(props) {

	const moviesListRedux = useSelector((store) => (store.app.movies || []));
	const selectedItem = moviesListRedux.filter((item) => (item.show.id == props.match.params.code));


	console.log("selectedItem", selectedItem);
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h1>Show Details</h1>
					<h3>{ props.match.params.code }</h3>

				</Col>
			</Row>
			<Row>
				<Col>
					<Table>
						<thead>
							<tr>
								<th>#</th>
								<th>info</th>
							</tr>
						</thead>
						<tbody>
						{
							TableRow((selectedItem && selectedItem[0] && selectedItem[0].show) || {})

						}
						</tbody>
					</Table>
				</Col>
			</Row>
		</React.Fragment>
	);
}

export default DetailsPage;
