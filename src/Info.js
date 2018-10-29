import React from 'react';
import Table from './Table';
import Totals from './Totals';

class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			autoIncrement: 1,
			menuItems: this.props.restaurants["Cactus Club"],
			selectedRestaurant: "Cactus Club",
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
			calories += menuItems[i].item.calories;
			carbs += menuItems[i].item.carbs;
			protein += menuItems[i].item.protein;
			fat += menuItems[i].item.fat;
			size += menuItems[i].item.size;
		}
		this.setState(prevState => ({
			nutritionTotal: {calories: calories, carbs: carbs, protein: protein, fat: fat, size: size}
		}));
	}
	onSelectRestaurant(name, e) {
		let menuItems = this.props.restaurants[name];
		this.setState(prevState => ({
			menuItems: menuItems,
			selectedRestaurant: name
		}));
	}
	onSelectMenuItem(item, e) {
		var menuItems = this.state.selectedMenuItems;
		menuItems.push({id: this.state.autoIncrement, item: item});
		this.setState(prevState => ({
			selectedMenuItems: menuItems,
			autoIncrement: this.state.autoIncrement + 1
		}));
		this.calculateTotals();
	}
	onDeleteMenuItem(id, e) {
		var menuItems = this.state.selectedMenuItems;
		for (var i = 0; i < menuItems.length; i++) {
			if (menuItems[i].id === id) {
				menuItems.splice(i, 1);
			}
		}
		this.setState(prevState => ({
			selectedMenuItems: menuItems
		}));
		this.calculateTotals();
	}
	isSelected(restaurant) {
		return restaurant === this.state.selectedRestaurant;
	}
	restaurantName(restaurant) {
		return <p style={{display: 'inline-block', cursor: 'pointer', margin: '16px', textDecoration: this.isSelected(restaurant) ? 'underline': ''}} onClick={(e) => this.onSelectRestaurant(restaurant, e)} key={restaurant}>{restaurant}</p>
	}
	render() {
		var restaurants = Object.keys(this.props.restaurants).map(name => this.restaurantName(name));
		return (
			<div className="container-fluid">
				<div className="row justify-content-center">
					<h1>Vancity Eat Smart</h1>
				</div>
				<div className="row justify-content-center">
					{restaurants}
				</div>
				<div className="row">
					<div className="col">
						<Totals
							menuItems={this.state.selectedMenuItems}
							onDeleteMenuItem={this.onDeleteMenuItem}
							nutritionTotal={this.state.nutritionTotal}
						/>
					</div>
					<div className="col">
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
