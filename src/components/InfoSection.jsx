import React from 'react';

const InfoSection = () => {
  return (
    <section id="info" className="bg-leaf/80 text-forest py-20 px-8 md:px-16">
      <h2 className="text-3xl font-heading mb-10">informasi penting lainnya</h2>

      <div className="grid md:grid-cols-2 gap-10 text-sm leading-relaxed">
        {/* Kontak Darurat & Koordinasi */}
        <div className="space-y-3">
          <h3 className="font-semibold text-base mb-1">📞 Kontak & Koordinasi</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Leader:</strong> Hansen – <a href="tel:082213610738" className="underline hover:text-forest/80">0812-3456-7890</a></li>
            <li><strong>Grup WA:</strong> “MINIMAL NONGOL” (pastikan notifikasi aktif)</li>
            <li><strong>Koordinasi teknis:</strong> via WA call di malam H-1</li>
          </ul>
        </div>

        {/* Estimasi Biaya */}
        <div className="space-y-3">
          <h3 className="font-semibold text-base mb-1">💸 Estimasi Biaya Per Orang</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Bensin & Tol:</strong> Rp 300.000 (bagi rata per mobil)</li>
            <li><strong>Camping Area:</strong> Rp 30.000 – 35.000/orang</li>
            <li><strong>Makan (3 hari):</strong> ± Rp 90.000 – 120.000</li>
            <li><strong>Parkir & Tiket Gunung Puntang:</strong> ± Rp 15.000 – 25.000</li>
            <li><strong>Total Perkiraan:</strong> ± Rp 450.000 – 500.000</li>
          </ul>
        </div>

        {/* Catatan Tambahan */}
        <div className="md:col-span-2 pt-6 space-y-2">
          <h3 className="font-semibold text-base mb-1">📝 Catatan Tambahan</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Selalu koordinasi dengan leader sebelum ambil keputusan pribadi</li>
            <li>Wajib menjaga kebersihan area camping (bawa kantong sampah sendiri)</li>
            <li>Utamakan keselamatan dalam setiap kegiatan tracking & api unggun</li>
            <li>Jangan pisah dari rombongan tanpa izin</li>
            <li>Semua perlengkapan wajib dibawa pulang kembali (zero waste!)</li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-center text-cream italic font-body">
        “kesiapan adalah kunci kenyamanan”
      </p>
    </section>
  );
};

export default InfoSection;
