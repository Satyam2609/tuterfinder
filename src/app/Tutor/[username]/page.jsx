import Navbar from "../../Components/Navbar";
import TutorProfilestu from "./TutorProfilestu";
import Visits from "./Visits";
import Comments from "./Comments";
import Achivements from "./Achivements";
import Result from "./Result";
import Footer from "../../Components/Footer";

export default function Tutor(){
    return (
        <>
        <Navbar/>
        <div className=" bg-gradient-to-tr from-black via-gray-800 to-black">
        <TutorProfilestu/>
        <Visits/>
        <Comments/>
        <Achivements/>
        <Footer/>   
        </div>
        </>
    )
}