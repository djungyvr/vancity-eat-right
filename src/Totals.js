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
			<div className="row">
				<div className="col">
					<table className="table table-sm">
						<thead>
							<tr>
								<th colspan="5" scope="col">Totals</th>
							</tr>
							<tr>
								<th scope="col">Calories</th>
								<th scope="col">Carbs(g)</th>
								<th scope="col">Protein(g)</th>
								<th scope="col">Fat(g)</th>
								<th scope="col">Size(g)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{this.props.nutritionTotal.calories}</td>
								<td>{this.props.nutritionTotal.carbs}</td>
								<td>{this.props.nutritionTotal.protein}</td>
								<td>{this.props.nutritionTotal.fat}</td>
								<td>{this.props.nutritionTotal.size}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="col">
					<table className="table table-sm">
					<thead>
						<tr>
							<th>Selected Items</th>
						</tr>
					</thead>
					<tbody>
						{menuItems}
					</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default Totals;
