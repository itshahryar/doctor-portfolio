import { motion } from 'framer-motion';

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
}) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-3 text-sm text-slate-600 sm:text-base">{subtitle}</p>
          )}
        </motion.div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

