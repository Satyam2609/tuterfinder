"use client";
import Link from "next/link";
import { useAuth } from "../AuthProvider";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user } = useAuth() || {};
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.put(
        "http://localhost:4000/api/logout",
        {},
        { withCredentials: true }
      );
      router.push("/Register");
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-9xl backdrop-blur-xs bg-white/30 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center px-4 md:px-10 py-3">
        {/* Logo */}
        <h1 className="text-white text-2xl md:text-3xl font-bold">Tutor Finder</h1>

        {/* Menu */}
        <div>
          {user ? (
            <ul className="flex gap-4 md:gap-6 text-white text-base md:text-lg">
              <li
                className="cursor-pointer hover:text-red-400 transition"
                onClick={handleLogout}
              >
                Logout
              </li>
              <Link href={"/ProfileStudent"}>
              <li
                className="cursor-pointer hover:text-red-400 transition"
              >
                Profile
              </li>
              </Link>
              
            </ul>
          ) : (
            <ul className="flex gap-4 md:gap-6 text-white text-base md:text-lg">
              <li className="hover:text-gray-300 transition">
                <Link href="/Register">SignUp</Link>
              </li>
              <li className="hover:text-gray-300 transition">
                <Link href="/Register/login">SignIn</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
