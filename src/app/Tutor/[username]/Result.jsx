'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Result() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const data = [
    { year: "2020", Class: "10th", result: "85%", img: "https://i.pravatar.cc/300?img=11" },
    { year: "2021", Class: "11th", result: "78%", img: "https://i.pravatar.cc/300?img=22" },
    { year: "2022", Class: "12th", result: "88%", img: "https://i.pravatar.cc/300?img=33" },
    { year: "2023", Class: "BCA 1st Year", result: "8.2 CGPA", img: "https://i.pravatar.cc/300?img=44" },
    { year: "2024", Class: "BCA 2nd Year", result: "8.6 CGPA", img: "https://i.pravatar.cc/300?img=55" },
  ];

  return (
    <section ref={ref} className="w-full px-6 md:px-16 py-32">
      {/* wrapper ALWAYS center */}
      <div className="flex flex-col items-center space-y-2">
        {data.map((result, index) => {
          const isLeft = index % 2 !== 0;

          // 🔥 start me side, scroll pe center
          const x = useTransform(
            scrollYProgress,
            [0, 1],
            isLeft ? [0, -430] : [0, 440]
          );

          const opacity = useTransform(scrollYProgress, [0, 0], [0, 1]);

          return (
            <motion.div
              key={index}
              style={{ x, opacity }}
              className="
                w-full max-w-lg
                bg-white/10 backdrop-blur-md
                border border-white/20
                rounded-2xl overflow-hidden
                shadow-xl
              "
            >
              <div className="w-full h-98 overflow-hidden">
                <img
                  src={result.img}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div className="p-5">
                <ul className="text-white space-y-2">
                  <li className="text-sm text-gray-400">Year: {result.year}</li>
                  <li className="text-lg font-semibold">{result.Class}</li>
                  <li className="text-sm text-green-400">
                    Result: {result.result}
                  </li>
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
