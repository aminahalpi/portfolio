import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Education
        </motion.h2>

        {/* Timeline Item */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative pl-8 border-l-2 border-[#1E3A8A]/30"
        >
          {/* Titik Timeline */}
          <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#1E3A8A] border-4 border-[#0F172A]" />

          <div className="bg-gray-900 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-white">
                Sistem Informasi (S1)
              </h3>
              <span className="text-[#3B82F6] font-medium">2023 – 2027</span>
            </div>

            <p className="text-[#94A3B8] text-lg mb-3">
              Universitas Ahmad Dahlan, Yogyakarta
            </p>
            
            <p className="text-[#64748B] mb-6">
              Mahasiswa Semester 6 • IPK: <span className="text-white font-medium">3.37</span>
            </p>

            <div className="text-[#64748B]">
              Expected Graduation: <span className="text-white">Agustus 2027</span>
            </div>

            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;