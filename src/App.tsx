import Contact from "./components/Contact";
import Descriptor from "./components/Descriptor";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Tech from "./components/Tech";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Descriptor />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
