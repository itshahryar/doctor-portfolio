import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavigationLoader from './components/NavigationLoader';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Education from './Pages/Education';
import Certifications from './Pages/Certifications';
import SkillsServices from './Pages/SkillsServices';
import ResearchBlogs from './Pages/ResearchBlogs';
import Testimonials from './Pages/Testimonials';
import Appointment from './Pages/Appointment';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  // Show navigation loader
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Show loader for 500ms during navigation

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <NavigationLoader isLoading={isLoading} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certifications-seminars" element={<Certifications />} />
        <Route path="/skills-services" element={<SkillsServices />} />
        <Route path="/research-blogs" element={<ResearchBlogs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
