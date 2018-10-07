import React from 'react';

class Table extends React.Component {
	menuItem(item, index) {
		return (
			<tr style={{"cursor": "pointer"}} key={item.name + index} onClick={(e) => this.props.onSelectMenuItem(item, e)}>
				<td>{item.name}</td>
				<td>{item.calories}</td>
				<td>{item.carbs}</td>
				<td>{item.protein}</td>
				<td>{item.fat}</td>
				<td>{item.size}</td>
			</tr>
		)
	}
	render() {
		var menuItems = this.props.menuItems.map((item, index) => this.menuItem(item, index));
		return (
			<div>
				<h3>Menu</h3>
				<table className="table">
					<tbody>
					<tr>
						<th>Name</th>
						<th>Calories</th>
						<th>Carbs(g)</th>
						<th>Protein(g)</th>
						<th>Fat(g)</th>
						<th>Size(g)</th>
					</tr>
					{menuItems}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Table;
