import React, { useContext, useState, useEffect, useRef } from 'react'
import { auth } from '../firebase.js'
// need these from firebase
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'



const AuthConext = React.createContext()



export const useAuth = () => useContext(AuthConext)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const userInfo = useRef()


  // it's this simple
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)

  // it's this simple
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

  // it's this simple
  const logout = () => signOut(auth)



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
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
    userInfo
  }
  
  return (
    <AuthConext.Provider value={value}>
      {!loading && children}
    </AuthConext.Provider>
  )
}