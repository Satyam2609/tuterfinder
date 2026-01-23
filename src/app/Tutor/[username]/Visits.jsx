'use client'
import { useAuth } from "@/app/AuthProvider"
import { motion } from "framer-motion"
export default function Visits(){
  const {tutordata} = useAuth()
  console.log("sfff" , tutordata)
   const data = [
  {
    img: "/tutor1.png",
    title: "Classroom Learning Environment",
    desc: "Demo visit ke dauraan students classroom ka real setup dekh sakte hain jahan proper seating arrangement, clean space aur board-based teaching hoti hai. Isse students ko clear idea milta hai ki daily classes kis tarah conduct hoti hain, noise level kaisa rehta hai aur focus ke liye environment kitna suitable hai."
  },
  
]


    return(
        <section className="w-full">
            <div className="py-10 px-5 md:px-10 flex flex-col gap-3">
  {tutordata.map((item, index) => {
    const isReverse = index % 2 !== 0

    return (
      <motion.div
      initial={{y:30 , opacity:0}}
      whileInView={{y:0 , opacity:1}}
      transition={{duration:0.6 , delay:index * 0.3}}
        key={index}
        className={`flex flex-col md:flex-row ${
          isReverse ? "md:flex-row-reverse" : ""
        } items-center gap-10 text-white`}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full max-w-lg rounded-2xl object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:max-w-4xl flex flex-col justify-center gap-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            {item.title}
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-200">
            {item.description}
          </p>
        </div>
      </motion.div>
    )
  })}
</div>

        </section>
    )
}