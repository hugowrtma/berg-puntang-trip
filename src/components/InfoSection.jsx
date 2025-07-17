import React from 'react';

const InfoSection = () => {
  return (
    <section id="info" className="bg-cream text-forest py-20 px-8 md:px-16">
      <h2 className="text-3xl font-heading mb-10">Informasi Penting</h2>

      <div className="grid md:grid-cols-2 gap-10 text-sm leading-relaxed">
        {/* Estimasi Biaya */}
        <div className="space-y-3">
          <h3 className="font-semibold text-base mb-1">💸 Estimasi Biaya (Per Orang)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Transport (PP):</strong> ± Rp300.000 (sharing per mobil)</li>
            <li><strong>Camping Ground:</strong> Rp35.000/malam</li>
            <li><strong>Makan 6x:</strong> ± Rp120.000 (masak bareng / patungan)</li>
            <li><strong>Tiket Gunung & Parkir:</strong> ± Rp20.000</li>
            <li><strong>Total Perkiraan:</strong> Rp450.000 – Rp500.000</li>
          </ul>
        </div>

        {/* Kontak Koordinasi */}
        <div className="space-y-3">
          <h3 className="font-semibold text-base mb-1">📞 Kontak & Koordinasi</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Leader:</strong> Hansen – <a href="tel:082213610738" className="underline hover:text-forest/80">0822-1361-0738</a></li>
            <li><strong>WA Group:</strong> “MINIMAL NONGOL” (aktifkan notifikasi)</li>
            <li><strong>Briefing:</strong> via WA call malam H-1</li>
          </ul>
        </div>

        {/* Catatan Tambahan */}
        <div className="md:col-span-2 pt-6 space-y-2">
          <h3 className="font-semibold text-base mb-1">📝 Catatan</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Koordinasi ke leader sebelum ambil keputusan pribadi</li>
            <li>Bawa kantong sampah masing-masing</li>
            <li>Utamakan keselamatan saat tracking dan api unggun</li>
            <li>Tidak boleh pisah dari grup tanpa izin</li>
            <li>Semua barang bawaan harus dibawa pulang (zero waste)</li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-center text-leaf italic font-body">
        “Kesiapan = Kenyamanan”
      </p>
    </section>
  );
};

export default InfoSection;
