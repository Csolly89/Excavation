import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Contact from './Components/Contact';
import About from './Components/AboutUs';
import Services from './Components/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          {/* <Route path="/projects" element={<Projects/>}/> */}
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
