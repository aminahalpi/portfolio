import { motion } from 'framer-motion';
import { aboutText } from '../data/about';
import { Code2, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Kolom Kiri - Teks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg text-[#94A3B8] leading-relaxed">
            {aboutText}
          </p>
        </motion.div>

        {/* Kolom Kanan - Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-[#1E3A8A]/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Code2 className="w-5 h-5 text-[#3B82F6]" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Frontend Development</h4>
              <p className="text-[#64748B]">React, Tailwind CSS, Firebase</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-[#1E3A8A]/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Palette className="w-5 h-5 text-[#3B82F6]" />
            </div>
            <div>
              <h4 className="font-semibold text-white">UI/UX Design</h4>
              <p className="text-[#64748B]">Figma Prototyping & User Flow</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-[#1E3A8A]/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-[#3B82F6]" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Clean & Efficient Code</h4>
              <p className="text-[#64748B]">User-centered design approach</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;