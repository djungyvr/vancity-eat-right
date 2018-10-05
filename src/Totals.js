import React from 'react';

class Totals extends React.Component {
	menuItem(item, index) {
		return (
				<tr key={item.name + "_name"} onClick={(e) => this.props.onDeleteMenuItem(item, index)}>{item.name}</tr>
		)
	}
	render() {
		var menuItems = this.props.menuItems.map((item, index) => this.menuItem(item, index));
		return (
			<div>
				<table class="table">
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
				</table>
				<div>
				<table class="table">
					{menuItems}
				</table>
				</div>
			</div>
		)
	}
}

export default Totals;
