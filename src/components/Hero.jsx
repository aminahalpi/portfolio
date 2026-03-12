import { motion } from 'framer-motion';
import { aboutText } from '../data/about';   // nanti kita pakai ini di About
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="section min-h-screen flex items-center relative overflow-hidden">
      {/* Background glossy hitam gelap */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0F172A] to-[#1E2937] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#1E3A8A10_0%,transparent_70%)] z-0" /> {/* glossy effect */}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Foto Profil Kiri + Animasi Pop-up */}
        <motion.div 
          initial={{ opacity: 0, y: -80, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <img 
              src={profileImg} 
              alt="Aminah Alfi Zuriah"
              className="w-80 h-90 md:w-96 md:h-100 rounded-3xl object-cover shadow-2xl border-4 border-[#1E3A8A]/30"
            />
            {/* Glow biru navy */}
            <div className="absolute -inset-6 bg-[#1E3A8A] rounded-3xl blur-3xl opacity-20 -z-10" />
          </div>
        </motion.div>

        {/* Teks Kanan */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Aminah Alfi Zuriah
          </h1>
          
          <p className="text-2xl md:text-3xl text-[#94A3B8] mb-6">
            {/* GANTI DI SINI sesuai pilihanmu */}
            Frontend Developer & UI/UX Designer
          </p>

          <p className="text-lg text-[#64748B] mb-8 max-w-md">
            Mahasiswa Sistem Informasi UAD yang passionate membangun antarmuka digital yang bersih, responsif, dan user-friendly.
          </p>

          {/* Currently building */}
          <p className="text-sm text-[#64748B] mb-8 italic">
            Currently building my portfolio with React + Node.js
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
  <a href="/cv-frontend.pdf" download className="btn bg-transparent border border-[#1E3A8A]">
    Download CV Frontend
  </a>
  <a href="/cv-uiux.pdf" download className="btn bg-transparent border border-[#1E3A8A]">
    Download CV UI/UX
  </a>
</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;