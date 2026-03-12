import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group bg-gray-900 border border-gray-800 hover:border-[#1E3A8A] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#1E3A8A]/30 transition-all duration-500"
            >
              {/* Gambar Project */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Isi Card */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">
                  {proj.title}
                </h3>
                
                <p className="text-[#3B82F6] font-medium text-sm mb-4">
                  {proj.role}
                </p>

                <p className="text-[#94A3B8] text-base leading-relaxed mb-6 line-clamp-4">
                  {proj.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {proj.tech?.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-1.5 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link Buttons */}
                <div className="flex flex-wrap gap-3">
                  {proj.github && (
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-2xl text-sm font-semibold transition"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}

                  {proj.prototype && (
                    <a 
                      href={proj.prototype} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#3B82F6] text-white py-3 rounded-2xl text-sm font-semibold transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Prototype
                    </a>
                  )}

                  {proj.otherLink && (
                    <a 
                      href={proj.otherLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-2xl text-sm font-semibold transition"
                    >
                      Lihat File
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;