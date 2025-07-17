import React from 'react';

const PackSection = () => {
  return (
    <section id="pack" className="bg-leaf/80 text-forest py-20 px-8 md:px-16">
      <h2 className="text-3xl font-heading mb-10">persiapan & perlengkapan</h2>

      <div className="grid md:grid-cols-2 gap-12 text-sm leading-relaxed">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Pakaian:</strong> jaket, ganti baju, kaos kaki, celana training, pakaian tidur, kupluk/syal</li>
          <li><strong>Pribadi:</strong> handuk, sabun, sikat gigi, obat, tisu, sunblock, deodorant</li>
          <li><strong>Tidur:</strong> sleeping bag, matras, bantal kecil, selimut (opsional)</li>
          <li><strong>Outdoor:</strong> senter/headlamp, power bank, jas hujan, korek, kantong sampah, alat makan</li>
        </ul>

        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Elektronik:</strong> kamera, charger, kabel cadangan, tripod, memori</li>
          <li><strong>Tracking:</strong> sepatu/sandal outdoor, tas kecil, botol minum isi ulang</li>
          <li><strong>Logistik:</strong> snack, mie, kopi/teh, susu, roti, permen, air mineral</li>
          <li><strong>Lainnya:</strong> buku, UNO/catur, alat musik kecil, hammock</li>
        </ul>
      </div>

      <p className="mt-10 text-center text-cream italic font-body">
        “persiapan matang untuk petualangan yang tak terlupakan”
      </p>
    </section>
  );
};

export default PackSection;
