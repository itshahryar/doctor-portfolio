import { useState } from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { FaRibbon, FaChalkboardTeacher, FaRunning, FaHospitalSymbol, FaFilter, FaStar } from 'react-icons/fa';

const CERT_ITEMS = [
  {
    name: 'Breast Cancer Awareness Seminar',
    category: 'Medical Awareness',
    type: 'Seminar',
    description:
      'Focused on early detection, risk factors, and the importance of patient education—reinforcing a commitment to preventive medicine.',
    icon: <FaRibbon className="text-pink-600" />,
    color: 'from-pink-50 to-rose-50',
    badgeColor: 'bg-pink-100 text-pink-800 ring-pink-200',
    image: 'Breast Cancer Awareness Seminar.png'
  },
  {
    name: 'Pathways for Medical Students – Guidance Seminar',
    category: 'Career & Academic Guidance',
    type: 'Guidance',
    description:
      'Covered specialty selection, research opportunities, and long-term career planning, highlighting diverse roles in clinical practice, academia, and public health.',
    icon: <FaChalkboardTeacher className="text-blue-600" />,
    color: 'from-blue-50 to-indigo-50',
    badgeColor: 'bg-blue-100 text-blue-800 ring-blue-200',
    image: 'Pathways for Medical Students – Guidance Seminar.PNG'
  },
  {
    name: 'Sports Events Participation',
    category: 'Events & Extracurriculars',
    type: 'Co-curricular',
    description:
      'Built teamwork, discipline, and resilience—values essential for a demanding profession like medicine.',
    icon: <FaRunning className="text-emerald-600" />,
    color: 'from-emerald-50 to-teal-50',
    badgeColor: 'bg-emerald-100 text-emerald-800 ring-emerald-200',
    image: 'Sports Events Participation_page-0001.jpg'
  },
  {
    name: 'MEDEX Event Participation',
    category: 'Events & Extracurriculars',
    type: 'Medical Event',
    description:
      'Engaged with medical students and professionals, gaining exposure to new ideas, networking opportunities, and current trends in medical education and healthcare.',
    icon: <FaHospitalSymbol className="text-teal-600" />,
    color: 'from-teal-50 to-cyan-50',
    badgeColor: 'bg-teal-100 text-teal-800 ring-teal-200',
    image: 'MEDEX Event Participation_page-0001.jpg'
  },
];

const CATEGORY_FILTERS = ['All', 'Medical Awareness', 'Career & Academic Guidance', 'Events & Extracurriculars'];

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? CERT_ITEMS
      : CERT_ITEMS.filter((item) => item.category === activeCategory);

  // Group items by category when "All" is selected
  const groupedItems =
    activeCategory === 'All'
      ? CATEGORY_FILTERS.filter((c) => c !== 'All').map((category) => ({
          category,
          items: CERT_ITEMS.filter((item) => item.category === category),
        }))
      : [{ category: activeCategory, items: filteredItems }];

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
              Professional Development
            </span>
          </motion.div>
          
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Certifications &{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Seminars
            </span>
          </h1>
          
          <div className="mt-3 flex justify-center">
            <div className="h-0.5 w-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
          </div>
          
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 leading-relaxed">
            Learning beyond the classroom through seminars, awareness sessions, and events
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
                <FaFilter />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Browse by focus
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Filter activities to quickly see awareness work, academic guidance, or events
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {CATEGORY_FILTERS.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <motion.button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'border-emerald-500 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-200/50'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-400 hover:text-emerald-700 hover:shadow-md'
                    }`}
                  >
                    {category}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Certification Items */}
        <div className="space-y-12">
          {groupedItems.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + groupIndex * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-1 w-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                <h3 className="text-2xl font-bold text-slate-900">{group.category}</h3>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                {group.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image Section - FIXED */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                      <img 
                        src={`/certifications/${encodeURIComponent(item.image)}`} 
                        alt={item.name}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-md">
                            {item.icon}
                          </div>
                          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${item.badgeColor} ring-1 shadow-sm`}>
                            {item.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {item.name}
                          </h4>
                          <p className="mt-1 text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                            {item.category}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="mt-6 flex items-center gap-2 text-amber-500">
                        <FaStar className="text-xs" />
                        <span className="text-xs font-medium text-amber-700">Key Learning Experience</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

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
