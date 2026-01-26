"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);       // actual user object
  const [loading, setLoading] = useState(true); // auth check status
const [tutordata , settuttordata] = useState([])
const [commentuser , setcommentuser] = useState(null)
  // 🔹 initial auth check (page refresh)
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/authprovider",
        { withCredentials: true }
      );

      if (res.data?.user) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        tutordata,
        settuttordata,
        setcommentuser,
        commentuser,
        fetchUser, // optional but powerful
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};
