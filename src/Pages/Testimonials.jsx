import Section from '../components/Section';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaUserGraduate, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ahmed Hassan',
    role: 'Senior MBBS Student',
    quote:
      'Ibtisam is highly dedicated and disciplined. Even in the first year, he approaches his studies with maturity and is always willing to help peers understand difficult concepts.',
    icon: <FaUserGraduate className="text-blue-600" />,
    color: 'from-blue-50 to-indigo-50',
    badgeColor: 'bg-blue-100 text-blue-800 ring-blue-200'
  },
  {
    name: 'Asad Raza',
    role: 'Former Teacher',
    quote:
      'During his time at Punjab College, Ibtisam consistently demonstrated exceptional academic performance and a strong work ethic. He is focused, respectful, and genuinely passionate about medicine.',
    icon: <FaChalkboardTeacher className="text-purple-600" />,
    color: 'from-purple-50 to-violet-50',
    badgeColor: 'bg-purple-100 text-purple-800 ring-purple-200'
  },
  {
    name: 'Shahryar Amjad',
    role: 'Event Organizer',
    quote:
      'In events like MEDEX and awareness seminars, Ibtisam showed enthusiasm, punctuality, and great teamwork. He is always eager to learn and contribute.',
    icon: <FaCalendarAlt className="text-emerald-600" />,
    color: 'from-emerald-50 to-teal-50',
    badgeColor: 'bg-emerald-100 text-emerald-800 ring-emerald-200'
  },
];

export default function Testimonials() {
  return (
    <div className="bg-linear-to-br from-slate-50 via-white to-emerald-50 text-slate-900">
      <Section className="bg-transparent">
        {/* Header */}
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
              Recognition
            </span>
          </motion.div>
          
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            What Others{' '}
            <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Say
            </span>
          </h1>
          
          <div className="mt-3 flex justify-center">
            <div className="h-0.5 w-24 bg-linear-to-r from-emerald-400 to-teal-400 rounded-full"></div>
          </div>
          
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 leading-relaxed">
            Kind words and reflections from people I have worked and studied with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-linear-to-br from-white to-white/90 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{ background: `linear-gradient(to bottom right, ${item.color.split(' ')[0]}, ${item.color.split(' ')[1]})` }}></div>
              
              <div className="relative grow">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-white to-slate-50 text-slate-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-white to-slate-50 text-emerald-600 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <FaQuoteLeft />
                  </span>
                </div>
                
                <div className="mt-6">
                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                    {item.quote}
                  </p>
                </div>
              </div>
              
              <div className="mt-auto pt-6">
                <div className="flex items-center gap-2 text-amber-500">
                  <FaStar className="text-xs" />
                  <span className="text-xs font-medium text-amber-700">Verified Testimonial</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-6 py-3 text-sm font-medium text-emerald-800 ring-1 ring-emerald-200 shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <FaStar />
            </span>
            More testimonials from mentors, classmates, and collaborators will be added as I continue my medical journey
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute top-20 left-10 w-24 h-24 rounded-full bg-blue-300 blur-3xl"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-emerald-300 blur-3xl"
        ></motion.div>
      </Section>
    </div>
  );
}

