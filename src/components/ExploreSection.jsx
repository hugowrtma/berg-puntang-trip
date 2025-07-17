import React from 'react';

const images = [
  '/assets/1.png',
  '/assets/2.png',
  '/assets/3.png',
  '/assets/4.png',
  '/assets/5.png',
  '/assets/6.png',
  '/assets/7.png',
  '/assets/8.png',
  '/assets/9.png',
];

const ExploreSection = () => {
  return (
    <section id="explore" className="bg-leaf/80 text-forest py-20 px-8 md:px-16">
      <h2 className="text-3xl font-heading mb-6">pesona green corner</h2>

      <p className="mb-10 max-w-3xl text-justify text-sm md:text-base text-forest">
        Green Corner adalah tempat camping dan glamping bernuansa alam yang terletak di tepi <strong>Situ Cileunca</strong>, Pangalengan, Bandung. Dikelilingi kabut pagi, danau tenang, serta pepohonan rindang — tempat ini cocok untuk <em>healing</em>, BBQ malam, dan menikmati keindahan sunrise & sunset dari dua area unik: <strong>Green Corner (main)</strong> dan <strong>GC Land</strong> yang hanya bisa dijangkau dengan perahu.
      </p>

      {/* Galeri Foto */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`spot-${index + 1}`}
            className={`rounded-lg shadow-md object-cover h-52 w-full ${
              index === 8 ? 'hidden sm:block' : ''
            }`}
          />
        ))}
      </div>

      {/* Daftar Aktivitas */}
      <ul className="list-disc pl-5 text-sm text-forest space-y-1 mb-6">
        <li>Camping tepi danau dengan pemandangan sunrise & sunset</li>
        <li>Area GC Land yang privat & hanya bisa diakses dengan perahu</li>
        <li>Fasilitas lengkap: toilet, musala, warung, listrik</li>
        <li>Aktivitas seru: rafting, perahu, flying fox, paintball</li>
        <li>Suasana pagi berkabut dan udara super sejuk</li>
        <li>Area glamping dengan tenda nyaman & estetik</li>
        <li>Spot foto alam di dermaga & pinggir danau</li>
        <li>BBQ & api unggun malam bareng teman-teman</li>
      </ul>

      {/* Info Praktis */}
      <div className="bg-cream/90 rounded-md p-4 text-sm space-y-2 mb-8">
        <p><strong>📍 Lokasi:</strong> Situ Cileunca, Pangalengan, Kab. Bandung</p>
        <p><strong>⛺ HTM Camping Mandiri:</strong> Rp35.000/orang (bawa tenda sendiri)</p>
        <p><strong>🏕️ Glamping:</strong> tersedia, harga tergantung paket & fasilitas</p>
        <p><strong>🛶 Akses GC Land:</strong> via perahu dari dermaga utama</p>
        <p><strong>📷 Waktu terbaik:</strong> pagi & sore untuk foto dan suasana syahdu</p>
      </div>

      {/* Quote */}
      <p className="text-center text-cream italic font-body">
        “Tidur di tepi danau, bangun bersama kabut dan cahaya pagi yang lembut.”
      </p>
    </section>
  );
};

export default ExploreSection;
