"use client"
import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"

const AuthContext = createContext(null)

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/authprovider", {
          withCredentials: true,
        })
        if (res.data?.user) {
          console.log("data auth" , res.data)
          setUser(res.data)
          setUsername(res.data.user.username || "")
        } else {
          setUser(null)
          setUsername("")
        }
      } catch (err) {
        setUser(null)
        setUsername("")
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, username, setUsername, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
