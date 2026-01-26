"use client"

import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function TutorContentPage() {
  const { username } = useParams()

  const [datas, setDatas] = useState([])
  const [play, setPlay] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(null)
  const [visible, setVisible] = useState(false)

  // Hide title overlay after 5s
  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => setVisible(false), 5000)
    return () => clearTimeout(timer)
  }, [visible])

  // Fetch tutor content
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/tutorContent/${username}`,
          { withCredentials: true }
        )
        setDatas(res.data.findContent.contents)
        console.log(res.data.findContent.contents)
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    }
    fetchData()
  }, [username])

  return (
    <>
      {/* ================= LIST VIEW ================= */}
      {!play && (
        <section className="w-full bg-gradient-to-tr from-black via-gray-800 to-black px-4 sm:px-10 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {datas.map((video) => (
              <div
                key={video._id}
                onClick={() => {
                  setCurrentVideo(video)
                  setPlay(true)
                }}
                className="w-full bg-gray-300 cursor-pointer rounded-2xl p-3 hover:scale-[1.02] transition"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video rounded-2xl object-cover"
                />

                <div className="py-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold">{video.title}</h1>
                    <span className="px-3 py-1 bg-yellow-400 rounded-full text-sm">
                      Watch
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= VIDEO PLAYER ================= */}
      {play && currentVideo && (
        <section className="w-full px-6 md:px-16 py-20 bg-gradient-to-tr from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto">

            <div className="relative rounded-3xl overflow-hidden bg-black border border-gray-800 shadow-xl">
              <video
                src={currentVideo.video}
                className="w-full h-[40rem] object-contain"
                controls
                autoPlay
                onMouseMove={() => setVisible(true)}
              />

              {visible && (
                <div className="absolute top-0 left-0 w-full bg-black/50 p-4">
                  <h1 className="text-2xl font-bold text-pink-400">
                    {currentVideo.title}
                  </h1>
                </div>
              )}
            </div>

            <div className="mt-6">
              <p className="text-gray-300">
                {currentVideo.description}
              </p>

              <button
                onClick={() => {
                  setPlay(false)
                  setCurrentVideo(null)
                }}
                className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg"
              >
                ← Back to videos
              </button>
            </div>

          </div>
        </section>
      )}
    </>
  )
}
