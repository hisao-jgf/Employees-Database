import './employeesListItem.css';

const EmployeesListItem = (props) =>  {
    const {name, salary, increase, raise, onDelete, onToggleProps} = props;

    let classNamesString = 'list-group-item d-flex justify-content-between';
    if (increase) classNamesString += ' increase';
    if (raise) classNamesString += ' like';

    return (
        <li className={classNamesString}>
            <span 
                className="list-group-item-label"
                onClick={onToggleProps}
                data-toggle="raise">
                {name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProps}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;