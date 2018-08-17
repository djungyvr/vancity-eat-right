import React from 'react';
import Table from './Table';
import Totals from './Totals';

const styles = {
	main: {
		'minWidth': '100%',
		'minHeight': '100%',
	},
	table: {
		'verticalAlign': 'top',
		'textAlign': 'center',
		'overflow': 'auto',
		'outline': '4px solid black',
	},
	names: {
		'display': 'inline-block',
		'cursor': 'pointer',
		'margin': '10px',
	},
	underLine: {
		'textDecoration': 'underline',
		'display': 'inline-block',
		'cursor': 'pointer',
		'margin': '10px',
	},
	totals: {
		'verticalAlign': 'top',
		'overflow': 'auto',
		'outline': '4px solid black',
	},
};

class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuItems: [],
			selectedMenuItems: [],
		}
		this.onSelectRestaurant = this.onSelectRestaurant.bind(this);
		this.onSelectMenuItem = this.onSelectMenuItem.bind(this);
		this.onDeleteMenuItem = this.onDeleteMenuItem.bind(this);
	};
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
	}
	onDeleteMenuItem(item, index, e) {
		var menuItems = this.state.selectedMenuItems;
		menuItems.splice(index, 1);
		console.log(menuItems);
		this.setState(prevState => ({
			selectedMenuItems: menuItems
		}));
		this.forceUpdate();
	}
	restaurantName(restaurant) {
		return <div style={styles.names} onClick={(e) => this.onSelectRestaurant(restaurant, e)} key={restaurant}>{restaurant}</div>
	}
	render() {
		var restaurants = Object.keys(this.props.restaurants).map(name => this.restaurantName(name));
		return (
			<div style={styles.main}>
				<ul>
					{restaurants}
				</ul>
				<div>
					<div style={styles.totals}>
						<Totals
							menuItems={this.state.selectedMenuItems}
							onDeleteMenuItem={this.onDeleteMenuItem}
						/>
					</div>
					<div style={styles.table}>
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
