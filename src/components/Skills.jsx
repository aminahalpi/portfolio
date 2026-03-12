import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { Code2, Palette, Zap, Globe } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Palette: Palette,
  Zap: Zap,
  Globe: Globe,
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, index) => {
            const IconComponent = iconMap[category.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-gray-900 rounded-3xl p-8 hover:bg-gray-800 transition-all group"
              >
                {/* Icon Kategori */}
                <div className="w-16 h-16 bg-[#1E3A8A]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1E3A8A]/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-[#3B82F6]" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-6">
                  {category.category}
                </h3>

                <div className="space-y-4">
                  {category.items.map((skill, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-[#94A3B8]">{skill.name}</span>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        skill.level === "Intermediate" || skill.level === "Native" 
                          ? "bg-[#1E3A8A]/30 text-[#3B82F6]" 
                          : skill.level === "Basic" 
                          ? "bg-gray-700 text-gray-400" 
                          : "bg-emerald-900/40 text-emerald-400"
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;