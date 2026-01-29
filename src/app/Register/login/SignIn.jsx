"use client"

import axios from "axios"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function SignIn(){

    const [formdata , setformdata] = useState({
        username:"",
        email:"",
        password:""
    })
    const [usern , setusern] = useState("")
    const [roles , setroles] = useState("")
    
    const [message , setmessage] = useState("")
    const router = useRouter()
    const [loader , setloader] = useState(false)

    const handleChanges = (e) => {
        const {name , value} = e.target
        setformdata(prev => ({...prev , [name]:value}))
        setusern(prev => ({...prev , [name]:value}))
    }
    const handleSubmit = async(e) => {
        setloader(true)
        e.preventDefault()

        try {
           
            const res = await axios.post("http://localhost:4000/api/login" , formdata , {
                headers:{
                    "Content-Type" : "application/json"
                },
                withCredentials:true
            })
            console.log("User login Successfully" , res.data.loggedin)
            setmessage("user login successfully")

            setformdata({
                username:"",
                email:"",
                password:""
            })
            console.log(res.data.loggedin.isActive)
            console.log(res.data.loggedin.role)
           if (res.data.loggedin.role === "teacher" && !res.data.loggedin.isActive) {
  router.push("/Register/TutorDetails")
}
else if(res.data.loggedin.role === "teacher" && res.data.loggedin.isActive){
    router.push("/tutoradmin")

}
 else {
  router.push("/")
}

            setloader(false)
            

            
        } catch (error) {
            console.log("error aries" , error)
           setmessage(error.response?.data?.message)
           setloader(false)
            
        }
        finally{
            setloader(false)
        }

    }
    return(
        <div className="min-h-screen bg-cover w-full bg-center flex justify-center items-center" style={{backgroundImage:"url('/bookbg1.jpeg')"}}>
            <div className="h-full w-full max-w-4xl flex flex-col md:flex-row bg-white rounded-2xl">
                
                <form onSubmit={handleSubmit} className="w-full space-y-5 p-10">
                    <label className="w-full flex justify-end text-lg underline"><a href="/Register">SignUp</a></label>
                    <h1 className="w-full text-2xl font-bold">LogIn Your Register Account</h1>
                    <div>
                        <p>Username</p>
                    <input type="text" name="username" value={formdata.username} onChange={handleChanges} className="border px-5 py-1 rounded-2xl" placeholder=""/>
                    </div>
                    <div>
                        <p>Email</p>
                    <input type="email" name="email" value={formdata.email} onChange={handleChanges} className="border px-5 py-1 rounded-2xl" placeholder=""/>
                    </div>
                    <div>
                        <p>Password</p>
                    <input type="password" name="password" value={formdata.password} onChange={handleChanges} className="border px-5 py-1 rounded-2xl" placeholder=""/>
                    </div>
                    <div className="w-full flex justify-center pr-20 pt-5 ">
                    <button className="bg-orange-300 px-10 py-3 rounded-2xl text-white">{loader ? <Loader2 className=" animate-spin" size={20} /> : "LogIn"}</button>
                    </div>
                    {message && <p>{message}</p>}
                </form>
                <div className="max-w-md">
                <img src="/tutor1.png" className="w-full h-full rounded-r-2xl object-cover"/>
            </div>
            </div>
            

        </div>
    )
}