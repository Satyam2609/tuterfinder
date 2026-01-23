"use client"
import { useState } from "react";
import { motion } from "framer-motion"; // animation ke liye

export default function Comments() {
  const [commentList, setCommentList] = useState([
    { comment: "Hello, coaching ka environment accha tha!" },
    { comment: "Methods thode outdated lage, par overall fine." },
    { comment: "More interactive sessions chahiye." },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setCommentList([...commentList, { comment: newComment }]);
      setNewComment("");
    }
  };

  return (
    <section className="w-full py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left side label */}
        <motion.div initial={{x:-20 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5 , delay:1}} className="flex flex-col flex-shrink-0 max-w-xl">
          <h3 className="font-bold text-4xl text-gray-200 mb-4">
            Your Feedback
          </h3>
          <p className="text-gray-300 text-base">
            Hum sach mein tumhari raay chahte hain! Yaha batao ki coaching ka environment kaisa laga, kaunse methods tumhe pasand aaye, kaunse cheeze improve ho sakti hain, aur jo bhi honestly share karna chaaho. Har feedback se hum aur behtar bana sakte hain. 
          </p>
        </motion.div>

        {/* Right side textarea & comments */}
        <div className="flex flex-col w-full gap-4">
          <motion.textarea initial={{x:20 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5}}
            placeholder="Type your comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="p-4 border border-gray-400 rounded-2xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:bg-white/20"
            rows={5}
          />
          <button
            onClick={handleAddComment}
            className="self-end px-6 py-2 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-600 transition-all duration-300"
          >
            Submit
          </button>

          <div className="flex flex-col gap-4 mt-4">
            {commentList.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-gray-200 flex flex-col"
              >
                {msg.comment}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
