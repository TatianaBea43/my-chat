import React from 'react'
import {db, auth, provider} from '../firebase'

export const ChatContext = React.createContext()

const ChatProvider = (props) => {
    const dataUsuario = {
        uid: null,
        email: null,
        estado: null
    }

    const [usuario, setUsuario] = React.useState(dataUsuario)
    const [mensajes, setMensajes] = React.useState([])

    React.useEffect(() => {
        detectarUsuario()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const detectarUsuario = () => {
        auth.onAuthStateChanged(user => {
            if(user){
                setUsuario({
                    uid:user.uid,
                    email: user.email,
                    estado: true
                })
                obtenerMensajes()
            }else{
                setUsuario({
                    uid:null,
                    email: null,
                    estado: false
                })
            }
        })
    }

    const iniciarSesion = async () => {
        try {
            await auth.signInWithPopup(provider)
        } catch (error) {
            console.log('error', error)
            
        }
    }

    const cerrarSesion = () => {
        auth.signOut()
    }

    const obtenerMensajes = () => {
        db.collection('chat').orderBy("fecha").onSnapshot(query => {
            const arrayMensajes = query.docs.map(item => item.data())
            setMensajes(arrayMensajes)
        })  
    }

    const agregarMensajes = async (data) => {
        try {
            await db.collection('chat').add({
                fecha: Date.now(),
                texto: data,
                uid: usuario.uid
            });
        } catch (error) {
            console.log('error', error)
            
        }
    }


    return (
        <ChatContext.Provider value={{usuario, iniciarSesion, cerrarSesion, mensajes, agregarMensajes}}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider
