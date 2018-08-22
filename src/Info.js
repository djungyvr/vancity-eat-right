import React from 'react';
import Table from './Table';
import Totals from './Totals';

const styles = {
	main: {
		'minWidth': '100%',
		'minHeight': '100%',
	},
	table: {
		'textAlign': 'center',
	},
	names: {
		'display': 'inline-block',
		'cursor': 'pointer',
		'margin': '16px',
	},
	totals: {
		'verticalAlign': 'top',
	},
};

class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuItems: [],
			selectedMenuItems: [],
			nutritionTotal: {calories:0, carbs:0, protein:0, fat:0, size:0},
		}
		this.onSelectRestaurant = this.onSelectRestaurant.bind(this);
		this.onSelectMenuItem = this.onSelectMenuItem.bind(this);
		this.onDeleteMenuItem = this.onDeleteMenuItem.bind(this);
	};
	calculateTotals() {
		var menuItems = this.state.selectedMenuItems;
		var calories = 0.0;
		var carbs = 0.0;
		var protein = 0.0;
		var fat = 0.0;
		var size = 0.0;
		for (var i = 0; i < menuItems.length; i++) {
			calories += menuItems[i].calories;
			carbs += menuItems[i].carbs;
			protein += menuItems[i].protein;
			fat += menuItems[i].fat;
			size += menuItems[i].size;
		}
		this.setState(prevState => ({
			nutritionTotal: {calories:calories, carbs:carbs, protein:protein, fat:fat, size:size} 
		}));
	}
	onSelectRestaurant(name, e) {
		console.log(e.target);
		let menuItems = this.props.restaurants[name];
		this.setState(prevState => ({
			menuItems: menuItems
		}));
	}
	onSelectMenuItem(item, e) {
		var menuItems = this.state.selectedMenuItems;
		menuItems.push(item);
		this.setState(prevState => ({
			selectedMenuItems: menuItems
		}));
		this.calculateTotals();
	}
	onDeleteMenuItem(item, index, e) {
		var menuItems = this.state.selectedMenuItems;
		menuItems.splice(index, 1);
		console.log(menuItems);
		this.setState(prevState => ({
			selectedMenuItems: menuItems
		}));
		this.calculateTotals();
		this.forceUpdate();
	}
	restaurantName(restaurant) {
		return <p style={styles.names} onClick={(e) => this.onSelectRestaurant(restaurant, e)} key={restaurant}>{restaurant}</p>
	}
	render() {
		var restaurants = Object.keys(this.props.restaurants).map(name => this.restaurantName(name));
		return (
			<div style={styles.main}>
				<div>
					{restaurants}
				</div>
				<div>
					<div style={styles.totals}>
						<Totals
							menuItems={this.state.selectedMenuItems}
							onDeleteMenuItem={this.onDeleteMenuItem}
							nutritionTotal={this.state.nutritionTotal}
						/>
					</div>
					<div style={{textAlign: 'center'}}>
						<Table
							menuItems={this.state.menuItems}
							onSelectMenuItem={this.onSelectMenuItem}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Info
