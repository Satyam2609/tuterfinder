"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      title: "Improved Board Results",
      desc: "Helped students boost scores using concept-first and exam-oriented teaching.",
      subject: "Physics & Maths",
      classLevel: "Class 10–12",
      students: "20+ Students",
      result: "25–30% average score improvement",
    },
    {
      title: "Strong Concept Building",
      desc: "Simplified complex topics using numericals, PYQs, and real-life examples.",
      subject: "Physics",
      classLevel: "Class 11–12",
      students: "15+ Students",
      result: "Higher confidence & accuracy",
    },
    {
      title: "Exam-Oriented Teaching",
      desc: "Designed board-focused tests and revision strategies to reduce mistakes.",
      subject: "Maths",
      classLevel: "Class 10 & 12",
      students: "18+ Students",
      result: "90% students showed improvement",
    },
  ];

  return (
    <section className="w-full py-20  perspective-[1200px]">
      <h1 className="text-white text-4xl text-center mb-16 font-bold">
        Achievements
      </h1>

      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, rotateX: 90, y: 80 }}
            whileInView={{ opacity: 1, rotateX: -20, rotateY: 20, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.25 }}
            whileHover={{
              rotateY: 0,
              rotateX: 0,
              scale: 1.05,
            }}
            className="bg-white/40
                       rounded-2xl p-8 text-white shadow-2xl shadow-black
                       transform-style-preserve-3d"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {item.title}
            </h2>

            <p className="text-zinc-400 mb-4">
              {item.desc}
            </p>

            <div className="text-sm text-zinc-300 space-y-1">
              <p><span className="text-zinc-500">Subject:</span> {item.subject}</p>
              <p><span className="text-zinc-500">Class:</span> {item.classLevel}</p>
              <p><span className="text-zinc-500">Students:</span> {item.students}</p>
              <p><span className="text-zinc-500">Result:</span> {item.result}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
