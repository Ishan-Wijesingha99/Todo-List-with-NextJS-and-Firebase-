import Image from 'next/image'
import Head from 'next/head'
import Login from '@/components/Login'
import { useAuth } from '@/context/AuthContext'
import UserDashboard from '@/components/UserDashboard'



export default function Home() {
  const { currentUser } = useAuth()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      { !currentUser ? <Login /> : <UserDashboard /> }
    </>
  )
}
