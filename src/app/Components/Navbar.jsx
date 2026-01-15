"use client"
import Link from "next/link";
import { useAuth } from "../AuthProvider";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Navbar(){

    const { user, setUser } = useAuth() || {}
    console.log("data",user)
    const router = useRouter()

    const handlelogout = async() => {
       try {
         const res = await axios.put("http://localhost:4000/api/logout" , {} , {
             withCredentials:true
         })
         console.log("logOut")
         router.push("/Register")
       } catch (error) {
        console.log(error.response?.data?.message)
        
       }
    }
    return(
        <nav className=" w-full flex justify-center p-2 absolute top-0 ">
            <div className="h-15  min-w-[99%] bg-white/30 rounded-2xl">
                <div className="flex w-full justify-around">
                    <h1 className="text-white p-4 text-2xl font-bold">Tuter Finder</h1>
                    <div className="h-full p-2 max-w-lg">
                        {
                            user ? <ul className="flex w-full h-full p-2 gap-10 text-2xl text-white"><li className="z-20 cursor-pointer" onClick={handlelogout}>LogOut</li></ul> : <ul className="flex w-full h-full p-2 gap-10 text-2xl text-white">
                              
    <li className="z-10">
      <Link href="/Register">SignUp</Link>
                            </li>
                            <li className="z-10"><Link href="/Register/login">SignIn</Link></li>
                        </ul> 
                        }

                    </div>
                </div>
            </div>

        </nav>
    )
}