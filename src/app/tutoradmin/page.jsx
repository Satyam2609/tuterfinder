"use client";
import { useState } from "react";
import AccountTutor from "./AccountTutor";
import AdminTutor from "./AdminTutor";
import Content from "./Content";
import ViewsAnalytics from "./ViewsAnalytics";

export default function TutorAdmin() {
  const [page, setPage] = useState("Profile");

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-8xl mx-auto min-h-screen flex flex-col lg:flex-row gap-6 px-4 sm:px-6 py-6">

        {/* ================= SIDEBAR ================= */}
        <aside
          className="w-full lg:w-80 bg-white/10 backdrop-blur-lg
          rounded-3xl p-6 flex flex-col items-center gap-6
          border border-white/20 shadow-2xl"
        >
          <img
            src="/tutor1.png"
            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32
            rounded-full object-cover ring-4 ring-yellow-400/50"
          />

          {/* NAV */}
          <nav
            className="flex lg:flex-col gap-6 lg:gap-12 mt-0 md:mt-10
            text-white text-sm sm:text-base
            overflow-x-auto lg:overflow-visible
            w-full justify-center lg:items-center"
          >
            {[
              "Profile",
              "Account",
              "Content",
              "Analytic",
              "Settings",
              "Logout"
            ].map((item) => (
              <button
                key={item}
                onClick={() => setPage(item)}
                className={`whitespace-nowrap transition
                ${
                  page === item
                    ? "text-yellow-400 font-semibold"
                    : "hover:text-yellow-400"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* ================= RIGHT PANEL ================= */}
        <main
          className="flex-1 bg-white/10 backdrop-blur-lg rounded-3xl
          px-4 sm:px-6 lg:px-10 py-6 shadow-2xl border border-white/20"
        >
          {page === "Profile" && <AdminTutor />}
          {page === "Account" && <AccountTutor />}
          {page === "Content" && <Content />}
          {page === "Analytic" && <ViewsAnalytics />}
        </main>
      </div>
    </div>
  );
}
