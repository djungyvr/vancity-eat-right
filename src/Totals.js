import React from 'react';

const styles = {
	container: {
		'height': '128px',
		'maxWidth': '600px',
		'display': 'flex',
		'margin': 'auto',
	},
	menuItemContainer: {
		'height': '100%',
		'maxHeight': '100%',
		'minHeight': '100%',
		'width': '40%',
		'display': 'inline-block',
	},
	menuItems: {
		'maxHeight': '80%',
		'width': '100%',
		'overflow': 'auto',
		'textAlign': 'left',
	},
	menuItemName: {
		'cursor': 'pointer',
	},
	totalsContainer: {
		'height': '100%',
		'width': '60%',
		'display': 'inline-block',
		'overflow': 'auto',
	},
	totals: {
		'borderSpacing': '4px',
	},
	tableCellNumber: {
		'textAlign': 'right',
	},
};

class Totals extends React.Component {
	menuItem(item, index) {
		return (
				<p key={item.name + "_name"} style={styles.menuItemName} onClick={(e) => this.props.onDeleteMenuItem(item, index)}>{item.name}</p>
		)
	}
	render() {
		var menuItems = this.props.menuItems.map((item, index) => this.menuItem(item, index));
		return (
			<div style={styles.container}>
				<div style={styles.menuItemContainer}>
					<h4 style={{height: '24px', margin: '0px'}}>Items</h4>
					<div style={styles.menuItems}>
						<ul>
							{menuItems}
						</ul>
					</div>
				</div>
				<div style={styles.totalsContainer}>
					<table style={styles.totals}>
						<tr>
							<th style={styles.tableCellNumber}>Calories</th>
							<th style={styles.tableCellNumber}>Carbs(g)</th>
							<th style={styles.tableCellNumber}>Protein(g)</th>
							<th style={styles.tableCellNumber}>Fat(g)</th>
							<th style={styles.tableCellNumber}>Size(g)</th>
						</tr>
						<tr>
							<td style={styles.tableCellNumber}>{this.props.nutritionTotal.calories}</td>
							<td style={styles.tableCellNumber}>{this.props.nutritionTotal.carbs}</td>
							<td style={styles.tableCellNumber}>{this.props.nutritionTotal.protein}</td>
							<td style={styles.tableCellNumber}>{this.props.nutritionTotal.fat}</td>
							<td style={styles.tableCellNumber}>{this.props.nutritionTotal.size}</td>
						</tr>
					</table>
				</div>
			</div>
		)
	}
}

export default Totals;
