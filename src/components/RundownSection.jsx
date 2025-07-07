import React from 'react';

const rundownData = [
  {
    day: 'Hari 1 – Jumat, 8 Agustus 2025',
    events: [
      '05.00 WIB – Berkumpul di titik kumpul (Bekasi)',
      '05.30 WIB – Berangkat menuju BERG Puntang',
      '10.00 WIB – Tiba di lokasi, registrasi & mendirikan tenda',
      '12.00 WIB – Istirahat & makan siang ringan',
      '15.00 WIB – Jelajah ringan sekitar area camping',
      '18.00 WIB – Makan malam & persiapan api unggun',
      '20.00 WIB – Api unggun & ngobrol santai'
    ]
  },
  {
    day: 'Hari 2 – Sabtu, 9 Agustus 2025',
    events: [
      '06.30 WIB – Sarapan bersama',
      '08.00 WIB – Tracking ke sungai Cihanjawar',
      '11.00 WIB – Istirahat, foto-foto, dan eksplor alam',
      '13.00 WIB – Makan siang & istirahat di tenda',
      '16.00 WIB – Sesi bebas (main kartu, gitaran, dsb)',
      '19.00 WIB – Makan malam & sesi sharing santai',
      '21.00 WIB – Games malam, chill, dan tidur'
    ]
  },
  {
    day: 'Hari 3 – Minggu, 10 Agustus 2025',
    events: [
      '06.00 WIB – Sarapan & persiapan pulang',
      '07.30 WIB – Bersih-bersih area camping',
      '09.00 WIB – Perjalanan kembali ke Bekasi',
      '13.00 WIB – Tiba di rumah masing-masing dengan selamat'
    ]
  }
];

const RundownSection = () => {
  return (
    <section id="rundown" className="bg-leaf/80 text-forest py-20 px-8 md:px-16">
      <h2 className="text-3xl font-heading mb-2">rundown acara</h2>
      <p className="italic text-forest/70 mb-10 text-sm">*Estimasi saja dan bisa berubah</p>

      <div className="space-y-12 border-l-2 border-cream/90 pl-6">
        {rundownData.map((dayItem, index) => (
          <div key={index} className="relative">
            {/* Dot */}
            <div className="absolute -left-[18px] top-[8px] w-2.5 h-2.5 bg-cream/90 rounded-full shadow-sm"></div>

            {/* Judul Hari */}
            <h3 className="pl-2 text-lg md:text-xl font-semibold mb-4">{dayItem.day}</h3>

            {/* List Acara */}
            <ul className="space-y-1 text-xs md:text-sm text-forest/90">
              {dayItem.events.map((event, idx) => (
                <li key={idx} className="pl-3 relative">
                  <span className="before:content-['•'] before:mr-2 before:text-cream/90">{event}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RundownSection;
