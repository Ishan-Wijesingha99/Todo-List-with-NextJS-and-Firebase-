import Head from 'next/head'
import Login from '@/components/Login'
import { useAuth } from '@/context/AuthContext'
import UserDashboard from '@/components/UserDashboard'



export default function Home() {
  // see if user is logged in
  const { currentUser } = useAuth()

  return (
    <>
      <Head>
        <title>Todo List</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      {/* if user is logged in, display UserDashboard, if not, display Login page */}
      { !currentUser ? <Login /> : <UserDashboard /> }
    </>
  )
}
