import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import Timeline from "./components/Timeline";
import Quotebox from "./components/Quotebox";
import Awards from "./components/Awards";
import Footer from "./components/Footer";
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
      <Footer/>
    </>
  );
}

export default App;