"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function AccountTutor() {
  const [account, setAccount] = useState("Account");
  const [datachange , setdatachange] = useState(false)
 const [dataform, setdataform] = useState({
  subjects: [],
  location: "",
  description: ""
});
const [qualification , setqulification] = useState(null)
const [visit , setvisit] = useState(null)

const handleChanges = (e) => {
  const {name , value} = e.target
 setdataform((prev) => ({...prev , [name]:value}))
}

useEffect(() => {
  const fetchdata = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/tutoradminaccount",
        { withCredentials: true }
      );

      const acc = res.data.findAccount;

      setdataform({
        subjects: Array.isArray(acc.subjects) ? acc.subjects : [],
        location: acc.location || "",
        description: acc.description || ""
      });
      console.log(res.data.findAccount.achievements)
      setqulification(res.data.findAccount.qualifications)
      setvisit(res.data.findAccount.achievements)

    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };

  fetchdata();
}, []);


  return ( 
    // OUTER WRAPPER — full screen height
    <div className="w-full  overflow-x-hidden">
      
      {/* PAGE CONTAINER — MUST have min-h-screen */}
      <div className="max-w-8xl">

        {/* (Optional Sidebar yahan aa sakta hai later) */}

        {/* RIGHT PANEL — FULL HEIGHT */}
        <main
          className="
            flex-1
            rounded-3xl
            px-6 sm:px-8 lg:px-12
            py-6
            flex flex-col
          "
        >
          {/* ================= TABS ================= */}
          <div className="flex gap-6 text-white mt-4 mb-8 overflow-x-auto">
            <button
              onClick={() => setAccount("Account")}
              className={`text-lg font-medium transition
                ${account === "Account" ? "text-yellow-400" : "hover:text-yellow-400"}`}
            >
              Account
            </button>

            <button
              onClick={() => setAccount("Qualification")}
              className={`text-lg font-medium transition
                ${account === "Qualification" ? "text-yellow-400" : "hover:text-yellow-400"}`}
            >
              Qualification
            </button>

            <button
              onClick={() => setAccount("Achievements")}
              className={`text-lg font-medium transition
                ${account === "Achievements" ? "text-yellow-400" : "hover:text-yellow-400"}`}
            >
              Achievements
            </button>
          </div>

          {/* ================= ACCOUNT ================= */}
          {account === "Account" && (
            <div className="flex flex-col gap-8 mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
                <div className="text-white">
                  <label className="block mb-2 text-lg">Subjects</label>
                  <input
  type="text"
  placeholder="Maths, Physics, Chemistry"
  value={dataform.subjects.join(", ")}
  onChange={(e) =>
    setdataform(prev => ({
      ...prev,
      subjects: e.target.value
        .split(",")
        .map(s => s.trim())
        .filter(Boolean)
    }))
  }
  className="w-full px-4 py-3 rounded-xl bg-white/10 border"
/>

                </div>

                <div className="text-white">
                  <label className="block mb-2 text-lg">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={dataform.location}
                    onChange={handleChanges}
                    placeholder="Enter location"
                    className="w-full px-4 py-3 rounded-xl
                               bg-white/10 border border-white/50
                               text-white outline-none
                               focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>

              <div className="max-w-4xl text-white">
                <label className="block mb-2 text-lg">Description</label>
                <textarea
                  rows={5}
                  name="description"
                  value={dataform.description}
                  onChange={handleChanges}
                  placeholder="Enter description"
                  className="w-full px-4 py-3 rounded-xl
                             bg-white/10 border border-white/50
                             text-white resize-none outline-none
                             focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <button
                className="w-fit px-6 py-3 rounded-xl
                           bg-yellow-400 text-black font-semibold
                           hover:bg-yellow-500 transition"
              >
                Save Changes
              </button>
            </div>
          )}

          {/* ================= QUALIFICATION ================= */}
          {account === "Qualification" &&( <div className="w-full">
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

      <label htmlFor="docfile" className="cursor-pointer flex justify-center">
        <img
          src="/tutor1.png"
          className="w-20 h-20 rounded-full object-cover"
        />
      </label>

      <input type="file" id="docfile" className="hidden" />

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
            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualification.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="rounded-2xl border border-white/20
                             bg-white/10 overflow-hidden"
                >
                  <img
                    src={card.tutor}
                    alt={card.title}
                    className="w-full h-44 object-cover"
                  />

                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-white">
                      {card.title}
                    </h2>
                    <p className="mt-2 text-sm text-white/70">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>)}

          {/* ================= ACHIEVEMENTS ================= */}
          {account === "Achievements" && (
            <div className="w-full">
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

      <label htmlFor="docfile" className="cursor-pointer flex justify-center">
        <img
          src="/tutor1.png"
          className="w-20 h-20 rounded-full object-cover"
        />
      </label>

      <input type="file" id="docfile" className="hidden" />

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
            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visit.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="rounded-2xl border border-white/20
                             bg-white/10 overflow-hidden"
                >
                  <img
                    src={card.tutor}
                    alt={card.title}
                    className="w-full h-44 object-cover"
                  />

                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-white">
                      {card.title}
                    </h2>
                    <p className="mt-2 text-sm text-white/70">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          )}
        </main>
      </div>
    </div>
  );
}
