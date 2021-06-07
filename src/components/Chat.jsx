import React from 'react'
import Formulario from './Formulario'
import { ChatContext } from '../context/ChatProvider'


const Chat = () => {

    const { usuario, mensajes } = React.useContext(ChatContext)
    const refZonaChat = React.useRef(null)
   
    React.useEffect (() => {
        refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight
    }, [mensajes])
    

    return (
        <div className='mt-3 px-2' style={{
            height: '83vh', overflow: 'auto'
        }}
        ref={refZonaChat}
        >
            {
                mensajes.map((item, index) => (
                    item.uid === usuario.uid ? (
                        <div className="d-flex justify-content-end mb-2" key={index}>
                            <span className="badge rounded-pill bg-primary">{item.texto}</span>
                        </div>
                    ) : (<div className="d-flex justify-content-start mb-2" key={index}>
                        <span className="badge rounded-pill bg-secondary">{item.texto}</span>
                    </div>
                    )
                ))
            }
            <Formulario />
        </div>
    )
}

export default Chat
