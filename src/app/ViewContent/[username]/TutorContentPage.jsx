'use client'

import axios from "axios"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function TutorContentPage(){
  const router = useRouter()
  const [datas , setdata] = useState([])
  const {username} = useParams()

  useEffect(() => {
    const fetchdata = async() => {
      try {
        const res = await axios.get(`http://localhost:4000/api/tutorContent/${username}` , {
          withCredentials:true
        })


        setdata(res.data.findContent.contents)
        console.log(res.data.findContent.contents)

        
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    }
    fetchdata()
  }, [])

 
    const data = [
  {
    thumbnail:"/tutor1.png",
    video: "/tutorcontent",
    title: "Differentiation",
    description:
      "Learn the concept of differentiation from basics to advanced level. Covers limits, derivatives, rules of differentiation, and real-life applications like rate of change and slope."
  },
  {
    thumbnail:"/tutor1.png",
    video: "/tutorcontent1",
    title: "Integration",
    description:
      "Understand integration as the reverse of differentiation. Includes standard integrals, methods of integration, definite and indefinite integrals, and area under curves."
  },
  {
    thumbnail:"/tutor1.png",
    video: "/aiintegration",
    title: "Probability",
    description:
      "Master probability concepts including sample space, events, conditional probability, Bayes’ theorem, and real-world problem solving for competitive exams."
  },
   {
    thumbnail:"/tutor1.png",
    video: "/aiintegration",
    title: "Probability",
    description:
      "Master probability concepts including sample space, events, conditional probability, Bayes’ theorem, and real-world problem solving for competitive exams."
  },
    ]
    return(
        <section className="w-full bg-gradient-to-tr from-black via-gray-800 to-black px-4 sm:px-10 py-23">
            
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full">
    {datas.map((video) => (
     
      <div
        key={video._id}
        className="w-full  bg-gray-300 shadow-2xl shadow-black cursor-pointer rounded-2xl p-3 flex flex-col"
      > 
      <Link href={`/ViewContent/${video._id}`}>
        <img
          src={video.thumbnail}
          className="w-full aspect-video rounded-2xl object-cover"
        />

        <div className=" py-3 space-y-2">
            <div className="flex justify-between">
          <h1 className="text-md sm:text-xs md:text-xl font-bold">
            {video.title}
          </h1>
          <p className="p-2 hover:text-white cursor-pointer  bg-yellow-400 rounded-2xl text-white/70 ">Watch Now</p>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            {video.description}
          </p>
        </div>
        </Link>
      </div>
      
    ))}
  </div>
</section>

    )
}