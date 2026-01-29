import axios from "axios"
import { useEffect, useState } from "react"

export default function Content(){
    const [datachange , setdatachange] = useState(false)
    const [tutorcontent , settutorcontent] = useState([])

    useEffect(() => {
      const fetchdata = async() => {
        try {
          const res = await axios.get("http://localhost:4000/api/tutorcontent" , {
            withCredentials:true
          })
          settutorcontent(res.data.findcontent.contents)
          console.log(res.data.findcontent.contents)
          
        } catch (error) {
          console.log(error.response?.data?.message)
        }
      }
      fetchdata()
    },[])
    return(
        <>
        <div className="w-full text-white text-2xl flex justify-end">
              <button className="bg-yellow-400 px-5 py-2 rounded-2xl" onClick={() => setdatachange(true)}>New</button>
            </div>
            {datachange &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    
    {/* POPUP BOX */}
    <div className="relative w-[400px] bg-white rounded-2xl px-10 py-10 flex flex-col gap-6">

      {/* Close Button */}
      <button
        onClick={() => setdatachange(false)}
        className="absolute top-4 right-4 text-xl font-bold"
      >
        ✕
      </button>

      

      

      <input
        type="text"
        placeholder="Enter name"
        className="border-2 border-black rounded-xl px-4 py-2"
      />

      <textarea
        placeholder="Enter description"
        className="border-2 border-black rounded-xl px-4 py-2 resize-none"
        rows={4}
      />

      <button className="bg-black text-white py-2 rounded-xl">
        Submit
      </button>
    </div>
  </div>
            }
        <div> </div>
        <main className="grid grid-cols-1 mt-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {tutorcontent.map((item, index) => (
    <div
      key={index}
      className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden  transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-full w-full object-cover  transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 text-white">
        <h1 className="text-lg font-semibold leading-tight">
          {item.title}
        </h1>

        <p className="text-sm text-gray-300 line-clamp-3">
          {item.description}
        </p>

        <button className="mt-3 self-start px-4 py-2 text-sm rounded-xl bg-white text-black font-medium hover:bg-gray-200">
          Watch Now
        </button>
      </div>
    </div>
  ))}
</main>
</>

    )
}