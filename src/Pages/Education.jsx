import Section from '../components/Section';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMedal, FaBook, FaStar } from 'react-icons/fa';

const educationItems = [
  {
    title: 'MBBS – First Year',
    institution: 'Faisalabad Medical University, Pakistan',
    period: 'Currently Enrolled',
    description:
      'Building core competencies in basic medical sciences including anatomy, physiology, and biochemistry. Focused on understanding the scientific principles that will guide future clinical decision-making.',
    icon: <FaGraduationCap className="text-emerald-600" />,
    color: 'from-emerald-50 to-teal-50',
    badgeColor: 'bg-emerald-100 text-emerald-800 ring-emerald-200'
  },
  {
    title: 'FSC (Pre-Medical)',
    institution: 'Punjab College',
    period: '94% Marks',
    description:
      'Strengthened understanding of biology, chemistry, and physics. Rigorous training prepared for competitive entry into medical school and cultivated discipline, time management, and analytical skills.',
    icon: <FaMedal className="text-blue-600" />,
    color: 'from-blue-50 to-indigo-50',
    badgeColor: 'bg-blue-100 text-blue-800 ring-blue-200'
  },
  {
    title: 'Matriculation',
    institution: 'Dar-e-Arqam School',
    period: '100% Marks',
    description:
      'Years of dedication and consistency leading to a perfect score. Established a solid academic foundation and motivation to pursue a demanding, rewarding career in medicine.',
    icon: <FaStar className="text-amber-600" />,
    color: 'from-amber-50 to-orange-50',
    badgeColor: 'bg-amber-100 text-amber-800 ring-amber-200'
  },
];

export default function Education() {
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
              Academic Journey
            </span>
          </motion.div>
          
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Education &{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>
          
          <div className="mt-3 flex justify-center">
            <div className="h-0.5 w-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
          </div>
          
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 leading-relaxed">
            Academic milestones shaping my path into medicine
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {educationItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-white/90 px-6 py-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{ background: `linear-gradient(to bottom right, ${item.color.split(' ')[0]}, ${item.color.split(' ')[1]})` }}></div>
              
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white to-slate-50 text-slate-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                      {item.institution}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold ${item.badgeColor} ring-1 shadow-sm`}>
                    {item.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute top-20 left-10 w-24 h-24 rounded-full bg-emerald-300 blur-3xl"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-teal-300 blur-3xl"
        ></motion.div>
      </Section>
    </div>
  );
}
