import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    if (path === 'appointment') {
      navigate('/appointment');
    }
  };

  return (
    <div className="bg-white text-slate-900">
      <Hero onNavigate={handleNavigate} />
      <About />
    </div>
  );
}

