import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';

const phone = '+92 301 3266529';
const whatsappUrl = 'https://wa.me/923013266529?text=Hello%20Dr.%20Ibtisam%2C%20I%20would%20like%20to%20book%20an%20appointment.';
const facebookUrl = 'https://www.facebook.com/share/17Voy9Z9c1/?mibextid=wwXIfr';

export default function ContactInfoBlock() {
  return (
    <div className="grid gap-4 rounded-2xl border border-sky-100 bg-white p-5 shadow-md shadow-sky-100/70 sm:grid-cols-2 lg:grid-cols-3">
      <motion.a
        whileHover={{ y: -3, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="flex items-center gap-3 rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 hover:border-[#1DD6BB]"
        href="tel:+923013266529"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1DD6BB] text-white">
          <FaPhoneAlt />
        </span>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Call</p>
          <p className="text-sm font-semibold text-slate-900">{phone}</p>
        </div>
      </motion.a>

      <motion.a
        whileHover={{ y: -3, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 hover:border-emerald-400"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
          <FaWhatsapp />
        </span>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">WhatsApp</p>
          <p className="text-sm font-semibold text-slate-900">{phone}</p>
        </div>
      </motion.a>

      <motion.a
        whileHover={{ y: -3, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="flex items-center gap-3 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3 hover:border-indigo-400"
        href="mailto:ibtisamkhalid39@gmail.com?subject=Appointment%20Request"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-white">
          <FaEnvelope />
        </span>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Email</p>
          <p className="text-sm font-semibold text-slate-900">
            ibtisamkhalid39@gmail.com
          </p>
        </div>
      </motion.a>

      <motion.a
        whileHover={{ y: -3, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="flex items-center gap-3 rounded-xl border border-pink-100 bg-pink-50 px-4 py-3 hover:border-pink-400"
        href="https://www.instagram.com/ibtisam_khalid21"
        target="_blank"
        rel="noreferrer"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white">
          <FaInstagram />
        </span>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Instagram</p>
          <p className="text-sm font-semibold text-slate-900">@ibtisam_khalid21</p>
        </div>
      </motion.a>

      <motion.a
        whileHover={{ y: -3, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 hover:border-blue-400"
        href={facebookUrl}
        target="_blank"
        rel="noreferrer"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
          <FaFacebookF />
        </span>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Facebook</p>
          <p className="text-sm font-semibold text-slate-900">Profile</p>
        </div>
      </motion.a>
    </div>
  );
}


