import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Aminah Alfi Zuriah</div>
        <div className="hidden md:flex space-x-6 text-textLight">
          <a href="#hero" className="hover:text-accent">Home</a>
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#education" className="hover:text-accent">Education</a>
          <a href="#skills" className="hover:text-accent">Skills</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#experience" className="hover:text-accent">Experience</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>
        <div className="md:hidden text-textLight">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-4 py-4 bg-secondary text-textLight">
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-accent">Home</a>
          // Tambah link lain
        </div>
      )}
    </nav>
  );
};

export default Navbar;