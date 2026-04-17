import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Movies from "./components/Movies";
import Timeline from "./components/Timeline";
import Quotebox from "./components/Quotebox";
import "./App.css";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Movies/>
      <Timeline/>
      <Quotebox/>
    </>
  );
}

export default App;