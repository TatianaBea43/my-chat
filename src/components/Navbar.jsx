import React from 'react'
import { ChatContext } from '../context/ChatProvider'

const Navbar = () => {
    const { usuario, iniciarSesion, cerrarSesion } = React.useContext(ChatContext)
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <span className='navbar-brand'>
                Chat
            </span>
            <div>
                {
                    usuario.estado ? (
                        <button
                            className="btn btn-outline-danger my-2 me-2"
                            onClick={cerrarSesion}
                        >
                            Cerrar sesión
                        </button>
                    ) : (
                        <button
                            className="btn btn-outline-success my-2 me-2"
                            onClick={iniciarSesion}
                        >
                            Acceder
                        </button>
                    )
                }
            </div>

        </nav>
    )
}

export default Navbar
