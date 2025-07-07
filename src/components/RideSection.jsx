import React from 'react';

const rides = [
  {
    img: '/assets/car-innova.jpg',
    type: 'Toyota Innova',
    year: '2012',
    transmission: 'Manual',
    capacity: '7 Penumpang',
    special: 'Full AC + irit BBM + Interior luas',
  },
  {
    img: '/assets/car-tucson.jpg',
    type: 'Hyundai Tucson',
    year: '2009',
    transmission: 'Automatic',
    capacity: '5 Penumpang',
    special: 'Full AC + Interior Cozy + Bluetooth audio',
  }
];

const RideSection = () => {
  return (
    <section id="ride" className="bg-cream text-forest py-20 px-8 md:px-16">
      <h2 className="text-3xl font-heading mb-10">kendaraan tempur</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {rides.map((ride, index) => (
          <div key={index} className="bg-leaf/30 rounded-xl shadow-soft p-6 space-y-4">
            <img src={ride.img} alt={ride.type} className="w-full h-52 object-cover rounded-md" />
            <ul className="text-sm space-y-1">
              <li><strong>Tipe Mobil:</strong> {ride.type}</li>
              <li><strong>Tahun:</strong> {ride.year}</li>
              <li><strong>Transmisi:</strong> {ride.transmission}</li>
              <li><strong>Kapasitas:</strong> {ride.capacity}</li>
              <li><strong>Fitur Spesial:</strong> {ride.special}</li>
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-leaf italic font-body">
        “nyaman dan siap mengantar kita melintasi setiap kilometer menuju puntang”
      </p>
    </section>
  );
};

export default RideSection;
