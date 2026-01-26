"use client"
import { useState , useEffect } from "react";
import { motion } from "framer-motion"; // animation ke liye
import axios from "axios";
import { useAuth } from "@/app/AuthProvider";
import { useParams } from "next/navigation";

export default function Comments() {
    
  const [sendComment , setsendComment] = useState({
    TypeComment:""
  })
  const {username} = useParams()
  const [commentuser, setcommentuser] = useState([]);
  const [page, setPage] = useState(0);
const limit = 3;

const start = page * limit;
const end = start + limit;


useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/tutorContent/${username}`,
        { withCredentials: true }
      );


      setcommentuser(res.data.findContent.comment);
      console.log('fwfwffg',res.data.findContent.comment)

    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  fetchData();
}, [username , commentuser]);


  const handleChanges = (e) => {
    const {name , value} = e.target
    setsendComment((prev) => ({...prev , [name]:value}))
  }

 

  

 const handlesubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      "http://localhost:4000/api/comment",
      {
        username,
        TypeComment: sendComment.TypeComment
      },
      { withCredentials: true }
    );

    setsendComment({ TypeComment: "" });
    console.log("comment sent");
  } catch (error) {
    console.log(error.response?.data?.message);
  }
};

  return (
    <section className="w-full py-10 px-6 md:px-20">
      
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full flex flex-col gap-10">
        {/* Left side label */}
        <motion.div initial={{x:-20 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5 , delay:1}} className="flex flex-col flex-shrink-0 max-w-xl">
          <h3 className="font-bold text-4xl text-gray-200 mb-4">
            Your Feedback
          </h3>
          <p className="text-gray-300 w-full text-base">
            Hum sach mein tumhari raay chahte hain! Yaha batao ki coaching ka environment kaisa laga, kaunse methods tumhe pasand aaye, kaunse cheeze improve ho sakti hain, aur jo bhi honestly share karna chaaho. Har feedback se hum aur behtar bana sakte hain. 
          </p>
        </motion.div>
        <div className="w-full max-w-xl mt-20  flex gap-10 justify-start items-center">
  <button
    disabled={page === 0}
    onClick={() => setPage(prev => prev - 1)}
    className="px-10 py-3 rounded-2xl bg-white/10 border text-xl text-white border-white/20 disabled:opacity-40"
  >
    Prev
  </button>

  <button
    disabled={end >= commentuser.length}
    onClick={() => setPage(prev => prev + 1)}
    className="px-10 py-3 rounded-2xl bg-white/10 border border-white/20 text-xl text-white shadow-lg hover:shadow-xl shadow-black disabled:opacity-40"
  >
    Next
  </button>
</div>
</div>

        {/* Right side textarea & comments */}
        <div className="flex flex-col w-full gap-4">
          <form onSubmit={handlesubmit} className="w-full">
          <motion.textarea initial={{x:20 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5}}
            placeholder="Type your comment here..."
            value={sendComment.TypeComment}
            name="TypeComment"
            onChange={handleChanges}
            className="p-4 border w-full shadow-lg shadow-black border-gray-400 rounded-2xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:bg-white/20"
            rows={5}
          />
          <button
            type="submit"
            className="self-end mt-4 px-6 py-2 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-600 transition-all duration-300"
          >
            Submit
          </button>
          </form>

         <div className="w-full flex flex-col items-center">

  {/* Pagination Buttons */}



  {/* Comments */}
  <div className="flex flex-col gap-4 w-full max-w-xl">
    {commentuser?.slice(start, end).map((msg, index) => (
      <motion.div
        key={msg._id || index}   // index avoid kar, but fallback ok
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="w-full p-4 rounded-2xl shadow-lg shadow-black bg-white/10 backdrop-blur-md border border-white/20  text-gray-200"
      >
        {msg.text}
      </motion.div>
    ))}
  </div>

</div>


        </div>
      </div>
    </section>
  );
}
