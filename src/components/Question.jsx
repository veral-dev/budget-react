import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Error from './Error'

const Question = ({ saveBudget, saveRest, setQuestion }) => {

    //Definir el state
    const [quantity, saveQuantity] = useState(0)
    const [error, saveError] = useState(false)

    const setBudget = e => {
        saveQuantity(parseInt(e.target.value, 10))
    }

    //Submit para definir el presupuesto
    const addBudget = e => {
        e.preventDefault()
        //Validar
        if (quantity < 1 || isNaN(quantity)) {
            saveError(true)
            return
        }

        saveError(false)
        saveBudget(quantity)
        saveRest(quantity)
        setQuestion(false)
    }


    return (
        <>
            <h2>Coloca tu presupuesto</h2>

            {error ? < Error message="El presupuesto es incorrecto" /> : null}

            <form onSubmit={addBudget}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="coloca tu presupuesto"
                    onChange={setBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto" />
            </form>
        </>


    );
}

Question.propTypes = {
    saveBudget: PropTypes.func.isRequired,
    saveRest: PropTypes.func.isRequired,
    setQuestion: PropTypes.func.isRequired
}

export default Question;