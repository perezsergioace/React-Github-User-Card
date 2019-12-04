import React from 'react';
import axios from 'axios';

class Followers extends React.Component {
	constructor() {
		super();

		this.state = {
			followers: []
		};
	}

	componentDidMount() {
		console.log('CDM is running for followers');

		axios
			.get('https://api.github.com/users/perezsergioace/followers')
			.then((response) => {
				console.log(response.data);
				this.setState({
					followers: response.data
				});
			})
			.catch((error) => {
				console.log('Data was not returned for followers', error);
			});
	}

	render() {
		return (
			<div>
				{this.state.followers.map((follower) => (
					<div key={follower.id}>
						<img src={follower.avatar_url} alt="Profile" />
						<h2>Username: {follower.login}</h2>
					</div>
				))}
			</div>
		);
	}
}

export default Followers;
