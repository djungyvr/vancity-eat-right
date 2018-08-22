import React from 'react';

const styles = {
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
			<div style={{overflow: 'auto'}}>
				<table style={{width: '100%', maxWidth: '600px', margin: '0 auto', borderSpacing: '4px'}}>
					<TableHeader/>
					<TableBody menuItems={this.props.menuItems} onSelectMenuItem={this.props.onSelectMenuItem}/>
				</table>
			</div>
		)
	}
}

class TableHeader extends React.Component {
	render() {
		return (
			<tr>
				<th style={styles.tableCellText}>Name</th>
				<th style={styles.tableCellNumber}>Calories</th>
				<th style={styles.tableCellNumber}>Carbs(g)</th>
				<th style={styles.tableCellNumber}>Protein(g)</th>
				<th style={styles.tableCellNumber}>Fat(g)</th>
				<th style={styles.tableCellNumber}>Size(g)</th>
			</tr>
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
