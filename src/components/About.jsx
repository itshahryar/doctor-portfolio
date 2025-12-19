import { motion } from 'framer-motion';
import { FaGraduationCap, FaHeart, FaLightbulb, FaAward } from 'react-icons/fa';
import Section from './Section';

export default function About() {
  const features = [
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: 'Academic Excellence',
      description: 'Strong foundation in medical sciences with excellent academic performance',
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: 'Compassionate Care',
      description: 'Patient-centered approach with empathy and understanding',
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: 'Continuous Learning',
      description: 'Committed to staying updated with latest medical advancements',
    },
    {
      icon: <FaAward className="w-6 h-6" />,
      title: 'Professional Growth',
      description: 'Active participation in seminars and medical awareness programs',
    },
  ];

  return (
    <Section
      id="about"
      className="bg-gradient-to-b from-white via-emerald-50/30 to-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Get to Know Me
            </span>
          </motion.div>
          
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            About{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Dr. Ibtisam Khalid
            </span>
          </h2>
          
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
          </div>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Building a career in medicine on top of academic excellence, empathy, and continuous learning
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          {/* Image Card */}
          <motion.div
            className="group relative overflow-hidden rounded-3xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-white shadow-2xl">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <motion.img
                  src="/me.jpg"
                  alt="Dr. Ibtisam Khalid portrait"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="border-t border-emerald-100 bg-white/95 backdrop-blur-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      Medical Student
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-slate-900">
                      First Year MBBS
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Patient-centered mindset with a passion for making a positive impact in healthcare
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Card */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="rounded-3xl bg-white p-8 shadow-xl border border-slate-100">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  <span className="h-1 w-8 bg-emerald-500 rounded-full"></span>
                  My Journey
                </span>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Thoughtful care, grounded in{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    strong medical foundations
                  </span>
                </h3>
              </div>

              <div className="space-y-5 text-base text-slate-700 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  I&apos;m <strong className="text-slate-900">Dr. Ibtisam Khalid</strong>, a first year MBBS student at{' '}
                  <strong className="text-emerald-700">Faisalabad Medical University, Pakistan</strong>. From achieving excellent results in school
                  and college to entering medical school, my journey has been driven by
                  curiosity, discipline, and a deep desire to understand the human body and
                  provide meaningful care.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  My focus is to become a well-rounded physician—clinically competent,
                  empathetic, and approachable—who values clear communication and patient
                  education. I believe that small, consistent efforts in learning, teamwork,
                  and community outreach can create a lasting positive impact on patients and
                  society.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Right now I&apos;m building a strong foundation in anatomy, physiology and
                  biochemistry, while also taking part in seminars, awareness events, and
                  campus activities that strengthen my confidence, leadership, and
                  sensitivity to real-world health challenges.
                </motion.p>
              </div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                {[
                  'First Year MBBS',
                  'Faisalabad Medical University',
                  'Compassionate & Ambitious',
                ].map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-2 text-sm font-medium text-emerald-700 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="mb-2 text-lg font-bold text-slate-900">{feature.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
