"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useAuth } from "../AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomeHero() {

  const data = [
    {
      img: "tutor1.png",
      title: "Roadmap to Success: Find Your Perfect Tuition",
      description:
        "Choosing the right tuition is the first step toward academic excellence. This infographic highlights the four pillars of a great learning center: qualified faculty, personalized attention through small batches, comprehensive study resources, and a proven history of success. Make an informed choice for a brighter future.",
    },
    {
      img: "tutor2.png",
      title: "Roadmap to Success: Find Your Perfect Tuition",
      description:
        "Choosing the right tuition is the first step toward academic excellence. This infographic highlights the four pillars of a great learning center: qualified faculty, personalized attention through small batches, comprehensive study resources, and a proven history of success. Make an informed choice for a brighter future.",
    },
    {
      img: "tutor3.png",
      title: "Roadmap to Success: Find Your Perfect Tuition",
      description:
        "Choosing the right tuition is the first step toward academic excellence. This infographic highlights the four pillars of a great learning center: qualified faculty, personalized attention through small batches, comprehensive study resources, and a proven history of success. Make an informed choice for a brighter future.",
    },
  ];

  return (
    <div className="relative w-full  text-white" >

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div
    className="
      absolute inset-0
      bg-[url('/image.png')]
      bg-cover bg-center
      opacity-40
    "
  />

  {/* DARK OVERLAY (OPTIONAL BUT RECOMMENDED) */}
  <div className="absolute  bottom-0 bg h-10 bg-gradient-to-bl from-black via-gray-800 to-black opacity-15 w-full " />
  <div className="absolute  bottom-0 bg h-10 bg-gradient-to-bl from-black via-gray-800 to-black opacity-15 w-full " />
  <div className="absolute  bottom-0 bg h-10 bg-gradient-to-bl from-black via-gray-800 to-black opacity-15 w-full " />

  {/* CONTENT */}
  <motion.h1
    initial={{ y: 20, scale: 1.3, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 0.9 }}
    className="relative z-10 text-4xl sm:text-6xl md:text-9xl font-extrabold text-white"
  
  >
    Tutor Finder
  </motion.h1>

  <TypeAnimation
    sequence={["Find the Right Tutor. Learn Better.", 2000]}
    speed={50}
    repeat={Infinity}
    className="relative z-10 mt-6 text-sm sm:text-lg md:text-2xl text-white/90"
  />

</section>

      {/* IMAGE + TEXT SECTION */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 px-6 md:px-16">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <motion.img
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              src="tutionfinder.png"
              alt="Tuition Finder"
              className="w-full max-h-[520px] shadow-xl shadow-black rounded-2xl object-contain"
            />
          </div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="w-full md:w-1/2"
          >
            <h1 className="text-4xl flex font-bold">
              TutorMatch – <p className="text-yellow-500">Find the Right Tutor</p>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              Choosing the best tuition is not about popularity, low fees, or advertisements.
              The right tuition focuses on concept clarity, personal attention, and consistent
              improvement. A good teacher builds confidence, not pressure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="w-full px-4 md:px-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((card, i) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              key={i}
              className="bg-white/20  backdrop-blur-md border border-white/40 rounded-2xl p-3 shadow-2xl shadow-black  transition"
            >
              <div className="w-full aspect-[5/3] rounded-xl overflow-hidden border border-white/10">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h1 className="text-lg font-semibold">
                  {card.title}
                </h1>
                <p className="text-white/70 mt-2">{card.description.slice(0, 100)}...</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
