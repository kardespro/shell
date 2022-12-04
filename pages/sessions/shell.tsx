import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState , useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
const Home: NextPage = () => {
  const router = useRouter()
  const [command,setCommand] = useState([])
  useEffect(() => {
    let l = window.localStorage.getItem("token")
    let s = window.sessionStorage.getItem("token")
    if(!l || !s){
      router.push("/")
    }
    if(!l){
      router.push("/")
    }
    if(!s){
      router.push("/")
    }
    
    
  })

  async function fetchData(e) {
    const nego = await axios.get(
      `/api/sessions/execute?command=${e || "echo Welcome Negomon"}`
    )
    setCommand(nego.data.message || [])
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    fetchData(e.target.command.value)
  }

return(
  <>
  <div className="bg-gray-900 flex min-h-screen flex-col  py-2">
     <p className="text-green-400">nego@shell4.eu-cdg ~ </p>
    
    {command && 
   <p className="text-gray-50">{command || "daemon error "}</p> 
    
    }
    <form onSubmit={handleSubmit}>
     <div className="pt-64"></div>
   <center>  
     <input 
       type="text"
       name="command"
       className="text-gray-10 border-2 border-green-600 bg-indigo-500 rounded-2xl py-5 px-3 justify-center bottom-10 w-full"
       placeholder="command"
       required
       />
     </center>
      </form>
    </div>
  </>
)
}
export default Home