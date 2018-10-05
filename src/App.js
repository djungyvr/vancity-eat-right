import React, { Component } from 'react';
import './App.css';
import Info from './Info';
import restaurants from './Restaurants';

class App extends Component {
	render() {
		return (
			<Info restaurants={restaurants}/>
		);
	}
}

export default App;
