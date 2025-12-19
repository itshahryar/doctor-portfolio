import { motion, AnimatePresence } from 'framer-motion';
import { FaStethoscope, FaHeartbeat } from 'react-icons/fa';

export default function NavigationLoader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 backdrop-blur-sm"
        >
          <div className="relative">
            {/* Pulsing Circle Background */}
            <motion.div
              className="absolute inset-0 rounded-full bg-emerald-200/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Stethoscope Icon */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <FaStethoscope className="w-16 h-16 text-emerald-600" />
            </motion.div>
            
            {/* Heartbeat Line Animation */}
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <motion.path
                  d="M0,10 L20,10 L25,5 L30,15 L35,10 L60,10 L65,5 L70,15 L75,10 L100,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-emerald-600"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </motion.div>
            
            {/* Loading Text */}
            <motion.div
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm font-medium text-emerald-700 flex items-center gap-2">
                <FaHeartbeat className="text-emerald-600 animate-pulse" />
                Loading...
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
