import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState , useEffect } from 'react'
import { useRouter } from 'next/router'
import ShellConfig from '../shell.config.json'
const Home: NextPage = () => {
  let adminUsername = ShellConfig.adminUsername
  let adminPassword = ShellConfig.adminPassword
  const [err,seterr] = useState()
  const router = useRouter()
  const handleSubmit = async (event) => { 
    event.preventDefault()
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    if(adminUsername !== data.username){
      seterr("Authorization failed")
    }
    if(adminPassword !== data.password){
      seterr("Authorization failed")
    }
    window.localStorage.setItem("token", data.username)
    window.sessionStorage.setItem("token", data.password)
    if(adminUsername === data.username && adminPassword === data.password){
      router.push("/sessions/shell/")
    }
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Cloud Shell | Login | Eu-Cdg 4</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center text-gray-900 text-2xl">CloudShell 4 | EU-CDG</h1>
    <div className="w-96 rounded-2xl shadow-2xl border-2 border-indigo-500 bg-gray-200 text-center">
      <div className="pt-2"></div>
      {err && 
      <p className="text-red-400">{err}</p>
      }
      <div className="pt-8"></div>
         
       <form onSubmit={handleSubmit}>
       <label className="text-green-900">Username</label>
         <div className="pt-2"></div>
         <input 
           type="text"
           name="username"
           placeholder="username"
           className="rounded-2xl shadow-md border-2 py-5 px-3 border-gray-900"
           autocomplete="off"
           required
           />
        <div className="pt-2"></div>
          <label className="text-green-900">Password</label>
         <div className="pt-2"></div>
      
          <input 
           type="password"
           name="password"
           placeholder="password"
           className="rounded-2xl shadow-md border-2 py-5 px-3 border-gray-900"
           autocomplete="off"
           required
           />
         <div className="pt-4"></div>
         <button
           type="submit"
           className="py-5 px-3 rounded-2xl  bg-indigo-500 text-gray-50"
           >
         Login Cloud Shell
         </button>
       </form>
      <div className="pt-4"></div>
        <p className="text-gray-600">Shell Proxied To go-prod.eu-cdg.nego-dev.com</p>
      <div className="pt-8"></div>
         
      </div>
     
    </div>
  )
}

export default Home