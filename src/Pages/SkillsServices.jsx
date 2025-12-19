import Section from '../components/Section';
import { motion } from 'framer-motion';
import { FaBookMedical, FaClock, FaComments, FaUsers, FaSyncAlt, FaHandsHelping, FaHeartbeat, FaLightbulb, FaStar } from 'react-icons/fa';

const skills = [
  {
    title: 'Foundational Medical Knowledge',
    description:
      'Understanding of basic medical sciences including anatomy, physiology, and biochemistry, aligned with first-year MBBS curriculum.',
    icon: <FaBookMedical className="text-blue-600" />,
    color: 'from-blue-50 to-indigo-50',
    badgeColor: 'bg-blue-100 text-blue-800 ring-blue-200'
  },
  {
    title: 'Academic Strength & Discipline',
    description:
      'Proven academic excellence with 100% marks in Matriculation and 94% in FSc, reflecting strong study habits, focus, and consistency.',
    icon: <FaClock className="text-amber-600" />,
    color: 'from-amber-50 to-orange-50',
    badgeColor: 'bg-amber-100 text-amber-800 ring-amber-200'
  },
  {
    title: 'Communication & Empathy',
    description:
      'Ability to communicate clearly, listen attentively, and show empathy—key for building trust with patients and peers.',
    icon: <FaComments className="text-teal-600" />,
    color: 'from-teal-50 to-cyan-50',
    badgeColor: 'bg-teal-100 text-teal-800 ring-teal-200'
  },
  {
    title: 'Teamwork & Leadership',
    description:
      'Collaboration in group projects and sports events fosters leadership, cooperation, and mutual support.',
    icon: <FaUsers className="text-emerald-600" />,
    color: 'from-emerald-50 to-green-50',
    badgeColor: 'bg-emerald-100 text-emerald-800 ring-emerald-200'
  },
  {
    title: 'Continuous Learning Mindset',
    description:
      'Actively seeking seminars, events, and learning opportunities to stay engaged with new ideas and best practices in medicine.',
    icon: <FaSyncAlt className="text-indigo-600" />,
    color: 'from-indigo-50 to-purple-50',
    badgeColor: 'bg-indigo-100 text-indigo-800 ring-indigo-200'
  },
];

const services = [
  {
    title: 'Health Awareness & Education (Non-Clinical)',
    description:
      'Support for awareness campaigns such as breast cancer awareness and sharing verified health information responsibly.',
    icon: <FaHeartbeat className="text-pink-600" />,
    color: 'from-pink-50 to-rose-50',
    badgeColor: 'bg-pink-100 text-pink-800 ring-pink-200'
  },
  {
    title: 'Peer Support & Academic Guidance',
    description:
      'Peer-level support for fellow students, sharing study strategies, and helping others stay organized and motivated.',
    icon: <FaHandsHelping className="text-purple-600" />,
    color: 'from-purple-50 to-violet-50',
    badgeColor: 'bg-purple-100 text-purple-800 ring-purple-200'
  },
  {
    title: 'Volunteer & Event Participation',
    description:
      'Open to volunteering at medical events, seminars, and community health activities suitable for current training level.',
    icon: <FaUsers className="text-green-600" />,
    color: 'from-green-50 to-emerald-50',
    badgeColor: 'bg-green-100 text-green-800 ring-green-200'
  },
  {
    title: 'Future Services (Planned)',
    description:
      'As MBBS training progresses, plans to expand clinical skills under supervision and participate in research, rotations, and patient interaction responsibly.',
    icon: <FaLightbulb className="text-orange-600" />,
    color: 'from-orange-50 to-amber-50',
    badgeColor: 'bg-orange-100 text-orange-800 ring-orange-200'
  },
];

export default function SkillsServices() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-slate-900">
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
              Professional Growth
            </span>
          </motion.div>
          
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Skills &{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          
          <div className="mt-3 flex justify-center">
            <div className="h-0.5 w-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
          </div>
          
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 leading-relaxed">
            Building core medical skills while offering meaningful support within my current training level
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="h-1 w-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
              <h2 className="text-2xl font-bold text-slate-900">Core Skills</h2>
            </div>
            
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-white/90 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{ background: `linear-gradient(to bottom right, ${skill.color.split(' ')[0]}, ${skill.color.split(' ')[1]})` }}></div>
                  
                  <div className="relative flex items-start gap-5">
                    <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white to-slate-50 text-slate-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {skill.title}
                      </h3>
                      <p className="mt-3 text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                        {skill.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-amber-500">
                        <FaStar className="text-xs" />
                        <span className="text-xs font-medium text-amber-700">Core Competency</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="h-1 w-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
              <h2 className="text-2xl font-bold text-slate-900">Services I Provide</h2>
            </div>
            
            <div className="space-y-5">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-white/90 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{ background: `linear-gradient(to bottom right, ${service.color.split(' ')[0]}, ${service.color.split(' ')[1]})` }}></div>
                  
                  <div className="relative flex items-start gap-5">
                    <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white to-slate-50 text-slate-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                        {service.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-emerald-500">
                        <FaStar className="text-xs" />
                        <span className="text-xs font-medium text-emerald-700">Available Service</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

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
