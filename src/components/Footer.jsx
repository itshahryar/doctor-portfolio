import { FaStethoscope, FaHeart, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const phone = '+92 301 3266529';
const email = 'ibtisamkhalid39@gmail.com';
const instagramUrl = 'https://www.instagram.com/doc_ibtisam24/';
const facebookUrl = 'https://www.facebook.com/share/17Voy9Z9c1/?mibextid=wwXIfr';
const whatsappUrl = 'https://wa.me/923013266529?text=Hello%20Dr.%20Ibtisam%2C%20I%20would%20like%20to%20book%20an%20appointment.';

export default function Footer() {
  return (
    <>
      <footer className="bg-linear-to-b from-white via-emerald-50/30 to-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Left Column: Personal Branding */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
                  <FaStethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Dr. Ibtisam Khalid</h3>
                  <p className="text-sm text-slate-600">Medical Professional</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-emerald-700">
                <FaHeart className="w-4 h-4" />
                <span className="text-sm font-medium">Compassionate Healthcare</span>
              </div>
            </div>

            {/* Right Column: Get In Touch with all icons */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-700">
                GET IN TOUCH
              </h3>
              <div className="flex gap-3">
                <motion.a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-100 bg-white text-emerald-700 shadow-sm hover:shadow-md hover:bg-emerald-50 transition-all"
                  aria-label="Phone"
                >
                  <FaPhoneAlt className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href={`mailto:${email}?subject=Appointment%20Request`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-100 bg-white text-emerald-700 shadow-sm hover:shadow-md hover:bg-emerald-50 transition-all"
                  aria-label="Email"
                >
                  <FaEnvelope className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-100 bg-white text-emerald-700 shadow-sm hover:shadow-md hover:bg-emerald-50 transition-all"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-100 bg-white text-emerald-700 shadow-sm hover:shadow-md hover:bg-emerald-50 transition-all"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-600">
              <p>© 2025 Dr. Ibtisam Khalid. All rights reserved.</p>
              <p className="flex items-center gap-1">
                Designed with <span className="text-red-500">❤️</span> by Shahryar Amjad
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Icon with Radiations */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-6 z-50 group"
        aria-label="Contact via WhatsApp"
      >
        <div className="relative">
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-slate-900 text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
              Book an appointment
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
            </div>
          </div>

          {/* Pulsing Radiations - Slow and Subtle */}
          <motion.div
            className="absolute inset-0 rounded-full border border-emerald-400/40"
            animate={{
              scale: [1, 1.2, 1.35],
              opacity: [0.3, 0.15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-emerald-400/40"
            animate={{
              scale: [1, 1.2, 1.35],
              opacity: [0.3, 0.15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-emerald-400/40"
            animate={{
              scale: [1, 1.2, 1.35],
              opacity: [0.3, 0.15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 2,
            }}
          />

          {/* WhatsApp Button */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 text-white shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-shadow">
            <FaWhatsapp className="w-7 h-7" />
          </div>
        </div>
      </motion.a>
    </>
  );
}

