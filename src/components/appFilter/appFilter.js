import './appFilter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {label: 'Все сотрудники', name: 'all'},
        {label: 'На повышение', name: 'raise'},
        {label: 'З/П больше 1000$', name: 'moreThan1K'}
    ];

    const buttons = buttonsData.map(({label, name}) => {
        const activeBtn = props.filter === name;
        const activeClass = activeBtn ? 'btn-light' : 'btn-outline-light';

        return (
            <button type="button"
                    className={`btn ${activeClass}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)} >
                    {label}
            </button>
        );
    })
    
    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;