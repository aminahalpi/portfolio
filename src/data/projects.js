import gicareHome from '../assets/images/gicare/home.png'
import gicareDokter from '../assets/images/gicare/dokter.png'
import gicareLayanan from '../assets/images/gicare/layanan.png'
import gicareReservasi from '../assets/images/gicare/reservasi.png'
import hitnewsImg from '../assets/images/hitnews.png'
import adistyImg from '../assets/images/adisty.png'
import manajemenImg from '../assets/images/manajemen.png'
import posterAdisty1 from '../assets/images/poster/adisty1.png'
import posterAdisty2 from '../assets/images/poster/adisty2.png'
import posterHitnews from '../assets/images/poster/hitnews.png'
import posterManajamen1 from '../assets/images/poster/manajamen1.png'
import portfolioImg from '../assets/images/portfolio.png'

export const projects = [
  {
    title: 'GiCare UAD – Web Reservasi Klinik Mahasiswa',
    role: 'Full Frontend Developer',
    description: 'Mengembangkan aplikasi web reservasi klinik gigi berbasis React yang memungkinkan mahasiswa melakukan pendaftaran dan pengelolaan jadwal secara mandiri. Fitur meliputi sistem reservasi (CRUD), informasi layanan, jadwal dokter, dan integrasi Firebase sebagai database.',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com/aminahalpi/gicare-uad-app',
    images: [
      gicareHome,
      gicareDokter,
      gicareLayanan,
      gicareReservasi
    ],
  },
  {
    title: 'Hit News – Aplikasi Berita Berbasis Flutter',
    role: 'UI/UX Designer (Wireframe & Prototype)',
    description: 'Merancang wireframe dan prototype aplikasi berita berbasis Flutter dengan fokus pada user flow yang terstruktur dan antarmuka yang bersih. Prototype mencakup fitur login, pencarian berita, bookmark, notifikasi, dark mode, serta halaman akun dan pengaturan.',
    tech: ['Figma', 'Flutter'],
    github: 'https://github.com/FaishalAbyan/HitNews',
    prototype: 'https://www.figma.com/proto/scLkUS6oydyg0JmZU95ICi',
    images: [hitnewsImg],
  },
  {
    title: 'Pengembangan Fitur Aplikasi Adisty UAD',
    role: 'UI/UX Designer',
    description: 'Berkontribusi dalam perancangan fitur pembayaran berbasis NFC pada aplikasi Adisty UAD dengan merancang ulang user flow dan prototype interaktif di Figma. Proyek dipresentasikan dalam pameran akademik sebagai hasil kolaborasi riset UX.',
    tech: ['Figma'],
    prototype: 'https://www.figma.com/proto/9bGukHa9CfSKbQpw8pQlQu',
    images: [adistyImg],
  },
  {
    title: 'Website Manajemen Tanda Tangan Proyek',
    role: 'UI/UX Designer & Documentation Support',
    description: 'Merancang prototype website manajemen tanda tangan digital untuk mempermudah proses persetujuan dokumen. Bertanggung jawab pada desain UI/UX serta penyusunan dokumentasi sistem dengan fokus pada navigasi yang sederhana dan efisien.',
    tech: ['Figma'],
    prototype: 'https://www.figma.com/proto/UyOkdMJzpuB8rGr6SyeWX4',
    images: [manajemenImg],
  },
  {
    title: 'Desain Poster & Thumbnail Presentasi Proyek',
    role: 'Visual & Layout Designer',
    description: 'Mendesain poster presentasi proyek untuk menyampaikan konsep sistem dan hasil riset secara visual. Fokus pada tata letak yang informatif, rapi, dan mudah dipahami dalam konteks presentasi akademik.',
    tech: ['Canva', 'Figma'],
    otherLink: 'https://drive.google.com/drive/folders/1AjziR04_K83TV4GHwHoNTKvbNeIp_DgP',
    images: [
      posterAdisty1,
      posterAdisty2,
      posterHitnews,
      posterManajamen1
    ],
  },
  {
    title: 'Website Portfolio Pribadi',
    role: 'Frontend Developer',
    description: 'Mengembangkan website portfolio pribadi untuk menampilkan proyek dan kompetensi teknis. Dibangun menggunakan React dan Tailwind CSS dengan dukungan backend Node.js serta integrasi dokumentasi visual setiap proyek.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'JavaScript'],
    github: 'https://github.com/aminahalpi/portfolio',
    images: [portfolioImg],
  }
]