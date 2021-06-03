import React from 'react'
import Formulario from './Formulario'

const Chat = () => {
    return (
        <div className='mt-3 px-2'>
            <div className="d-flex justify-content-end mb-2">
                <span className="badge rounded-pill bg-primary">mensaje usuario</span>
            </div>
            <div className="d-flex justify-content-start mb-2">
                <span className="badge rounded-pill bg-secondary">mensaje externo</span>
            </div>
            <Formulario/>
        </div>
    )
}

export default Chat
