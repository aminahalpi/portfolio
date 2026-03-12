import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { Calendar, Users } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Experience & Organizations
        </motion.h2>

        <div className="relative pl-8 md:pl-12 border-l-2 border-[#1E3A8A]/30">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ x: 8 }}
              className="group relative mb-12 last:mb-0"
            >
              {/* Titik Timeline */}
              <div className="absolute -left-[11px] top-2 w-6 h-6 bg-[#0F172A] border-4 border-[#1E3A8A] rounded-full z-10 group-hover:scale-110 transition-transform" />

              <div className="bg-gray-900 border border-gray-800 hover:border-[#1E3A8A] rounded-3xl p-8 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-2xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-[#3B82F6] font-medium">{exp.role}</p>
                    </div>
                  </div>
                  <span className="text-[#64748B] font-medium whitespace-nowrap">{exp.period}</span>
                </div>

                <ul className="space-y-3 text-[#94A3B8]">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#3B82F6] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;