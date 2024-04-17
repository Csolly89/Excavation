import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Contact from './Components/Contact';
import About from './Components/AboutUs';
import Services from './Components/Services';
import Projects from './Components/Projects';


function App() {
  return (
      <div className="App  bg-gradient-to-tl from-[rgb(39,36,31)] to-[rgba(147,138,121,1)] w-full  ">
        <section> <Navbar /> </section>
        <div>
          <section id="#" className="py-16"> <Hero /> </section>
          <section id="about" className="py-16" > <About /> </section>
          <section className="py-16" id="services"> <Services /> </section>
          <section id="projects" className="py-16"> <Projects /> </section>
          <section id="contact" className="py-12 pt-5 "> <Contact /> </section>
        </div>
      </div>
  );
}

export default App;
