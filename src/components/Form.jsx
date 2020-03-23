import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Error from './Error'
import shortid from 'shortid'


const Form = ({ setExpense, setCreateExpense }) => {

    const [name, saveName] = useState('')
    const [quantity, saveQuantity] = useState(0)
    const [error, saveError] = useState(false)



    //Agregar gasto
    const addExpense = e => {
        e.preventDefault()
        //Validar
        if (quantity < 1 || isNaN(quantity) || name.trim() === '') {
            saveError(true)
            return
        }
        saveError(false)

        //Construir el gasto
        const expense = {
            name, quantity, id: shortid.generate()
        }
        //Pasar el gasto a App
        setExpense(expense)
        setCreateExpense(true)
        //Resetear form 
        saveName('')
        saveQuantity(0)
    }

    return (
        <form onSubmit={addExpense}>
            <h2>Agrega tus gastos aquí</h2>

            {error ? < Error message="Ambos campos obligatorios" /> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={name}
                    onChange={e => saveName(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={quantity}
                    onChange={e => saveQuantity(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"

            />
        </form>

    );
}

Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired
}

export default Form;
