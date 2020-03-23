import React from 'react';
import PropTypes from 'prop-types'
import { checkBudget } from '../helpers'


const BudgetControl = ({ budget, rest }) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: {budget}€
        </div>
            <div className={checkBudget(budget, rest)}>
                Restante: {rest}€
        </div>
        </>

    );
}

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    rest: PropTypes.number.isRequired,
}

export default BudgetControl;