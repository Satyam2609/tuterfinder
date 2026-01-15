"use client"

import axios from "axios"
import { useState } from "react"
import {motion} from "framer-motion"


export default function SignUp() {
    const [formdata , setformdata] = useState({
        username:"",
        email:"",
        password:"",
        role:"",
        location:"",
        subject:"",
        avatar:null
    })
    const [roles , setroles] = useState(false)
    const [Preview ,setPreview] = useState(null)

    const handleChanges = (e) => {
        const {name , value} = e.target
        setformdata(prev => ({...prev , [name]:value}))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const formdatasubmit = new FormData()
        formdatasubmit.append("username" , formdata.username)
        formdatasubmit.append("email" , formdata.email)
        formdatasubmit.append("password" , formdata.password)
        formdatasubmit.append("avatar" , formdata.avatar)
        formdatasubmit.append("location" , formdata.location)
        formdatasubmit.append("subject" , formdata.subject)
        formdatasubmit.append("role" , formdata.role)

        const res = await axios.post("http://localhost:4000/api/signUp" , formdatasubmit , {
        })
        setformdata({
          username:"",
          email:"",
          password:"",
          location:"",
          subject:"",
          role:""
        })
        setroles(false)
        console.log("user register successfully")
            
        } catch (err) {
            console.err("errror")
            
        }
    }
    return(
       <div
  className="min-h-screen w-full flex items-center justify-center bg-cover bg-center px-4"
  style={{ backgroundImage: "url('/bookbg.jpeg')" }}
>
  {/* overlay for readability */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* main card */}
  <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row rounded-2xl bg-white shadow-2xl overflow-hidden">

    {/* LEFT IMAGE */}
    <div className="w-full md:w-1/2 h-56 md:h-auto">
      <img
        src="/tutor1.png"
        className="h-full w-full object-cover"
        alt="Tutor"
      />
    </div>

    {/* RIGHT FORM */}
    {roles && <form onSubmit={handleSubmit} className="w-full md:w-1/2 flex flex-col gap-2 p-6 md:p-10 bg-white">
    <label className="w-full flex justify-end underline text-lg"><a href="/Register/login">SignIn</a></label>
      <h1 className="text-3xl text-center font-bold">
        Find Your Best Tutor
      </h1>
      <div className="w-full flex justify-center gap-10">
        <h1 className="text-sm mt-5">Profile pic</h1>
        <input
  type="file"
  id="profilavtar"
  className="hidden"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0]
    if (!file) return

    setformdata(prev => ({
      ...prev,
      avatar: file
    }))

    setPreview(URL.createObjectURL(file))
  }}
/>

        <label
  htmlFor="profilavtar"
  className="border-2 rounded-full h-24 w-24 flex items-center justify-center cursor-pointer overflow-hidden"
>
  {Preview ? (
    <img
      src={Preview}
      alt="avatar preview"
      className="h-full w-full object-cover rounded-full"
    />
  ) : (
    <span className="text-xs text-gray-500">Upload</span>
  )}
</label>
      </div>

      <div>
        <p className="text-sm font-medium">User Name</p>
        <input type="text" name="username" value={formdata.username} onChange={handleChanges} className="h-10 w-full rounded-xl border px-3" />
      </div>

      <div>
        <p className="text-sm font-medium">Email</p>
        <input type="email" name="email" value={formdata.email} onChange={handleChanges} className="h-10 w-full rounded-xl border px-3" />
      </div>

      <div>
        <p className="text-sm font-medium">Password</p>
        <input type="password" name="password" value={formdata.password} onChange={handleChanges} className="h-10 w-full rounded-xl border px-3" />
      </div>
      {formdata.role === "teacher" &&(
        <>
      <div>
        <p className="text-sm font-medium">Location</p>
        <input type="text" name="location" value={formdata.location} onChange={handleChanges} className="h-10 w-full rounded-xl border px-3" />
      </div> 
      <div>
        <p className="text-sm font-medium">Subject</p>
        <input type="text" name="subject" value={formdata.subject} onChange={handleChanges} className="h-10 w-full rounded-xl border px-3" />
      </div>
    </>
)}
      


      <button type="submit"  className="mt-4 mx-auto px-6 py-2 rounded-xl bg-amber-400 text-white font-semibold hover:bg-amber-500 transition">
        Submit
      </button>
    </form>
}
{
    !roles && <motion.div
  initial={{ x: 20, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  className="w-full md:w-1/2 flex flex-col justify-center gap-8 p-6 md:p-10 bg-white"

>
  <div className=" text-xl underline absolute top-10 flex gap-1">
    <h1>LogIn In Your Account</h1>
  <label className="text-blue-500 cursor-pointer" ><a href="/Register/login">SignIn</a></label>
  </div>
  <h1 className="text-3xl font-bold text-center">
    Enter your role
  </h1>
  

  {/* Role buttons */}
  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
    
    <button onClick={() => {setformdata(prev => ({...prev , role:"student"})) , setroles(true)}} className="h-12 px-10 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition">
      Student
    </button>

    <button onClick={() => {setformdata(prev => ({...prev , role:"teacher"})) , setroles(true)}} className="h-12 px-10 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition">
      Teacher
    </button>

  </div>
 
</motion.div>

}
  </div>
</div>

    )
}