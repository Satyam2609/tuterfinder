"use client"
import axios from 'axios';
import { Search ,Star} from 'lucide-react';
import { useState } from 'react';
import {motion} from "framer-motion"

export default function SearchTutor() {
  const [search , setsearch] = useState({
    subject:"",
    location:""
  })
  const [Searchdata , setSearchdata] = useState(null)
  const handleChanges = (e) => {
    const {name , value}  = e.target
    setsearch(prev => ({ ...prev , [name]:value}))

  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
     const res = await axios.get("http://localhost:4000/api/search", {
  params: {
    subject: search.subject,
    location: search.location
  },
  withCredentials: true
})
     setSearchdata(res.data.data)
     console.log(res.data.data)
     
      
      
    } catch (error) {
      console.log(error.response?.data?.message || "not find")
      
    }
  }
  return (
    <motion.section initial={{y:30 , opacity:0}} whileInView={{y:0 , opacity:1}} transition={{duration:0.6 , delay:0.5}} className="w-full bg-white py-10 md:py-14 mt-10">
      <div className="w-full  mx-auto px-4 md:px-14 rounded-3xl">
        {/* Heading */}
        <motion.div initial={{y:30 , opacity:0}}  whileInView={{y:0 , opacity:1}} transition={{duration:0.4 , delay:0.3}} className="text-start mb-12">
          <h1 className="text-2xl md:text-5xl font-extrabold text-gray-800">
            Find the <span className="text-amber-500">Best Tutor</span> in Your City
          </h1>
          <p className="mt-4 text-gray-500 text-lg md:text-xl">
            Search coaching classes, home tutors & institutes near you
          </p>
        </motion.div>

        {/* Search Box */}
        <form onSubmit={handleSubmit}>
  <div className="w-full flex flex-col md:flex-row gap-6 mb-10">

    {/* SUBJECT */}
    <div className="w-full md:w-1/2">
      <label className="block mb-2 text-sm font-medium">Subject</label>
      <motion.div initial={{x:-30 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.4 , delay:0.5}} className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          name="subject"
          value={search.subject}
          onChange={handleChanges}
          placeholder="Maths, Physics, Chemistry"
          className="w-full h-14 pl-12 pr-4 border rounded-full focus:ring-2 focus:ring-amber-400"
        />
      </motion.div>
    </div>

    {/* LOCATION */}
    <div className="w-full md:w-1/2">
      <label className="block mb-2 text-sm font-medium">Location</label>
      <motion.div initial={{x:30 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.4 , delay:0.5}} className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          name="location"
          value={search.location}
          onChange={handleChanges}
          placeholder="Delhi, Mumbai"
          className="w-full h-14 pl-12 pr-4 border rounded-full focus:ring-2 focus:ring-amber-400"
        />
      </motion.div>
    </div>

  </div>

  <div className="flex justify-center">
    <motion.button initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5 , delay:0.9}} className="px-12 py-3 rounded-full bg-yellow-400 font-semibold">
      Search
    </motion.button>
  </div>
</form>

        


       {
        
        Searchdata ? <div className=" flex overflow-x-auto  mt-10">
          <label className='cursor-pointer' onClick={() => setSearchdata(null)}>Back</label>
  {Searchdata.map((cards, index) => (
    <motion.div initial={{y:60 , opacity:0}} animate={{y:0 , opacity:1}}  transition={{duration:0.9 , delay:index * 0.2}} key={index} className="px-2 mt-10 w-full shrink-0 max-w-sm">
      <div className="bg-white rounded-2xl  shadow-md hover:shadow-xl transition duration-300 overflow-hidden border">

        {/* Image */}
        <div className="w-full h-55 overflow-hidden">
          <img
            src={cards.avatar}
            alt={cards.username}
            className="w-full h-full object-cover transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <div className='flex justify-between'>
          <h1 className="text-lg font-semibold text-gray-800 truncate">
            {cards.username}
          </h1>
          <div className='flex gap-1'>{
            [1,2,3,4,5].map((start) => (
              <Star key={start} className='' size={20}/>

            ))
            }
            </div>
            </div>

          <p className="text-sm text-gray-600 line-clamp-2">
            {cards.email || "No description available"}
          </p>

          {/* Tags / Extra Info */}
          <div className=" mt-3">
              <p>Subject</p>
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
              {cards.subject}
            </span>
          </div>

          {/* Button */}
          <button className="mt-4 w-full py-2 text-sm font-medium rounded-lg bg-black text-white hover:bg-gray-800 transition">
            View Profile
          </button>
        </div>

      </div>
    </motion.div>
  ))}
</div>
 :  
        <motion.div initial={{y:50 , opacity:0}} whileInView={{y:0 , opacity:1}} transition={{duration:0.4 , delay:0.5}} className="flex flex-col md:flex-row justify-center md:space-x-10 space-y-10 md:space-y-0 items-center">
          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col py-15 md:py-32 text-center md:text-left">
            <span className="text-lg md:text-2xl text-gray-800">
              Discover the perfect tutor
            </span>
            <p className="font-bold text-yellow-400 text-3xl md:text-6xl mt-2">
              for your learning needs, at the time that suits you best – trusted,
            </p>
            <span className="text-lg md:text-2xl text-gray-800 mt-2">
              convenient, and completely hassle-free!
            </span>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 max-w-md">
            <img
              src="/tutor3.png"
              className="object-cover rounded-2xl w-full shadow-xl"
              alt="Tutor Illustration"
            />
          </div>
        </motion.div>
       }
      </div>
    </motion.section>
  );
}
