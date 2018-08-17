import React, { Component } from 'react';
import './App.css';
import Info from './Info';
import restaurants from './Restaurants';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1 className="App-title">Vancouver Eat Smart</h1>
				<Info restaurantName="Foo Restaurant" restaurants={restaurants}/>
			</div>
		);
	}
}

export default App;
