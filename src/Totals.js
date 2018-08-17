import React from 'react';

const styles = {	
	deleteButton: {
		'cursor': 'pointer', 
	},
	menuItems: {
		'display': 'inline-block',
	},
	menuItem: {
		'display': 'inline-block',
	},
	totals: {
		'display': 'inline-block',
	},
};

class Totals extends React.Component {
	menuItem(item, index) {
		return (
			<div key={item.name + index}>
				<p key={item.name + "_name"} style={styles.menuItem}>{item.name}</p>
				<button key={item.name + "_del"} onClick={(e) => this.props.onDeleteMenuItem(item, index)} style={styles.menuItem}>x</button>
			</div>
		)
	}
	render() {
		var menuItems = this.props.menuItems.map((item, index) => this.menuItem(item, index));
		return (
			<div>
				<p>Totals</p>
				<div style={styles.menuItems}>
					{menuItems}
				</div>
				<div style={styles.totals}>
				</div>
			</div>
		)
	}
}

export default Totals;
