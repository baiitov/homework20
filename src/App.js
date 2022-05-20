// import logo from './logo.svg';
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import { Component, useState } from 'react'

const expenses = [
	{
		id: 'e1',
		title: 'Toilet paper',
		amount: '94.12',
		date: new Date('2020,3,28'),
	},
	{
		id: 'e2',
		title: 'New Tv',
		amount: '104.1',
		date: new Date('2020,3,28'),
	},
	{
		id: 'e3',
		title: 'Car Insuranse',
		amount: '73.2',
		date: new Date('2021,3,28'),
	},
	{
		id: 'e4',
		title: 'New Desk (wooden)',
		amount: '450',
		date: new Date('2022,4,16'),
	},
]
class App extends Component {
	constructor() {
		super()
		this.state = {
			array: expenses,
		}
	}
	addDataToArray = (objectWithId) => {
		this.setState((prev) => ({
			array: [...prev.array, objectWithId],
		}))
	}
	render() {
		return (
			<div className='App'>
				<NewExpense onAddDataToArray={this.addDataToArray} />

				<Expenses expenses={this.state.array} />
			</div>
		)
	}
}

export default App
