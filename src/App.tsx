import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Movies from "./components/Movies";
import Timeline from "./components/Timeline";
import Quotebox from "./components/Quotebox";
import Awards from "./components/Awards";
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
    </>
  );
}

export default App;