import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase'



// this is a custom hook to fetch the todos from the firebase database
export default function useFetchTodos() {
  // for loading screen
  const [loading, setLoading] = useState(true)
  // if there is an error
  const [error, setError] = useState(null)
  // the todos being fetched from firestore
  const [todos, setTodos] = useState(null)

  // see if they are logged in
  const { currentUser } = useAuth()


  // when the page first loads, you want to load the todos, so useEffect should be used
  useEffect(() => {

    // this is the best way to use async functions inside useEffect, define async function then call it
    async function fetchData() {
      try {
        // this is how you fetch data from firestore
        const docRef = doc(db, 'users', currentUser.uid)

        // this is how you fetch data from firestore
        const docSnap = await getDoc(docRef)

        // this is how you fetch data from firestore
        if (docSnap.exists()) {
          // if it exists, set Todos to the data you got from firestore
          setTodos(docSnap.data().todos)
        } else {
          // if it doesn't exist, set Todos to empty object
          setTodos({})
        }

      } catch (err) {
        // in case error occurs
        setError('Failed to load todos')
        console.log(err)

      } finally {
        // end loading screen
        setLoading(false)
      }

    }

    // call async function
    fetchData()

  }, [])

  return { loading, error, todos, setTodos }
}
