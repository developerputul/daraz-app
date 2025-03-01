import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LogoSearchBar from "./Components/LogoSearchBar/LogoSearchBar";
import Carousel from "./Components/Carousel/Carousel";
import TopBanner from "./Components/TopBanner/TopBanner";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <div>
      <Navbar/>
      <LogoSearchBar/>
      <Carousel/>
      <TopBanner/>
      <Hero/>

    </div>
  );
}

export default App;
