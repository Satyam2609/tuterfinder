export default function ProfilePage() {
  return (
    <section className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-black px-6 py-20 text-white">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-10  text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Account Settings
        </h1>
        <p className="text-gray-400 mt-2 w-full">
          Update your personal information and manage account security.
        </p>
      </div>

      {/* MAIN CARD */}
      <div className="max-w-7xl mt-6 mx-auto rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-3">

          {/* SIDEBAR */}
          <aside className="md:col-span-1 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/10 mb-4">
              <img
                src="/tutor1.png"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-lg font-semibold mt-2">Satyam Jain</h2>
            <span className="text-xs text-gray-400 mt-1">Tutor Account</span>

            <nav className="mt-8 w-full space-y-5 text-md">
              {["Account", "Profile", "Security", "Notifications"].map(
                (item, i) => (
                  <div
                    key={item}
                    className={`px-3 py-2 rounded-xl cursor-pointer transition
                      ${
                        i === 0
                          ? "bg-white/15 text-white"
                          : "text-gray-400 hover:bg-white/10 hover:text-white"
                      }`}
                  >
                    {item}
                  </div>
                )
              )}
            </nav>
          </aside>

          {/* FORM PANEL */}
          <main className="md:col-span-2 p-6 md:p-10">
            <h3 className="text-2xl font-semibold mb-1">Profile Information</h3>
            <p className="text-sm text-gray-400 mb-6">
              This information will be visible on your public profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
              <div>
                <label className="text-xs uppercase tracking-wide text-gray-400">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="your_username"
                  className="mt-2 w-full bg-white/5 rounded-xl px-3 py-2 border border-white/10 focus:border-white/30 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wide text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="mt-2 w-full bg-white/5 rounded-xl px-3 py-2 border border-white/10 focus:border-white/30 focus:outline-none transition"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-wide text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 w-full bg-white/5 rounded-xl px-3 py-2 border border-white/10 focus:border-white/30 focus:outline-none transition"
                />
              </div>
            </div>

            <div className="mt-10 flex justify-center ">
              <button className=" h-10 w-10 bg-yellow-400 p-2 rounded-2xl">
                Save Changes
              </button>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
