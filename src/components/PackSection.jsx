import React from 'react';

const PackSection = () => {
  return (
    <section id="pack" className="bg-leaf/80 text-forest py-20 px-8 md:px-16">
      <h2 className="text-3xl font-heading mb-10">persiapan & perlengkapan</h2>

      <div className="grid md:grid-cols-2 gap-12 text-sm leading-relaxed">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Pakaian:</strong> jaket tebal, baju ganti 2–3 set, kaos kaki hangat, celana training, pakaian tidur, topi kupluk/syal
          </li>
          <li>
            <strong>Perlengkapan pribadi:</strong> handuk kecil, sabun mandi, sikat & pasta gigi, obat-obatan pribadi, tisu basah/kering, sunblock, deodorant
          </li>
          <li>
            <strong>Perlengkapan tidur:</strong> sleeping bag, matras lipat, bantal angin/kecil, selimut tipis (opsional)
          </li>
          <li>
            <strong>Tambahan outdoor:</strong> senter/headlamp, power bank, jas hujan, korek api, kantong sampah, alat makan pribadi (piring, sendok, gelas)
          </li>
        </ul>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Elektronik & dokumentasi:</strong> kamera, charger, kabel cadangan, tripod kecil, kartu memori
          </li>
          <li>
            <strong>Perlengkapan tracking:</strong> sepatu gunung/sneakers tahan licin, sandal outdoor, tas kecil untuk tracking ringan, botol air minum refillable
          </li>
          <li>
            <strong>Makanan & minuman pribadi:</strong> snack favorit, mie instan, kopi/teh, susu UHT, roti, permen, air mineral
          </li>
          <li>
            <strong>Lain-lain (opsional):</strong> buku bacaan, kartu UNO/catur mini, alat musik kecil, hammock
          </li>
        </ul>
      </div>

      <p className="mt-10 text-center text-cream italic font-body">
        “persiapan matang untuk petualangan yang tak terlupakan”
      </p>
    </section>
  );
};

export default PackSection;
