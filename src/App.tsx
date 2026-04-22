import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import Timeline from "./components/Timeline";
import Quotebox from "./components/Quotebox";
import Awards from "./components/Awards";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
{/* import Quiz from "./components/Quiz"; */}
import "./App.css";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Movies/>
      <Timeline/>
      <Quotebox/>
      <Awards/>
      <Gallery/>
      {/* <Quiz/> */}
      <Footer/>
    </>
  );
}

export default App;