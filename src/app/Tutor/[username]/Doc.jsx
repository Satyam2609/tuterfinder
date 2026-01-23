"use client"
import {motion} from "framer-motion"
export default function Doc(){
    const data = [
  {
    title: "12th Pass",
    desc: "Completed Senior Secondary (12th) with focus on Mathematics and Computer Science. Built basic programming logic and problem-solving skills.",
    img: "/12th.png",
  },

]

    return(
        <section className="w-full px-4">
            <h1 className="w-full text-center text-3xl text-white font-bold">Qualifications</h1>
            <div className="flex justify-center gap-6 px-4 py-6 overflow-x-auto">
  {data.map((card, index) => (
    <motion.div
    initial={{y:30 , opacity:0}} whileInView={{y:0 , opacity:1}} transition={{duration:0.6 , delay:index * 0.6}}
      key={index}
      className="
        flex-shrink-0
        w-[310px] md:w-[480px]
        rounded-2xl
        border border-white/20
        bg-white/10
        backdrop-blur-sm
      "
    >
      {/* Image */}
      <div className="w-full h-[250px] md:h-[350px] overflow-hidden rounded-t-2xl">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h1 className="text-lg font-semibold text-white leading-tight">
          {card.title}
        </h1>

        <p className="mt-2 text-sm text-white/70 leading-relaxed">
          {card.desc}
        </p>
      </div>
    </motion.div>
  ))}
</div>

        </section>
    )
}