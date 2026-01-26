"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/app/AuthProvider";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function TutorProfiles() {
  const { username } = useParams();
  const [tutor, setTutor] = useState(null);
  const {settuttordata} = useAuth()
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    if (!username) return;

    const fetchTutor = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/test/${username}`
        );
        setTutor(res.data.tutor);
        settuttordata(res.data.tutor.achievements)
        
        

        
      } catch (err) {
        console.error(err.response?.data?.message || "Error fetching tutor");
      } finally {
        setLoading(false);
      }
    };

    fetchTutor();
  }, [username]);

  const route = () => {
    router.push("/ViewContent")
  }

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  if (!tutor) {
    return <p className="text-center text-red-500">Tutor not found</p>;
  }

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full"
    >
      <div className="w-full flex flex-col md:flex-row gap-6 px-4 md:px-10 pt-28 py-12">
        {/* Image */}
        <motion.div
          variants={fadeLeft}
          whileHover={{ scale: 1 }}
          className="rounded-2xl overflow-hidden shadow-2xl shadow-black"
        >
          <img
            src={tutor.avatar}
            alt={tutor.username}
            className="w-full sm:w-[20rem] md:w-[33rem]  h-auto sm:h-[20rem] md:h-[24rem] object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeRight}
          className="flex flex-col gap-5 text-white w-full"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="flex justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                {tutor.username}
              </h1>
              <p className="text-gray-300">{tutor.email}</p>
            </div>

           <Link href={`/ViewContent/${tutor.username}`}> <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              
              className="px-5 py-3 rounded-2xl bg-yellow-400 text-black font-bold"
            >
              View Content
            </motion.button>
            </Link>
          </motion.div>

          {/* Subjects */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold">Subjects</h2>
            <ul className="flex flex-wrap gap-3 py-4">
              {tutor.subjects.map((subject, index) => (
                <li
                  key={index}
                  className="bg-amber-300 text-black px-4 py-2 rounded-2xl font-bold"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Description */}
          <motion.p variants={fadeUp} className="text-gray-200">
            {tutor.description}
          </motion.p>

          {/* Location */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold">Location</h2>
            <p className="text-gray-300">{tutor.location}</p>
          </motion.div>

          {/* Rating (safe fallback) */}
          <motion.div variants={fadeUp}>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={
                    i < (tutor.rating || 0)
                      ? "text-yellow-400"
                      : "text-gray-600"
                  }
                />
              ))}
            </div>
            <p className="text-sm text-gray-300 mt-1">
              Rating: {tutor.rating || 0}/5
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
