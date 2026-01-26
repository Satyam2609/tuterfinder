"use client"
import axios from 'axios';
import { Search, Star } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export default function SearchTutor() {
  const [search, setsearch] = useState({ subject: "", location: "" });
  const [Searchdata, setSearchdata] = useState(null);
  const router = useRouter();

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setsearch(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:4000/api/search", {
        params: search,
        withCredentials: true
      });
      setSearchdata(res.data.data);
      console.log(res.data.data)
    } catch (err) {
      console.log("Not found");
    }
  };

  return (
    <section className="w-full  text-white py-14 ">
      <div className="max-w-8xl mx-auto px-6 md:px-20">

        {/* Heading */}
        <motion.div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">
            Find the <span className="text-yellow-400">Right Tutor</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            Search tutors by subject & location — no noise, only quality
          </p>
        </motion.div>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="">
          <div className='flex flex-col md:flex-row gap-6'>
          <div className="w-full ">
            <label className="text-sm text-white/70">Subject</label>
            <div className="relative mt-2">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400" />
              <input
                name="subject"
                value={search.subject}
                onChange={handleChanges}
                placeholder="Maths, Physics"
                className="w-full h-14 pl-12 bg-transparent border border-white/20 rounded-full focus:outline-none focus:border-yellow-400"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="text-sm text-white/70">Location</label>
            <div className="relative mt-2">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400" />
              <input
                name="location"
                value={search.location}
                onChange={handleChanges}
                placeholder="Delhi, Mumbai"
                className="w-full h-14 pl-12 text-black border border-white/20 bg-white/30 rounded-full focus:outline-none focus:border-yellow-400"
              />
            </div>
          </div>
          </div>
        

        <div className="flex justify-center mt-10">
          <button className="px-12 py-3 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition">
            Search Tutor
          </button>
        </div>
        </form>

        {/* RESULTS */}
        {Searchdata && (
          <div className="flex overflow-x-auto  gap-6 mt-14">
            {Searchdata.map((card, i) => (
              <motion.div
                key={i}
                className="min-w-[300px] border border-white/20 rounded-2xl p-4"
              >
                <img
                  src={card.avatar}
                  className="w-full h-48 object-cover rounded-xl border border-white/10"
                />

                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">{card.username}</h2>
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map(i => <Star key={i} size={16} />)}
                    </div>
                  </div>

                  <p className="text-sm text-white/60 mt-2">
                    {card.email}
                  </p>

                  <span className="inline-block mt-3 px-3 py-1 text-xs border border-yellow-400 text-yellow-400 rounded-full">
                   {card.subjects.map((subject) => (
                    <p key={subject._id}>{subject}</p>
                   ))}
                  </span>

                  <button
                    onClick={() => router.push(`/Tutor/${card.username}`)}
                    
                    className="mt-4 w-full py-2 border border-white/20 rounded-lg hover:border-yellow-400 transition"
                  >
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* EMPTY STATE */}
        {!Searchdata && (
          <div className="mt-20 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold">
                Learn smarter with
                <span className="text-yellow-400 underline"> verified tutors</span>
              </h2>
              <p className="mt-4 text-white/70">
                No ads. No random listings. Only tutors that match your needs.
              </p>
            </div>

            <img
              src="/tutor3.png"
              className="w-full md:max-w-md rounded-2xl border border-white/10"
            />
          </div>
        )}

      </div>
    </section>
  );
}
