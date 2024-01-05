import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Responsive.css';
import Footer from './pages/footer/Footer';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Navbar from './pages/navbar/Navbar';
import Resume from './pages/resume/Resume';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
