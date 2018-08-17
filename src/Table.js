import React from 'react';

const styles = {
	table: {
		'borderSpacing': '10px',
		'outline': '4px solid black',
		'margin': '0 auto',
	},
	tableCellText: {
		'textAlign': 'left',
	},
	tableCellNumber: {
		'textAlign': 'right',
	},
	tableRow: {
		'cursor': 'pointer',
	},
};

class Table extends React.Component {
	render() {
		return (
			<table style={styles.table}>
				<TableHeader/>
				<TableBody menuItems={this.props.menuItems} onSelectMenuItem={this.props.onSelectMenuItem}/>
			</table>
		)
	}
}

class TableHeader extends React.Component {
	render() {
		return (
			<thead>
				<tr>
					<th style={styles.tableCellText}>Name</th>
					<th style={styles.tableCellNumber}>Calories</th>
					<th style={styles.tableCellNumber}>Carbs(g)</th>
					<th style={styles.tableCellNumber}>Protein (g)</th>
					<th style={styles.tableCellNumber}>Fat (g)</th>
					<th style={styles.tableCellNumber}>Size (g)</th>
				</tr>
			</thead>
		)
	}
}

class TableBody extends React.Component {
	menuItem(item, index) {
		return (
			<tr key={item.name + index} style={styles.tableRow} onClick={(e) => this.props.onSelectMenuItem(item, e)}>
				<td style={styles.tableCellText}>{item.name}</td>
				<td style={styles.tableCellNumber}>{item.calories}</td>
				<td style={styles.tableCellNumber}>{item.carbs}</td>
				<td style={styles.tableCellNumber}>{item.protein}</td>
				<td style={styles.tableCellNumber}>{item.fat}</td>
				<td style={styles.tableCellNumber}>{item.size}</td>
			</tr>
		)
	}
	render() {
		var menuItems = this.props.menuItems.map((item, index) => this.menuItem(item, index));
		return (
		<tbody>
			{menuItems}
		</tbody>
		)
	}
}

export default Table;
