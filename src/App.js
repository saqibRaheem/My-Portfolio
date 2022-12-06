import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Poryfolio from "./components/Poryfolio";
import SocialLink from "./components/SocialLink";


function App() {
  return (
   <>
      <NavBar />
      <Home />
      <About />
      <Poryfolio />
      <Experience />
      <Contact />
      <SocialLink />
   </>
  );
}

export default App;
