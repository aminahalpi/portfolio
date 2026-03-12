import { motion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <p className="text-2xl font-bold text-white">Aminah Alfi Zuriah</p>
          <p className="text-[#64748B] mt-1">Frontend Developer & UI/UX Designer</p>
        </motion.div>

        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            className="text-[#94A3B8] hover:text-[#3B82F6] transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            className="text-[#94A3B8] hover:text-[#3B82F6] transition"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        <div className="text-[#64748B] text-sm flex items-center justify-center gap-2">
          © 2026 Aminah Alfi Zuriah. 
          <span className="inline-flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> using React + Tailwind
          </span>
        </div>

        <p className="text-[10px] text-gray-600 mt-8">
          Portfolio for Internship Purposes • Semester 6
        </p>
      </div>
    </footer>
  );
};

export default Footer;