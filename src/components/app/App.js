import './App.css';

import { Component } from 'react';

import AppInfo from '../appInfo/appInfo';
import AppFilter from '../appFilter/appFilter';
import SearchPanel from '../searchPanel/searchPanel';
import EmployeesList from '../employeesList/employeesList';
import EmployeesAddForm from '../employeesAddForm/employeesAddForm';

class App extends Component {
	constructor(props) {
    	super(props);

      	this.state = {
			data: [
				{name: 'John C.', salary: 800, increase: false, raise: true, id: 1},
				{name: 'Alex M.', salary: 3000, increase: true, raise: false, id: 2},
				{name: 'Carl W.', salary: 5000, increase: false, raise: false, id: 3}
			],
			term: '',
			filter: 'all'
      	};

		this.nextId = 4;
  	}

  	deleteEmployee = (id) => {
		this.setState(({data}) => {
			
			return {
				data: data.filter(item => item.id !== id)
			}
		})
  	}
	addEmployee = (name, salary) => {
		const newEmployee = {
			name,
			salary,
			increase: false,
			raise: false,
			id: this.nextId++
		}
		this.setState(({data}) => {
			const newData = [...data, newEmployee];
			return {
				data: newData
			}
		});
	}
	searchEmployee = (items, term) => {
		if (items.length === 0) {
			return items;
		}
		return items.filter(item => item.name.indexOf(term) !== -1)

	}
	filterEmployees = (items, filter) => {
		switch (filter) {
			case 'raise': 
				return items.filter(item => item.raise);
			case 'moreThan1K':
				return items.filter(item => item.salary > 1000);
			default:
				return items;
		}
	}

	onUpdateSearch = (term) => {
		this.setState({term});
	}

	onToggleProps = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}))
	}
	onFilterSelect = (filter) => {
		this.setState({filter});
	}

  	render() {
		const {data, term, filter} = this.state;
		const employees = data.length,
			  increasedEmployees = data.filter(item => item.increase).length,
			  visibleData = this.filterEmployees(this.searchEmployee(data, term), filter);

		return (
			<div className="App">
				<AppInfo employees={employees} increasedEmployees={increasedEmployees} />

				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>

				<EmployeesList 
					data={visibleData}
					onDelete={this.deleteEmployee}
					onToggleProps={this.onToggleProps} />
				<EmployeesAddForm onAdd={this.addEmployee} />
			</div>
		);
  	}
}

export default App;
