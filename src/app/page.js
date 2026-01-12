import HomeHero from "./Components/HomeHeroBar";
import Navbar from "./Components/Navbar";
import SearchTutor from "./Components/SearchTutor";

export default function Home() {
  return (
    <div> 
      <Navbar/>
      <HomeHero/>
      <SearchTutor/>
    </div>
  );
}
