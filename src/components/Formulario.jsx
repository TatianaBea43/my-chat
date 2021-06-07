import React from 'react'
import {ChatContext} from '../context/ChatProvider'

const Formulario = () => {
    const [mensaje, setMensaje] = React.useState('')

    const { agregarMensajes } = React.useContext(ChatContext)


    const enviarMensajes = (e) => {
        e.preventDefault()

        if(!mensaje.trim()){
            return
        }
        agregarMensajes(mensaje)
        setMensaje('')

    }
    return (
        <form className='fixed-bottom input-group p-3 bg-dark' onSubmit={enviarMensajes}>
            <div className="input-group">
            <input type="text" className='form-control' value={mensaje} onChange={e => setMensaje(e.target.value)}/>
                <button type='submit' className="btn btn-primary" id="button-addon2">
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default Formulario
