import React, { Component } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
class Expenses extends Component {
	constructor() {
		super()
		this.state = {
			filteredYear: '2022',
		}
	}
	filterChangeHandler = (selectedYear) => {
		this.state({ filteredYear: selectedYear })
	}

	// let expenseContent = <p style={{ textAlign: 'center' , color:"white"}}>no expense Found</p>
	// if (filteredExpenses.length > 0) {
	// 	expenseContent = filteredExpenses.map((el) => (
	// 		<ExpenseItem
	// 			key={el.id}
	// 			date={el.date}
	// 			text={el.title}
	// 			price={el.amount}
	// 		/>
	// 	))
	// }
	render() {
		const filteredExpenses = this.props.expenses.filter((expense) => {
			return (
				expense.date.getFullYear().toString() ===
				this.state.filteredYear
			)
		})
		return (
			<Card className='expenses'>
				<ExpensesFilter
					filteredYear={this.state.filteredYear}
					onChangeFilter={this.filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				{/* {expenseContent} */}
				<ExpensesList expenses={filteredExpenses} />
				{/* {filteredExpenses.length === 0 ? (
				<p>no expense Found.</p>
			) : (
				filteredExpenses.map((el) => {
					return (
						<ExpenseItem
							key={el.id}
							date={el.date}
							text={el.title}
							price={el.amount}
						/>
					)
				})
			)} */}
			</Card>
		)
	}
}

export default Expenses
