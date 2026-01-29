"use client"
import { useEffect, useState } from "react";
import AccountTutor from "./AccountTutor";
import {motion} from "framer-motion"
import axios from "axios";

export default function AdminTutor({ChnageAcc}) {
    const [pro , setpro] = useState("Profile")
    const [tutoradmin , settuttoradmin] = useState({
      username:"",
      email:"",
      avatar:null

    })
    const [tutorpassword , settutorpasswword] = useState({
      oldpassword:"",
      newpassword:"",
    })

    const handleChanges = (e) => {
  const { name, value } = e.target
  settuttoradmin(prev => ({
    ...prev,
    [name]: value
  }))
}

   useEffect(() => {
  const fetchdata = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/tutoradmin",
        { withCredentials: true }
      )
      settuttoradmin(res.data.finduser)
      console.log(res.data.founduser)
    } catch (err) {
      console.log(err.response?.data?.message || err.message)

    }
  }

  fetchdata()
}, [])

const handlesubmit = async(e) => {
  e.preventDefault()

  const tutordatasend = new FormData()
  tutordatasend.append("username" , tutoradmin.username)
  tutordatasend.append("email" , tutoradmin.email)
  tutordatasend.append("avatar" , tutoradmin.avatar)
  try {
    const res = await axios.put("http://localhost:4000/api/tutorupdate" ,tutordatasend,{
      withCredentials:true
    })
    
  } catch (error) {
    console.log(error.response?.data?.message)
    
  }
}

  return (
    <motion.div initial={{x:30 , opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:0.5 ,}} className="w-full ">
      {/* PAGE CONTAINER */}
     

        {/* Main Content */}
       <main className="">
          <h1 className="w-full text-center text-white text-4xl font-bold mb-8">Profile Tutor</h1>

          {/* Profile Section */}
          <section className="">
            <form className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start mb-3 " onSubmit={handlesubmit}>
            <label htmlFor="tutorprofile">
            <img
              src={tutoradmin.avatar}
              alt="Tutor Profile"
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover ring-4 ring-yellow-400/50 shadow-lg"
            />
             <input type="file" id="tutorprofile" className="hidden" />
            </label>
           
            <div className="w-full flex flex-col gap-3 max-w-md">
              <div className="text-white">
                <label htmlFor="username" className="block mb-2 text-lg font-medium">Username</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  onChange={handleChanges}
                  value={tutoradmin.username}
                  className="w-full border border-white/50 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200"
                  placeholder="Enter username"
                />
              </div>
              <div className="text-white">
                <label htmlFor="email" className="block mb-2 text-lg font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  name='email'
                  onChange={handleChanges}
                  value={tutoradmin.email}
                  className="w-full border border-white/50 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200"
                  placeholder="Enter email"
                />
              </div>
              <div className="text-white">
                <label htmlFor="phone" className="block mb-2 text-lg font-medium">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full border border-white/50 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="w-full flex justify-start">
                <button type="submit" className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all duration-200 shadow-lg">
                  Save Changes
                </button>
              </div>
              
            </div>
             </form>
          </section>

          {/* Password Section */}
          <section className="w-full">
            <h2 className="text-white text-3xl font-bold mb-10">Change Your Password</h2>
            <form>
            <div className="flex flex-col sm:flex-row gap-6">
              
              <div className="w-full sm:max-w-sm text-white">
                
                <label htmlFor="old-password" className="block mb-2 text-lg font-medium">Old Password</label>
                <input
                  id="oldpassword"
                  type="password"
                  value={tutoradmin.oldpassword}
                  onChange={handleChanges}
                  className="w-full border border-white/50 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200"
                  placeholder="Enter old password"
                />
              </div>
              <div className="w-full sm:max-w-sm text-white">
                <label htmlFor="new-password" className="block mb-2 text-lg font-medium">New Password</label>
                <input
                  id="newpassword"
                  type="password"
                  value={tutoradmin.newpassword}
                  onChange={handleChanges}
                  name="password"
                  className="w-full border border-white/50 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200"
                  placeholder="Enter new password"
                />
              </div>
            </div>
            <div className="w-full flex justify-start mt-6">
              <button className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all duration-200 shadow-lg">
                Update Password
              </button>
              
              
            </div>
            
            </form>
          </section>
        </main>
      </motion.div>
    
  );
}