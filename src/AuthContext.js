import React, { useContext, useState, useEffect } from "react"
import { auth } from "./Firebase"



// REACT_APP_FIREBASE_API_KEY=AIzaSyDyqsspWLptlZr-kmodoarTEZkBtYWPebc
// REACT_APP_AUTH_DOMAIN=auth-production-712a6.firebaseapp.com
// REACT_APP_PROJECT_ID=auth-production-712a6
// REACT_APP_STORAGE_BUCKET=auth-production-712a6.appspot.com
// REACT_APP_MESSAGE_SENDER_ID=648178870492
// REACT_APP_APPID=1:648178870492:web:aea029f4a20294f094ac19 


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }



    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword

    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}