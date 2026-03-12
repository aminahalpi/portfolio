import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // success / error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      'service_v7y8d6m',      // ← Ganti
      'template_0gwnrii',     // ← Ganti
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'BSflCNsPW31BiHnWO'       // ← Ganti
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => setStatus('error'));
  };

  return (
    <section id="contact" className="section">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Info Kontak Kiri */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#3B82F6]" />
              <div>
                <p className="text-[#94A3B8]">Email</p>
                <p className="text-white">2300016115@webmail.uad.ac.id</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-[#3B82F6]" />
              <div>
                <p className="text-[#94A3B8]">Phone / WA</p>
                <p className="text-white">+62 896 2768 4132</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-[#3B82F6]" />
              <div>
                <p className="text-[#94A3B8]">Location</p>
                <p className="text-white">Yogyakarta</p>
              </div>
            </div>
          </div>

          {/* Form Kirim Pesan */}
          <form onSubmit={sendEmail} className="bg-gray-900 p-8 rounded-3xl">
            <div className="space-y-6">
              <input 
                type="text" name="name" value={formData.name} onChange={handleChange}
                placeholder="Nama Lengkap" required
                className="w-full bg-transparent border border-gray-700 focus:border-[#3B82F6] rounded-xl px-5 py-4"
              />
              <input 
                type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="Email" required
                className="w-full bg-transparent border border-gray-700 focus:border-[#3B82F6] rounded-xl px-5 py-4"
              />
              <textarea 
                name="message" value={formData.message} onChange={handleChange}
                rows="5" placeholder="Pesan / Ajukan magang..." required
                className="w-full bg-transparent border border-gray-700 focus:border-[#3B82F6] rounded-xl px-5 py-4 resize-none"
              />

              <button 
                type="submit"
                disabled={status === 'sending'}
                className="btn w-full py-4 text-lg flex items-center justify-center gap-2"
              >
                {status === 'sending' ? 'Mengirim...' : 'Kirim Pesan'}
                <Send className="w-5 h-5" />
              </button>

              {status === 'success' && <p className="text-green-400 text-center">✅ Pesan berhasil terkirim!</p>}
              {status === 'error' && <p className="text-red-400 text-center">❌ Gagal mengirim. Coba lagi.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;