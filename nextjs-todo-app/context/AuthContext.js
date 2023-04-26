import React, { useContext, useState, useEffect, useRef } from 'react'
import { auth, db } from '../firebase.js'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

const AuthConext = React.createContext()



export const useAuth = () => useContext(AuthConext)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(null)
  const userInfo = useRef()

  function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    return
  }

  f
}