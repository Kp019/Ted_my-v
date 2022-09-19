import Home from "./components/home/Home";
import Navbarc from "./components/Navbar/Navbar";
import "./App.css";
/*import About from "./components/about/About";*/
import Speaker from "./components/Speakers/Speaker";
import Theme from "./components/theme/Theme";
import Footer from "./components/footer/Footer";
import Events from "./components/Events/Events";
import Contact from "./components/Contactus/Contact";
import Abutf from "./components/about/abutf";

function App() {
  return (
    <div className="App">
      <Navbarc />
      <Home />
      <Theme />
      <Abutf />
      <Events />
      <Speaker />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
