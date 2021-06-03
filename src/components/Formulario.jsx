import React from 'react'

const Formulario = () => {
    return (
        <form className='fixed-bottom input-group p-3 bg-dark'>
            <div className="input-group">
            <input type="text" className='form-control'/>
                <button type='submit' className="btn btn-primary" id="button-addon2">
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default Formulario
