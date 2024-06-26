import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Contact from './Components/Contact';
import About from './Components/AboutUs';
import Services from './Components/Services';
import Projects from './Components/Projects';
import "./App.css"
function App() {
  return (
      <div className="App bg-gradient-to-tl from-[rgb(39,36,31)] to-[rgba(147,138,121,1)] w-full  ">
        <section className="fixed z-20"> <Navbar /> </section>
        <div>
          <section id="#" className="py-24"> <Hero /> </section>
          <section id="about" className="pt-32" > <About /> </section>
          <section id="services" className="pt-24" > <Services /> </section>
          <section id="projects" className="pt-24"> <Projects /> </section>
          <section id="contact" className="py-12 pt-20 "> <Contact /> </section>
        </div>
        <footer id="footer" className="App bg-gradient-to-tl from-[rgb(39,36,31)] to-[rgba(147,138,121,1)] w-full">Created by <a href="https://codenurturers.com/">Code Nurturers LLC</a></footer>
      </div>
  );
}

export default App;
