import React from 'react';
import './App.css';
import Card from './components/Card';
import Followers from './components/Followers';

function App() {
	return (
		<div className="App">
			<h1>Github User Card</h1>
			<Card />
			<div>
				<h1>Followers Card</h1>
				<Followers />
			</div>
		</div>
	);
}

export default App;
