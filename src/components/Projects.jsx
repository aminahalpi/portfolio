import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <ProjectCard key={index} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ================================
// 🔵 PROJECT CARD COMPONENT
// ================================
const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // 🔒 Amankan images supaya tidak error
  const images = project?.images || [];

  // 🔁 Auto Slide
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="group bg-gray-900 border border-gray-800 hover:border-[#1E3A8A] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#1E3A8A]/30 transition-all duration-500"
    >
      {/* ============================= */}
      {/* 🔵 IMAGE CAROUSEL SECTION */}
      {/* ============================= */}
      <div className="relative h-56 bg-gray-950 flex items-center justify-center overflow-hidden">
        {images.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </AnimatePresence>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentImage
                    ? 'bg-white scale-125'
                    : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ============================= */}
      {/* 🔵 CONTENT SECTION */}
      {/* ============================= */}
      <div className="p-7">
        <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-[#3B82F6] font-medium text-sm mb-4">
          {project.role}
        </p>

        <p className="text-[#94A3B8] text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-7">
          {project.tech?.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-1.5 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-2xl text-sm font-semibold transition"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}

          {project.prototype && (
            <a
              href={project.prototype}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#3B82F6] text-white py-3 rounded-2xl text-sm font-semibold transition"
            >
              <ExternalLink className="w-4 h-4" />
              Prototype
            </a>
          )}

          {project.otherLink && (
            <a
              href={project.otherLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-2xl text-sm font-semibold transition"
            >
              Lihat File
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;