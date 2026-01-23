"use client"

import { useEffect, useState } from "react"

export default function VideoContent(){

    const [visible , setvisible] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setvisible(false)
        }, 5000);
    },[visible])
    const data = [
        {video:"/tutorcontent.mp4" , title:"kkefnkjednkjg" , Description:"akdfkwsfkwmkfwmfkmwkfmwf"}
    ]
    return(
       <section className="w-full px-6 md:px-16 py-20 bg-gradient-to-tr from-black via-gray-900 to-black">
  <div className="max-w-8xl mx-auto grid gap-12">
    {data.map((video, index) => (
      <div
        key={index}
        className="group rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-xl hover:shadow-pink-500/20 transition-all duration-300"
      >
        {/* Video Section */}
        <div className="relative">
          <video
          onMouseMove={() => setvisible(true)}
            src={video.video}
            className="w-full h-[40rem] object-contain transition-transform duration-300"
            autoPlay
            muted
            controls
          />

          {/* Title Overlay */}
          {visible && <div className="absolute top-0 bg-black/40 backdrop-blur-xs w-full p-4">
            <h1  className="text-2xl md:text-3xl font-bold text-pink-400 ">
              {video.title}
            </h1>
          </div>}
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8">
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            {video.Description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

    )
}