import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}/>
          {/* <Route path="/" element={<AboutUs />}/> */}
          {/* <Route path="/" element={<Services />}/> */}
          {/* <Route path="/" element={<Projects/>}/> */}
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
