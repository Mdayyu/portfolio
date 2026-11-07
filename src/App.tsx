import React, { useState } from 'react';
import { Box, Container, Typography, Button, IconButton, GlobalStyles, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { keyframes } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

// 1. Animasi serong kiri-kanan & goyang acak
const jiggleRotateAnimation = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotate(0deg) scale(1); 
  }
  25% { 
    transform: translateY(-5px) rotate(-8deg) scale(1.06); 
  }
  75% { 
    transform: translateY(4px) rotate(8deg) scale(0.96);  
  }
`;

// 2. Palet warna ceria ala Ine Agresta
const letterColors = ['#FF2E2E', '#20B2AA', '#FF69B4', '#FFA500', '#FF2E2E', '#20B2AA'];

// Font khusus bagian About (mirip font di referensi Ine Agresta)
const ABOUT_FONT = "'Andika', sans-serif";

// 3. Helper function untuk memecah huruf dan memberi efek animasi acak
const renderPlayfulText = (text: string) => {
  return text.split('').map((char, index) => {
    if (char === ' ') return ' ';

    const duration = index % 2 === 0 ? '1.6s' : '2.0s';
    const delay = `${(index * 0.12) % 0.6}s`;

    return (
      <Box
        key={index}
        component="span"
        sx={{
          display: 'inline-block',
          color: letterColors[index % letterColors.length],
          animation: `${jiggleRotateAnimation} ${duration} ease-in-out infinite`,
          animationDelay: delay,
          transformOrigin: 'center bottom',
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        }}
      >
        {char}
      </Box>
    );
  });
};

// Ikon sosial: lebih kecil di HP supaya logo + 4 ikon muat satu baris
const socialBtnSx = {
  bgcolor: 'white',
  boxShadow: 1,
  p: { xs: '6px', sm: '8px' },
  '&:hover': { bgcolor: 'white', transform: 'scale(1.1)' },
};

// Menu "pil" untuk mobile & tablet kecil
const pillSx = {
  fontFamily: ABOUT_FONT,
  px: 2,
  py: 0.75,
  borderRadius: '50px',
  bgcolor: 'white',
  border: '1px solid #EAE6DF',
  color: '#555',
  fontSize: '0.85rem',
  fontWeight: 700,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  '&:hover': { bgcolor: '#F3F4F6', color: '#1A1A1A' },
};

export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projectsData = [
    {
      id: 1,
      title: 'Jogja Sweep (Route Optimization)',
      description: 'Sistem optimasi rute kawasan kampus menggunakan algoritma Ant Colony Optimization.',
      image: '/project1.png',
      link: 'https://github.com/Mdayyu/RouteMapsFE',
    },
    {
      id: 2,
      title: 'Katalog Bibit Tanaman',
      description: 'Website katalog online interaktif untuk menampilkan berbagai pilihan bibit tanaman berkualitas.',
      image: '/project2.png',
      link: 'https://github.com/Mdayyu/catalog-website',
    },
    {
      id: 3,
      title: 'Liberi RS Carolus UI Components',
      description: 'Pengembangan komponen antarmuka web fleksibel dan integrasi API rumah sakit.',
      image: '/project3.png',
      link: 'https://github.com/Mdayyu/liberi-rs-carolus',
    },
    {
      id: 4,
      title: 'Jelajah Wisata Indonesia',
      description:
        'Platform web interaktif untuk mengeksplorasi berbagai destinasi wisata menarik dan ikonik di seluruh Indonesia dengan antarmuka yang modern.',
      image: '/project4.png',
      link: 'https://github.com/Mdayyu/Rekomendasi_Destinasi_Wisatawan',
    },
    {
      id: 5,
      title: 'UI/UX Design BRS Kampus (Web & Mobile)',
      description:
        'Desain antarmuka pengguna berbasis Figma untuk platform BRS Kampus yang mencakup versi website dan aplikasi mobile.',
      image: '/project5.png',
      link: 'https://www.figma.com/design/B3niX516VyMBkDjjxdyrm7/BRS-Mobile?node-id=0-1&p=f&t=n6lg26n3xJ89BBvv-0',
    },
  ];

  const displayedProjects = showAllProjects ? projectsData : projectsData.slice(0, 3);

  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          '@import':
            "url('https://fonts.googleapis.com/css2?family=Andika:wght@400;700&family=Fredoka:wght@600;700&family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap')",
          html: {
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#F9F8F6',
            scrollBehavior: 'smooth',
            overflowX: 'hidden',
          },
          body: {
            margin: 0,
            padding: 0,
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#F9F8F6',
            overflowX: 'hidden',
          },
          '#root': { width: '100%', minHeight: '100vh' },
          img: { maxWidth: '100%' },
          // supaya judul section tidak tertutup saat klik menu
          '#about, #experience, #projects': { scrollMarginTop: '8px' },
        }}
      />

      <Box
        id="about"
        sx={{
          pt: { xs: 0, lg: 2 },
          pb: { xs: 6, md: 8, lg: 12 },
          position: 'relative',
          overflow: 'hidden',
          bgcolor: '#F9F8F6',
        }}
      >
        {/* --- Background AVIF: strip samping (tablet besar & desktop) --- */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '42%',
            height: '100%',
            backgroundImage: `url('/background.avif')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
            display: { xs: 'none', lg: 'block' },
          }}
        />

        {/* --- Background AVIF: pita di atas halaman (mobile & tablet kecil) --- */}
        <Box
          sx={{
            display: { xs: 'block', lg: 'none' },
            height: { xs: 40, sm: 56, md: 64 },
            backgroundImage: `url('/background.avif')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            zIndex: 1,
          }}
        />

        {/* --- NAVBAR --- */}
        <Container
          maxWidth="lg"
          sx={{
            py: { xs: 2, sm: 3, md: 4 },
            px: { xs: 2, sm: 3 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 1, sm: 2 },
            }}
          >
            {/* Logo */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontFamily: "'Fredoka', sans-serif",
                fontSize: { xs: '1.3rem', sm: '1.75rem', md: '2.125rem' },
                whiteSpace: 'nowrap',
              }}
            >
              <Box component="span" sx={{ mr: 1, display: 'inline-block' }}>
                {renderPlayfulText(' MADE')}
              </Box>
              <Box component="span" sx={{ display: 'inline-block' }}>
                {renderPlayfulText('AYU ')}
              </Box>
            </Typography>

            {/* Menu Navigasi (laptop & tablet besar) */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 4,
                fontWeight: 500,
                fontSize: '0.95rem',
                mr: 'auto',
                ml: 6,
              }}
            >
              <Box component="a" href="#about" sx={{ color: 'inherit', textDecoration: 'none' }}>Tentang Saya</Box>
              <Box component="a" href="#experience" sx={{ color: 'inherit', textDecoration: 'none' }}>Pengalaman</Box>
              <Box component="a" href="#projects" sx={{ color: 'inherit', textDecoration: 'none' }}>Proyek</Box>
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: { xs: 0.75, sm: 1.5 } }}>
              <IconButton component="a" href="https://github.com/Mdayyu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" sx={socialBtnSx}>
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton component="a" href="https://www.linkedin.com/in/ni-made-ayu-sukmawardani" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" sx={socialBtnSx}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton component="a" href="https://www.instagram.com/mdayyuu?vrfl=MWgyZXdvZGZ3ZGNpZw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" sx={socialBtnSx}>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton component="a" href="mailto:mdayyu3@gmail.com" aria-label="Email" sx={socialBtnSx}>
                <EmailIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          {/* Menu Navigasi untuk mobile & tablet kecil */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              gap: 1,
              mt: 2,
              overflowX: 'auto',
              pb: 0.5,
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
            }}
          >
            <Box component="a" href="#about" sx={pillSx}>Tentang Saya</Box>
            <Box component="a" href="#experience" sx={pillSx}>Pengalaman</Box>
            <Box component="a" href="#projects" sx={pillSx}>Proyek</Box>
          </Box>
        </Container>

        {/* --- HERO SECTION --- */}
        <Container
          maxWidth="lg"
          sx={{
            py: { xs: 2, md: 4, lg: 8 },
            px: { xs: 2, sm: 3 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              // HP & tablet kecil: bertumpuk (foto di atas). Tablet besar ke atas: 2 kolom.
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'stretch', md: 'flex-start' },
              justifyContent: 'space-between',
              gap: { xs: 3, md: 4, lg: 8 },
            }}
          >
            {/* Sisi Kiri: Teks & Perkenalan */}
            <Box
              sx={{
                flex: 1,
                width: '100%',
                minWidth: 0,
                // tablet kecil: dibatasi lebarnya & di tengah supaya baris teks tidak terlalu panjang
                maxWidth: { xs: '100%', sm: '640px', md: 'none' },
                mx: { sm: 'auto', md: 0 },
              }}
            >
              <Box sx={{ display: 'inline-block', mb: 2 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: ABOUT_FONT,
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    color: '#20B2AA',
                    bgcolor: '#E6F4F1',
                    px: 2,
                    py: 0.8,
                    borderRadius: '50px',
                    border: '1px solid #B2DFDB',
                  }}
                >
                  FRONT-END DEVELOPER
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: `${ABOUT_FONT} !important`,
                  fontSize: { xs: '1.9rem', sm: '2.4rem', md: '2.4rem', lg: '2.8rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.5px',
                  lineHeight: 1.2,
                  mb: 2.5,
                  color: '#1A1A1A',
                }}
              >
                Halo, Saya Ayu!
              </Typography>

              {/* Teks Perkenalan */}
              <Box
                sx={{
                  fontFamily: `${ABOUT_FONT} !important`,
                  fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.02rem' },
                  color: '#555',
                  lineHeight: { xs: 1.8, md: 1.9 },
                  letterSpacing: '0.02em',
                  maxWidth: { xs: '100%', md: '560px', lg: '580px' },
                  fontWeight: 400,
                }}
              >
                <Typography component="p" sx={{ mb: 2, fontFamily: 'inherit', fontSize: 'inherit', color: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' }}>
                  Selamat datang di portofolio saya! Saya seorang pengembang <i>frontend</i> yang sangat suka merancang <i>user interfaces</i> yang mudah diakses dan presisi. Saya bangga dapat menciptakan produk yang dirancang dengan cermat dan inklusif, serta memiliki mata yang tajam terhadap detail-detail kecil yang membedakan produk yang baik dari yang luar biasa. Saya paling menikmati bekerja di titik temu antara desain dan teknik, di mana pengalaman visual yang estetis berpadu dengan kode yang rapi dan skalabel.
                </Typography>

                <Typography component="p" sx={{ mb: 2, fontFamily: 'inherit', fontSize: 'inherit', color: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' }}>
                  Perjalanan saya di dunia teknologi dibentuk melalui pengalaman nyata di industri. Saya pernah berperan sebagai <i>Frontend Developer</i> maupun <i>Quality Assurance</i> (QA).
                </Typography>

                <Typography component="p" sx={{ mb: 3, fontFamily: 'inherit', fontSize: 'inherit', color: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' }}>
                  Saat ini, fokus utama saya adalah membantu mengembangkan bisnis bibit tanaman milik ayah, mulai dari bunga hingga buah lokal maupun impor. Saya terlibat dalam promosi di media sosial, pembuatan katalog web, pengaturan titik Google Maps, hingga desain banner. Di waktu luang, saya menikmati merajut, membuat konten di Lemon8, dan memasak.
                </Typography>
              </Box>

              {/* Tombol Aksi: penuh di HP, berdampingan di tablet ke atas */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, pt: 1 }}>
                <Button
                  variant="contained"
                  href="#projects"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    fontFamily: ABOUT_FONT,
                    bgcolor: '#FF4A4A',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontWeight: 700,
                    boxShadow: '0px 10px 20px rgba(255, 74, 74, 0.25)',
                    '&:hover': { bgcolor: '#E03B3B' },
                  }}
                >
                  Lihat Proyek
                </Button>
                <Button
                  variant="outlined"
                  href="mailto:mdayyu3@gmail.com"
                  sx={{
                    fontFamily: ABOUT_FONT,
                    borderColor: '#DDD',
                    color: '#333',
                    bgcolor: 'white',
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontWeight: 700,
                    '&:hover': { bgcolor: '#F5F5F5', borderColor: '#CCC' },
                  }}
                >
                  Hubungi Saya
                </Button>
              </Box>
            </Box>

            {/* Sisi Kanan: Foto Profil (di HP & tablet kecil tampil paling atas) */}
            <Box
              sx={{
                order: { xs: -1, md: 0 },
                width: { xs: '62%', sm: '280px', md: '340px', lg: '420px' },
                maxWidth: { xs: '240px', sm: '280px', md: '340px', lg: '420px' },
                flexShrink: 0,
                alignSelf: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/5',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  border: '4px solid white',
                }}
              >
                <Box
                  component="img"
                  src="/profile.png"
                  alt="Ni Made Ayu Sukmawardani"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* --- TECH STACK & EXPERTISE --- */}
          <Box
            sx={{
              mt: { xs: 4, lg: 6 },
              p: { xs: 2.5, sm: 3, md: 3.5 },
              bgcolor: 'white',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
              border: '1px solid #F0F0F0',
              maxWidth: { xs: '100%', sm: '640px', md: '560px', lg: '580px' },
              mx: { sm: 'auto', md: 0 },
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: ABOUT_FONT, fontWeight: 700, mb: 2, color: '#2C2C2C', fontSize: '1rem' }}>
              Tech Stack & Expertise
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, sm: 1.2 } }}>
              {[
                'React.js',
                'TypeScript',
                'JavaScript',
                'Material UI',
                'Tailwind CSS',
                'Express.js',
                'Python',
                'Git / GitHub',
                'UI/UX Design Testing',
                'Figma',
              ].map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    fontFamily: ABOUT_FONT,
                    bgcolor: '#F3F4F6',
                    fontWeight: 600,
                    color: '#4B5563',
                    px: 0.5,
                    py: 1.5,
                    borderRadius: '10px',
                    fontSize: { xs: '0.78rem', sm: '0.85rem' },
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: '#E5E7EB',
                      transform: 'translateY(-2px)',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* --- EXPERIENCE SECTION --- */}
      <Box
        id="experience"
        sx={{
          py: { xs: 6, md: 8, lg: 12 },
          position: 'relative',
          bgcolor: '#FAF8F5',
          backgroundImage: `url('/bg2.png')`,
          backgroundRepeat: 'repeat',
          borderTop: '1px solid #EAE6DF',
          borderBottom: '1px solid #EAE6DF',
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3, md: 6 } }}>
          <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: { xs: 'center', md: 'left' }, pl: { md: 2 } }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                letterSpacing: '1.5px',
                color: '#20B2AA',
                bgcolor: 'white',
                px: 2,
                py: 0.8,
                borderRadius: '50px',
                border: '1px solid #B2DFDB',
                boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
              }}
            >
              PENGALAMAN KERJA
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Fredoka', sans-serif !important",
                fontSize: { xs: '1.6rem', sm: '2rem', md: '2.4rem' },
                fontWeight: 700,
                mt: 2,
                color: '#2C2C2C',
              }}
            >
              Pengalaman Profesional
            </Typography>
          </Box>

          {/* 1 kolom di HP & tablet kecil, 2 kolom mulai tablet besar */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: { xs: 3, md: 3, lg: 4 },
              maxWidth: { sm: '720px', md: 'none' },
              mx: { sm: 'auto', md: 0 },
            }}
          >
            {/* Experience Item 1 */}
            <Box
              sx={{
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                p: { xs: 2.5, sm: 3.5, md: 3, lg: 5 }, bgcolor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(8px)',
                borderRadius: '24px', border: '1px solid #EFECE6', boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                transition: 'all 0.3s ease', '&:hover': { bgcolor: 'white', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', transform: 'translateY(-4px)' },
              }}
            >
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#20B2AA', letterSpacing: '0.5px', mb: 1.5 }}>
                  JAN 2026 — MEI 2026
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#1A1A1A', mb: 0.5, fontSize: { xs: '1.1rem', md: '1.2rem', lg: '1.35rem' } }}>
                  Quality Assurance (QA) - Intern
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#6B7280', mb: 2.5, fontSize: { xs: '0.92rem', md: '1rem' } }}>
                  PT Digital Nusantara Adisolusi
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, mb: 4, fontSize: { xs: '0.88rem', md: '0.92rem', lg: '0.95rem' } }}>
                  Melakukan pengujian antarmuka pengguna (UI/UX) secara menyeluruh pada aplikasi web, memvalidasi kesesuaian desain Figma dengan implementasi frontend, menguji fungsionalitas API backend menggunakan Postman, serta mencatat dan melaporkan kendala teknis (bug).
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2, pt: 3, borderTop: '1px solid #F0EEEC' }}>
                {['UI/UX Testing', 'Figma', 'Bug Reporting', 'Web Testing'].map((tech) => (
                  <Chip key={tech} label={tech} sx={{ bgcolor: '#E6F4F1', color: '#20B2AA', fontWeight: 600, fontSize: { xs: '0.78rem', sm: '0.85rem' }, borderRadius: '10px', px: 1 }} />
                ))}
              </Box>
            </Box>

            {/* Experience Item 2 */}
            <Box
              sx={{
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                p: { xs: 2.5, sm: 3.5, md: 3, lg: 5 }, bgcolor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(8px)',
                borderRadius: '24px', border: '1px solid #EFECE6', boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                transition: 'all 0.3s ease', '&:hover': { bgcolor: 'white', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', transform: 'translateY(-4px)' },
              }}
            >
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#FF4A4A', letterSpacing: '0.5px', mb: 1.5 }}>
                  AGT 2025 — JAN 2026
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#1A1A1A', mb: 0.5, fontSize: { xs: '1.1rem', md: '1.2rem', lg: '1.35rem' } }}>
                  Frontend Developer - Intern
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#6B7280', mb: 2.5, fontSize: { xs: '0.92rem', md: '1rem' } }}>
                  PT Digital Nusantara Adisolusi
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, mb: 4, fontSize: { xs: '0.88rem', md: '0.92rem', lg: '0.95rem' } }}>
                  Mengembangkan komponen antarmuka web yang fleksibel menggunakan React, menerjemahkan rancangan visual Figma menjadi kode antarmuka, melakukan pengujian API menggunakan Postman, serta menindaklanjuti permintaan perubahan (change request) dari klien terkait pembaruan data rumah sakit.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2, pt: 3, borderTop: '1px solid #F0EEEC' }}>
                {['React.js', 'JavaScript', 'Figma', 'Postman', 'UI Components'].map((tech) => (
                  <Chip key={tech} label={tech} sx={{ bgcolor: '#FEE2E2', color: '#EF4444', fontWeight: 600, fontSize: { xs: '0.78rem', sm: '0.85rem' }, borderRadius: '10px', px: 1 }} />
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* --- PROJECTS SECTION --- */}
      <Box
        id="projects"
        sx={{
          pt: { xs: 6, md: 8, lg: 12 },
          pb: { xs: 2, md: 3, lg: 4 },
          position: 'relative',
          bgcolor: '#FFFFFF',
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3, md: 6 } }}>
          {/* Header & Tombol Lihat Semua */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              mb: { xs: 3, md: 6 },
              flexWrap: 'wrap',
              gap: { xs: 1, md: 2 },
            }}
          >
            <Box>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  color: '#FF4A4A',
                  bgcolor: '#FFF5F5',
                  px: 2,
                  py: 0.8,
                  borderRadius: '50px',
                  border: '1px solid #FED7D7',
                  fontSize: '0.75rem',
                }}
              >
                PROYEK UNGGULAN
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Fredoka', sans-serif !important",
                  fontSize: { xs: '1.6rem', sm: '2rem', md: '2.4rem' },
                  fontWeight: 700,
                  mt: 1.5,
                  color: '#2C2C2C',
                }}
              >
                Proyek Saya
              </Typography>
            </Box>

            <Button
              onClick={() => setShowAllProjects(!showAllProjects)}
              sx={{
                ml: { xs: -1, sm: 0 },
                color: '#20B2AA',
                fontWeight: 700,
                fontSize: '0.9rem',
                textTransform: 'none',
                fontFamily: "'Fredoka', sans-serif !important",
                '&:hover': { bgcolor: 'transparent', color: '#16827C', textDecoration: 'underline' },
              }}
            >
              {showAllProjects ? 'Tampilkan Lebih Sedikit ←' : 'Lihat Semua Proyek →'}
            </Button>
          </Box>

          {/* Grid proyek: 1 kolom (HP), 2 kolom (tablet kecil), 3 kolom (tablet besar & desktop) */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: { xs: 3, md: 3 },
              justifyItems: 'center',
            }}
          >
            {displayedProjects.map((project) => (
              <Box
                key={project.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  maxWidth: { xs: '100%', lg: '320px' },
                  transition: 'all 0.3s ease',
                  '&:hover .project-img': { transform: 'scale(1.05)' },
                  '&:hover .learn-more': { color: '#FF4A4A', transform: 'translateX(4px)' },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    aspectRatio: '16/10',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    bgcolor: '#F8F9FA',
                    p: { xs: 1.5, sm: 2, lg: 2.5 },
                    mb: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    border: '1px solid #EFEFEF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component="img"
                    className="project-img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '10px',
                      transition: 'transform 0.4s ease',
                    }}
                  />
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#1A1A1A',
                    fontSize: '1rem',
                    lineHeight: 1.3,
                    mb: 0.8,
                    fontFamily: "'Fredoka', sans-serif !important",
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    fontSize: '0.825rem',
                    lineHeight: 1.5,
                    mb: 1.5,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {project.description}
                </Typography>

                <Box
                  component="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="learn-more"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: '#FF69B4',
                    fontWeight: 700,
                    fontSize: '0.825rem',
                    textDecoration: 'none',
                    mt: 'auto',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Lihat Detail →
                </Box>
              </Box>
            ))}
          </Box>

          {/* --- FOOTER SECTION --- */}
          <Box
            component="footer"
            sx={{
              pt: { xs: 3, md: 4 },
              pb: { xs: 1, md: 2 },
              px: { xs: 1, sm: 3 },
              bgcolor: '#FFFFFF',
              borderTop: '1px solid #F0F0F0',
              textAlign: 'center',
              mt: { xs: 4, md: 6 },
            }}
          >
            <Container maxWidth="md">
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "'Inter', sans-serif !important",
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  color: '#666666',
                  lineHeight: 1.8,
                }}
              >
                Dirancang secara kasar menggunakan <strong>Figma</strong> dan diketik di <strong>Visual Studio Code</strong> oleh saya sendiri. Dibuat menggunakan <strong>React</strong>, <strong>TypeScript</strong>, dan <strong>Material UI</strong>, serta dideploy dengan <strong>Vercel</strong>.
              </Typography>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
}