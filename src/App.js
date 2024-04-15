import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Contact from './Components/Contact';
import About from './Components/AboutUs';
import Services from './Components/Services';
// import Projects from './Components/Projects';

function App() {
  return (
      <div className="App bg-gradient-to-tl from-[rgb(39,36,31)] to-[rgba(147,138,121,1)]">
      <section className="pb-10 mb-10 z-5"> <Navbar /> </section>
      <section> <Hero /> </section>
      <section id="about" > <About /> </section>
      <section className="mt-5" id="services"> <Services /> </section>
      {/* <section id="projects"> <Projects/> </section> */}
      <section id="contact"> <Contact /> </section>

      </div>
  );
}

export default App;
