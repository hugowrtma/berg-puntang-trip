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
    <section id="rundown" className="bg-cream text-forest py-20 px-8 md:px-16">
      <h2 className="text-3xl font-heading mb-1">rundown acara</h2>
      <p className="italic text-forest/70 text-sm mb-10">*estimasi saja dan bisa berubah</p>

      {/* Timeline */}
      <div className="space-y-12 border-l-2 border-leaf/90 pl-6">
        {rundownData.map((dayItem, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[18px] top-[8px] w-2.5 h-2.5 bg-leaf/90 rounded-full shadow-sm"></div>
            <h3 className="pl-2 text-lg md:text-xl font-semibold mb-4">{dayItem.day}</h3>
            <ul className="space-y-1 text-xs md:text-sm text-forest/90">
              {dayItem.events.map((event, idx) => (
                <li key={idx} className="pl-3 relative">
                  <span className="before:content-['•'] before:mr-2 before:text-leaf/90">{event}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Quote */}
      <p className="mt-12 text-center italic text-leaf font-body">
        “rundown bukan aturan mutlak, tapi arah kebersamaan agar kita semua satu langkah.”
      </p>
    </section>
  );
};

export default RundownSection;
