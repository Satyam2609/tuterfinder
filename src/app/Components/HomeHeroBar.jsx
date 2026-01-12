"use client";
import { TypeAnimation } from "react-type-animation";
import { motion , useScroll , useTransform} from "framer-motion";
import { useRef } from "react";

export default function HomeHero() {
  const logoBoxes = [0, 6, 12, 25, 38];
  const data = [
    {img:"tutor1.png" , title:"Roadmap to Success: Find Your Perfect Tuition" , description:"Choosing the right tuition is the first step toward academic excellence. This infographic highlights the four pillars of a great learning center: qualified faculty, personalized attention through small batches, comprehensive study resources, and a proven history of success. Make an informed choice for a brighter future."},
    {img:"tutor2.png" , title:"Roadmap to Success: Find Your Perfect Tuition" , description:"Choosing the right tuition is the first step toward academic excellence. This infographic highlights the four pillars of a great learning center: qualified faculty, personalized attention through small batches, comprehensive study resources, and a proven history of success. Make an informed choice for a brighter future."},
    {img:"tutor3.png" , title:"Roadmap to Success: Find Your Perfect Tuition" , description:"Choosing the right tuition is the first step toward academic excellence. This infographic highlights the four pillars of a great learning center: qualified faculty, personalized attention through small batches, comprehensive study resources, and a proven history of success. Make an informed choice for a brighter future."},
  ] 
 
  return (
    <div className="relative w-full">


      <div className="fixed inset-0 -z-10 overflow-hidden">

        {/* Background Image */}
        <img
          src="bookbg1.jpeg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 backdrop-blur-sm" />

        {/* Boxes Grid */}
        <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
          {[...Array(52)].map((_, i) => (
            <div
              key={i}
              className="border border-white/10 flex items-center justify-center aspect-square"
            >
              {logoBoxes.includes(i) && (
                <img
                  src="booklogo.png"
                  alt="logo"
                  className="w-6 sm:w-8 md:w-10 lg:w-12 opacity-80"
                />
              )}
            </div>
          ))}
        </div>

      </div>

      {/* HERO CONTENT */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
  <motion.h1
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white"
  >
    Tutor Finder
  </motion.h1>

  <TypeAnimation
    sequence={["Find the Right Tutor. Learn Better.", 2000]}
    speed={50}
    repeat={Infinity}
    className="mt-6 text-sm sm:text-lg md:text-2xl text-white/90"
  />
</section>

<section className="pt-8 pb-16 md:pt-12 md:pb-24 px-6 md:px-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <div className="w-full md:w-1/2">
      <img
        src="tutionfinder.png"
        alt="Tuition Finder"
        className="w-full max-h-[520px] rounded-2xl object-contain"
      />
    </div>

    <div className="w-full md:w-1/2">
      <h1 className="text-4xl font-bold text-white">
        TutorMatch – Find the Right Tutor
      </h1>
      <p className="mt-4 text-white text-lg leading-relaxed">
        Choosing the best tuition is not about popularity, low fees, or advertisements.
        The right tuition focuses on concept clarity, personal attention, and consistent
        improvement. A good teacher builds confidence, not pressure.
      </p>
    </div>
  </div>
</section>

     <section className="w-full px-4 md:px-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {data.map((card, i) => (
      <div
        key={i}
        className="bg-white p-3 rounded-2xl shadow-sm hover:shadow-md transition"
      >
        <div className="w-full aspect-[5/3] bg-gray-100 rounded-xl overflow-hidden">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4">
          <h1 className="text-lg font-semibold">{card.title}</h1>
          <p className="text-gray-400">{card.description.slice(0,100)}...</p>
        </div>
      </div>
      
    ))}
    
  </div>
</section>
 

    </div>
  );
}
