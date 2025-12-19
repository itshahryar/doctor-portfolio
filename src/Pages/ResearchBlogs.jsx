import Section from '../components/Section';
import { motion } from 'framer-motion';
import { FaFlask, FaBrain, FaHeartbeat, FaBookOpen, FaMicroscope, FaUserMd, FaLightbulb, FaPenFancy } from 'react-icons/fa';

const researchInterests = [
  {
    title: 'Preventive medicine and public health awareness',
    icon: <FaHeartbeat className="text-pink-600" />,
    color: 'from-pink-50 to-rose-50',
    badgeColor: 'bg-pink-100 text-pink-800 ring-pink-200'
  },
  {
    title: 'Women’s health and early detection of diseases',
    icon: <FaUserMd className="text-purple-600" />,
    color: 'from-purple-50 to-violet-50',
    badgeColor: 'bg-purple-100 text-purple-800 ring-purple-200'
  },
  {
    title: 'Medical education and student well-being',
    icon: <FaBrain className="text-blue-600" />,
    color: 'from-blue-50 to-indigo-50',
    badgeColor: 'bg-blue-100 text-blue-800 ring-blue-200'
  },
  {
    title: 'Lifestyle, mental health, and resilience among medical students',
    icon: <FaLightbulb className="text-amber-600" />,
    color: 'from-amber-50 to-orange-50',
    badgeColor: 'bg-amber-100 text-amber-800 ring-amber-200'
  },
];

const blogEntries = [
  {
    title: 'Why Early Health Awareness Matters',
    status: 'Coming Soon',
    summary:
      'Exploring how early education and awareness can change health outcomes, inspired by participation in Breast Cancer Awareness seminars.',
    icon: <FaHeartbeat className="text-pink-600" />,
    color: 'from-pink-50 to-rose-50',
    badgeColor: 'bg-pink-100 text-pink-800 ring-pink-200'
  },
  {
    title: 'Life as a First Year MBBS Student',
    status: 'Draft',
    summary:
      'Reflections on transitioning from FSc to MBBS—the challenges, the excitement, and balancing academic demands with self-care.',
    icon: <FaBrain className="text-blue-600" />,
    color: 'from-blue-50 to-indigo-50',
    badgeColor: 'bg-blue-100 text-blue-800 ring-blue-200'
  },
  {
    title: 'Balancing Academics, Events, and Well-being',
    status: 'Planned',
    summary:
      'Drawing from sports and MEDEX experiences to show why co-curricular activities matter for personal and professional growth.',
    icon: <FaBookOpen className="text-emerald-600" />,
    color: 'from-emerald-50 to-teal-50',
    badgeColor: 'bg-emerald-100 text-emerald-800 ring-emerald-200'
  },
];

export default function ResearchBlogs() {
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
              Knowledge Sharing
            </span>
          </motion.div>
          
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Research &{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Blogs
            </span>
          </h1>
          
          <div className="mt-3 flex justify-center">
            <div className="h-0.5 w-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
          </div>
          
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 leading-relaxed">
            Early interests in research and a space to share reflections from my medical journey
          </p>
        </motion.div>

        {/* Research Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900">Research Interests</h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 mb-8"
          >
            <p className="text-slate-600 leading-relaxed">
              As a first year MBBS student, I am at the beginning of my journey into medical research and academic writing. These are areas I am keen to explore under experienced supervisors and mentors.
            </p>
          </motion.div>
          
          <div className="grid gap-5 sm:grid-cols-2">
            {researchInterests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-white/90 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{ background: `linear-gradient(to bottom right, ${interest.color.split(' ')[0]}, ${interest.color.split(' ')[1]})` }}></div>
                
                <div className="relative flex items-start gap-5">
                  <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white to-slate-50 text-slate-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                    {interest.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {interest.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-blue-500">
                      <FaMicroscope className="text-xs" />
                      <span className="text-xs font-medium text-blue-700">Research Focus Area</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Blog Entries Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900">Blog-Style Entries</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogEntries.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-white/90 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{ background: `linear-gradient(to bottom right, ${post.color.split(' ')[0]}, ${post.color.split(' ')[1]})` }}></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white to-slate-50 text-slate-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                        {post.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${post.badgeColor} ring-1 shadow-sm`}>
                      {post.status}
                    </span>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                      {post.summary}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-center gap-2 text-emerald-500">
                    <FaPenFancy className="text-xs" />
                    <span className="text-xs font-medium text-emerald-700">Upcoming Publication</span>
                  </div>
                </div>
              </motion.div>
            ))}
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

