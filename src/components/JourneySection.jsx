import React from 'react';

const JourneySection = () => {
  return (
    <section id="journey" className="bg-leaf/80 text-forest py-20 px-8 md:px-16">
      <h2 className="text-3xl font-heading mb-4">rute perjalanan</h2>
      <p className="mb-10 text-sm md:text-base max-w-2xl text-justify">
        Perjalanan dimulai dari <strong>Bekasi</strong> menuju <strong>Green Corner, Situ Cileunca, Pangalengan</strong>,
        melalui Tol Cikampek – Cipularang – Soreang – Pangalengan. Nikmati pendaratan udara sejuk dan pemandangan danau.
      </p>

      {/* MAP EMBED */}
      <div className="w-full h-64 md:h-96 rounded-md overflow-hidden shadow-soft">
        <iframe
          title="Lokasi Green Corner Pangalengan"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?q=Green+Corner+Situ+Cileunca+Pangalengan&key=AIzaSyAo8crAYapBorDL-zpOI8_NTr_p_pg52-o"
        ></iframe>
      </div>

      {/* DETAIL RUTE */}
      <div className="mt-6 text-sm space-y-2">
        <p><strong>📍 Estimasi waktu:</strong> ± 3–4 jam (lalu lintas normal)</p>
        <p><strong>🛣️ Rute utama:</strong> Tol Cikampek → Tol Cipularang → Soreang → Pangalengan → Situ Cileunca</p>
        <p><strong>⛽ Tips:</strong> Isi bensin penuh sebelum Tol Cipularang, periksa rem & ban, bawa air minum dan snack ringan.</p>
      </div>

      {/* BUTTON TO GOOGLE MAPS */}
      <div className="mt-6">
        <a
          href="https://www.google.com/maps/dir/Bekasi/Green+Corner+Situ+Cileunca+Pangalengan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cream text-forest px-5 py-2 rounded-full shadow-sm hover:bg-cream/80 transition text-sm"
        >
          Buka Rute di Google Maps
        </a>
      </div>

      {/* QUOTE */}
      <p className="mt-10 text-center text-cream italic font-body">
        “Setiap kilometer membawa kita mendekat pada udara sejuk dan pesona danau.”
      </p>
    </section>
  );
};

export default JourneySection;
