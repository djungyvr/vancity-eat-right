import React from 'react';

class Totals extends React.Component {
	menuItem(id, item) {
		return (
			<tr style={{"cursor": "pointer"}} key={id} onClick={(e) => this.props.onDeleteMenuItem(id)}><td>{item.name}</td></tr>
		)
	}
	render() {
		var menuItems = this.props.menuItems.map(item => this.menuItem(item.id, item.item));
		return (
			<div>
				<h3>Totals</h3>
				<table className="table">
				<tbody>
					<tr>
						<th>Calories</th>
						<th>Carbs(g)</th>
						<th>Protein(g)</th>
						<th>Fat(g)</th>
						<th>Size(g)</th>
					</tr>
					<tr>
						<td>{this.props.nutritionTotal.calories}</td>
						<td>{this.props.nutritionTotal.carbs}</td>
						<td>{this.props.nutritionTotal.protein}</td>
						<td>{this.props.nutritionTotal.fat}</td>
						<td>{this.props.nutritionTotal.size}</td>
					</tr>
				</tbody>
				</table>
				<table className="table">
				<tbody>
					<tr>
						<th>Selected Items</th>
					</tr>
					{menuItems}
				</tbody>
				</table>
			</div>
		)
	}
}

export default Totals;
