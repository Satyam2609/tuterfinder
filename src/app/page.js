import Footer from "./Components/Footer";
import HomeHero from "./Components/HomeHeroBar";
import Navbar from "./Components/Navbar";
import SearchTutor from "./Components/SearchTutor";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="bg-gradient-to-tr from-black via-gray-800 to-black"> 
      <HomeHero/>
      <SearchTutor/>
      <Footer/>
    </div>
    </>
  );
}
