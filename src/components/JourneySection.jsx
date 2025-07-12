import React from 'react';

const JourneySection = () => {
  return (
    <section id="journey" className="bg-leaf/80 text-forest py-20 px-8 md:px-16">
      <h2 className="text-3xl font-heading mb-4">rute perjalanan</h2>
      <p className="mb-10 text-sm md:text-base max-w-2xl">
        Perjalanan dimulai dari <strong>Bekasi</strong> menuju <strong>BERG Puntang</strong>,
        melintasi jalur utama Tol Cipularang hingga Soreang. Nikmati suasana perjalanan sambil menikmati pemandangan perbukitan dan udara yang semakin sejuk.
      </p>

      {/* MAP EMBED */}
      <div className="w-full h-64 md:h-96 rounded-md overflow-hidden shadow-soft">
        <iframe
          title="Lokasi BERG Puntang"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.0842755133453!2d107.60336087540917!3d-7.1162321928873995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6895eff36e110b%3A0xd8ef34152d051adf!2sBERG%20Puntang!5e0!3m2!1sid!2sid!4v1751871949203!5m2!1sid!2sid"
        ></iframe>
      </div>

      {/* DETAIL RUTE */}
      <div className="mt-6 text-sm space-y-2">
        <p><strong>📍 Estimasi waktu:</strong> ± 3–4 jam (tergantung kondisi lalu lintas)</p>
        <p><strong>🛣️ Jalur utama:</strong> Tol Cikampek → Tol Cipularang → Soreang → Gunung Puntang</p>
        <p><strong>⛽ Tips:</strong> Isi bensin penuh sebelum naik, periksa rem & ban, hindari perjalanan malam jika tidak terbiasa</p>
      </div>

      {/* BUTTON TO GOOGLE MAPS */}
      <div className="mt-6">
        <a
          href="https://www.google.com/maps/dir/Bekasi/BERG+Puntang"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cream text-forest px-5 py-2 rounded-full shadow-sm hover:bg-cream/80 transition text-sm"
        >
          Buka Rute di Google Maps
        </a>
      </div>

      {/* QUOTE */}
      <p className="mt-10 text-center text-cream italic font-body">
        “Setiap kilometer adalah bagian dari petualangan, nikmati pemandangannya”
      </p>
    </section>
  );
};

export default JourneySection;
