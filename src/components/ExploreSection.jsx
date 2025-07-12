import React from 'react';

const images = [
  '/assets/puntang-1.jpg',
  '/assets/puntang-2.jpg',
  '/assets/puntang-3.jpg',
  '/assets/puntang-4.jpg',
  '/assets/puntang-5.jpg',
  '/assets/puntang-6.jpg',
  '/assets/puntang-7.jpg',
  '/assets/puntang-8.jpg',
  '/assets/puntang-9.jpg',
];

const ExploreSection = () => {
  return (
    <section id="explore" className="bg-leaf/80 text-forest py-20 px-8 md:px-16">
      <h2 className="text-3xl font-heading mb-6">Pesona Berg Puntang</h2>

      <p className="mb-10 max-w-3xl text-sm md:text-base text-forest">
        Berg Puntang adalah destinasi unik di kaki Gunung Puntang, Bandung, yang menggabungkan pesona alam pegunungan, situs sejarah peninggalan kolonial, dan suasana kafe modern. Tempat ini dulunya adalah lokasi <strong>Stasiun Radio Malabar</strong> yang dibangun tahun 1917 dan berperan penting dalam sejarah komunikasi kolonial. Kini, puing-puingnya menjadi bagian dari lanskap yang estetik dan otentik — cocok untuk healing, foto-foto, atau sekadar duduk santai sambil ngopi.
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

      {/* Daftar Wisata */}
      <ul className="list-disc pl-5 text-sm text-forest space-y-1 mb-6">
        <li>Panorama pegunungan & udara sejuk</li>
        <li>Area camping luas dan rindang</li>
        <li>Reruntuhan Radio Malabar (1917–1946)</li>
        <li>Kafe Berg Puntang dengan view terbuka</li>
        <li>Sungai Cihanjawar yang jernih</li>
        <li>Jalur tracking ringan–menengah</li>
        <li>Spot foto alam yang Instagramable</li>
        <li>Malam api unggun & BBQ seru bareng teman</li>
      </ul>

      {/* Tips */}
      <div className="bg-cream/90 rounded-md p-4 text-sm space-y-2 mb-8">
        <p><strong>📍 Lokasi:</strong> Jl. Gn. Puntang, Pasirmulya, Banjaran, Bandung</p>
        <p><strong>⛺ HTM:</strong> Rp25.000/orang (area wisata), Rp10.000 masuk kafe, camping mulai dari Rp200.000/2 orang</p>
        <p><strong>🕗 Jam buka:</strong> 08.00 – 20.00 WIB (setiap hari)</p>
        <p><strong>📷 Waktu terbaik:</strong> pagi hari saat cerah, terutama musim kemarau</p>
      </div>

      {/* Quote */}
      <p className="text-center text-cream italic font-body">
        “Dari ketenangan alam hingga momen kebersamaan, Berg Puntang siap menyambut kita.”
      </p>
    </section>
  );
};

export default ExploreSection;
