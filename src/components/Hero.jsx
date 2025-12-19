import { motion } from 'framer-motion';
import { FaArrowDown, FaStethoscope, FaHeartbeat } from 'react-icons/fa';

export default function Hero({ onNavigate }) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-emerald-500 to-emerald-700 text-white scroll-mt-24"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* EKG Heartbeat Line */}
        <div className="absolute top-1/2 left-0 w-full h-12 -translate-y-1/2 overflow-hidden">
          <svg className="absolute top-0 left-0 w-[200%] h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <motion.path 
              d="M0,50 L100,50 L120,20 L140,80 L160,50 L300,50 L320,20 L340,80 L360,50 L600,50 L620,20 L640,80 L660,50 L800,50 L820,20 L840,80 L860,50 L1000,50 L1020,20 L1040,80 L1060,50 L1200,50" 
              fill="none" 
              stroke="rgba(255,255,255,0.3)" 
              strokeWidth="2"
              initial={{ x: 0 }}
              animate={{ x: -600 }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          </svg>
        </div>
      </div>

      {/* Overlay Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-block"
          >
            <div className="group relative">
              <div className="absolute -inset-1 rounded-full bg-white/30 blur group-hover:opacity-60 transition duration-300"></div>
              <div className="relative rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2">
                <p className="text-sm font-light tracking-[0.3em] text-white/80">
                  BONJOUR
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl mb-6"
          >
            <span className="block bg-linear-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Dr. Ibtisam Khalid
            </span>
          </motion.h1>

          {/* Subtitle with Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <FaStethoscope className="text-white text-xl" />
            <p className="text-xl sm:text-2xl font-medium text-white max-w-3xl mx-auto">
              First Year MBBS Student | Future Healthcare Professional
            </p>
            <FaHeartbeat className="text-white text-xl" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/90 leading-relaxed"
          >
            Dedicated to excellence in medicine, compassionate patient care, and continuous learning
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (onNavigate) {
                  setTimeout(() => {
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }
              }}
              className="group cursor-pointer relative overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-emerald-700 shadow-2xl shadow-emerald-900/30 transition-all duration-300 hover:shadow-emerald-900/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                About Me
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-emerald-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate && onNavigate('appointment')}
              className="group cursor-pointer relative overflow-hidden rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:bg-white/20 hover:border-white/50"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
