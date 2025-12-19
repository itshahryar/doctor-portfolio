import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCalendarCheck,
  FaUserMd,
  FaHandshake,
  FaCheckCircle
} from 'react-icons/fa';
import Section from '../components/Section';

const appointmentTypes = [
  {
    title: 'Academic Guidance & Mentoring',
    description:
      'For students seeking guidance on pre-medical studies, MBBS preparation, or managing the transition from FSc to medical college.',
    icon: <FaUserMd className="text-blue-600" />,
    color: 'from-blue-50 to-indigo-50',
    badgeColor: 'bg-blue-100 text-blue-800 ring-blue-200'
  },
  {
    title: 'Event & Awareness Collaboration',
    description:
      'For organizers of health awareness campaigns, student events, or seminars looking for motivated medical students to participate or collaborate.',
    icon: <FaHandshake className="text-emerald-600" />,
    color: 'from-emerald-50 to-teal-50',
    badgeColor: 'bg-emerald-100 text-emerald-800 ring-emerald-200'
  },
];

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-linear-to-br from-slate-50 via-white to-emerald-50 text-slate-900">
      <Section className="bg-transparent">
        {/* HEADER — SAME AS TESTIMONIALS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse"></span>
              Appointment
            </span>
          </motion.div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Book an{' '}
            <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Appointment
            </span>
          </h1>

          <div className="mt-3 flex justify-center">
            <div className="h-0.5 w-24 bg-linear-to-r from-emerald-400 to-teal-400 rounded-full"></div>
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 leading-relaxed">
            Connect for academic discussions, guidance, or future collaborations as training advances.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* IMPORTANT NOTE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-amber-100 bg-linear-to-br from-amber-50 to-amber-100/30 p-6 shadow-lg"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <FaUserMd />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-amber-900">
                    Important Note
                  </h3>
                  <p className="mt-2 text-amber-800">
                    I am currently a first year MBBS student and not yet a fully practicing physician. Appointments are best suited for academic discussions, guidance for pre-medical/early medical students, and planning for future collaborations or mentoring. Any medical decisions should be taken in consultation with a licensed physician.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* APPOINTMENT TYPES */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-1 w-8 bg-linear-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-slate-900">
                  Appointment Types
                </h3>
              </div>

              <div className="grid gap-4">
                {appointmentTypes.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-linear-to-br from-white to-white/90 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                      style={{
                        background: `linear-gradient(to bottom right, ${item.color.split(' ')[0]}, ${item.color.split(' ')[1]})`
                      }}
                    />

                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-white to-slate-50 text-slate-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {item.title}
                          </h4>
                          <p className="mt-3 text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-emerald-500">
                        <FaCalendarCheck className="text-xs" />
                        <span className="text-xs font-medium text-emerald-700">
                          Available Service
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — CONTACT FORM (UNCHANGED) */}
          <div className="lg:sticky lg:top-24 lg:self-start lg:h-fit">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-slate-100 bg-linear-to-br from-white to-white/90 p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-8 bg-linear-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-slate-900">
                  Contact Form
                </h3>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Your information will be used only to respond to your query and will not be shared without your consent.
              </p>

              <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all"
                    placeholder="+92 ..."
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all"
                    defaultValue="Phone"
                  >
                    <option>Phone</option>
                    <option>WhatsApp</option>
                    <option>Email</option>
                  </select>
                </div>

                <div className="sm:col-span-1">
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Appointment Type
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all"
                    defaultValue="Academic Guidance"
                  >
                    <option>Academic Guidance</option>
                    <option>Event Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Message / Details
                  </label>
                  <textarea
                    rows="4"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all"
                    placeholder="Share details about your request..."
                  ></textarea>
                </div>

                <div className="sm:col-span-2">
                  <motion.button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-emerald-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200/50 hover:shadow-emerald-300/60 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Request
                  </motion.button>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 flex items-center gap-2 text-emerald-700"
                    >
                      <FaCheckCircle className="text-emerald-500" />
                      <span className="text-sm font-medium">
                        Thank you! Your request has been received. You will get a response via your preferred contact method.
                      </span>
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}

