import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Photos } from './Components/Photos';
import { Videos } from './Components/Videos';
import { About } from './Components/About';
import { Services } from './Components/Services';
import { Contact } from './Components/Contact';
import { Home } from './Components/Home';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
         
        </Routes>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
