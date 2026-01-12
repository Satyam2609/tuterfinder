"use client"
import Link from "next/link";
import AuthProvider from "../AuthProvider";

export default function Navbar(){
    const {user,setuser} = AuthProvider()
    return(
        <nav className="w-full p-2 absolute top-0 bg-white/30">
            <div className="h-full w-full  ">
                <div className="flex w-full justify-around">
                    <h1 className="text-white p-2 text-2xl font-bold">Tuter Finder</h1>
                    <div className="h-full max-w-lg">
                        {
                            user ? <ul className="flex w-full h-full p-2 gap-10 text-2xl text-white">
                              
    <li className="z-10">
      <Link href="/Register">SignUp</Link>
    </li>
                            <li className="z-10"><Link href="/Register/login">SignIn</Link></li>
                        </ul>: <ul>
                            <li>LogOut</li>
                        </ul>
                        }

                    </div>
                </div>
            </div>

        </nav>
    )
}