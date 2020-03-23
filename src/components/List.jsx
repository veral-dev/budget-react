import React from 'react';
import Expense from './Expense'
import PropTypes from 'prop-types'

const List = ({ expenses }) => {
    return (<div className="gastos-realizados">
        <h2>Listado</h2>
        {expenses.map(expense => (
            <Expense expense={expense} key={expense.id} />
        ))}
    </div>);
}

List.propTypes = { expenses: PropTypes.array.isRequired }

export default List;