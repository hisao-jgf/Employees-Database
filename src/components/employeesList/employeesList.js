import './employeesList.css';

import EmployeesListItem from '../employeesListItem/employeesListItem';

const EmployeesList = ({data, onDelete, onToggleProps}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProps={(e) => onToggleProps(id, e.currentTarget.getAttribute('data-toggle'))} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;