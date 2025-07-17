import React from 'react';

const rundownData = [
  {
    day: 'Hari 1 – Jumat, 8 Agustus 2025',
    events: [
      '05.00 WIB – Berkumpul di titik kumpul (Bekasi)',
      '05.30 WIB – Berangkat menuju Green Corner Land, Pangalengan',
      '10.30 WIB – Tiba di lokasi, registrasi & check-in cabin',
      '12.00 WIB – Istirahat & makan siang',
      '15.00 WIB – Jalan santai keliling area sekitar Situ Cileunca',
      '17.30 WIB – Sunset viewing di deck utama',
      '19.00 WIB – Makan malam & sharing malam',
      '21.00 WIB – Api unggun kecil & santai di sekitar cabin'
    ]
  },
  {
    day: 'Hari 2 – Sabtu, 9 Agustus 2025',
    events: [
      '07.00 WIB – Sarapan bareng dengan kopi lokal',
      '08.30 WIB – Naik perahu mengelilingi Situ Cileunca',
      '10.30 WIB – Explore hutan pinus sekitar dan foto-foto',
      '12.30 WIB – Makan siang & free time di cabin',
      '15.00 WIB – Games outdoor & aktivitas santai',
      '18.00 WIB – BBQ malam & musik akustik',
      '21.00 WIB – Chill malam, bintang-bintang, dan tidur'
    ]
  },
  {
    day: 'Hari 3 – Minggu, 10 Agustus 2025',
    events: [
      '07.00 WIB – Sarapan pagi & ngopi santai',
      '08.30 WIB – Packing & beres-beres cabin',
      '10.00 WIB – Perjalanan pulang ke Bekasi',
      '14.00 WIB – Sampai di rumah masing-masing, selesai dengan penuh kenangan'
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
