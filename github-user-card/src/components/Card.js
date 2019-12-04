import React from 'react';
import axios from 'axios';
import Followers from './Followers';

class Card extends React.Component {
	constructor() {
		super();

		this.state = {
			cards: []
		};
	}

	componentDidMount() {
		console.log('cdm is running');

		axios
			.get('https://api.github.com/users/perezsergioace')
			.then((response) => {
				console.log(response.data);
				this.setState({
					cards: response.data
				});
			})
			.catch((error) => {
				console.log('Data was not returned', error);
			});
	}

	render() {
		return (
			<div>
				<h2>Github Personal Card</h2>
				<div>
					<img src={this.state.cards.avatar_url} alt="Profile" />
					<h2>Name: {this.state.cards.name}</h2>
					<p>Username: {this.state.cards.login}</p>
				</div>
				<div>
					<h1>Followers Card</h1>
					<Followers />
				</div>
			</div>
		);
	}
}

export default Card;
