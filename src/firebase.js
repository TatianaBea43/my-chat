import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDH9KYBY2-3yml22ZzM23NPqDGoFEEjxow",
    authDomain: "my-chat-1710b.firebaseapp.com",
    projectId: "my-chat-1710b",
    storageBucket: "my-chat-1710b.appspot.com",
    messagingSenderId: "979323479575",
    appId: "1:979323479575:web:bca4c0a43e100286a91e52"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}