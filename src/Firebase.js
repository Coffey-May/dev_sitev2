import firebase from "firebase/app"
import "firebase/auth"
require('dotenv').config();

const app = firebase.initializeApp({
    apiKey: 'AIzaSyCpTvx6QA_i6gRdm1siJm7XKQlFfY1uY6k',
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APPID
})
export const auth = app.auth()
export default app