import React from 'react';

const crew = [
  {
    name: 'Haykal',
    role: 'Director',
    avatar: '/assets/crew-haykal.jpg'
  },
  {
    name: 'Arkan',
    role: 'Manager',
    avatar: '/assets/crew-arkan.jpg'
  },
  {
    name: 'Hansen',
    role: 'Event Leader | Driver 1',
    avatar: '/assets/crew-hansen.jpg'
  },
  {
    name: 'Handoyo',
    role: 'Event Co-Leader | Driver 2',
    avatar: '/assets/crew-handoyo.jpg'
  },
  {
    name: 'Hugo',
    role: 'Event Organizer | Navigator',
    avatar: '/assets/crew-hugo.jpg'
  },
  // Tambah/kurangi sesuai kebutuhan
];

const CrewSection = () => {
  return (
    <section id="crew" className="bg-leaf/80 text-forest py-20 px-8 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start mb-10">
        <h2 className="text-3xl font-heading">siapa aja nih?</h2>
        <a
          href="#info"
          className="mt-2 md:mt-0 text-sm text-forest underline hover:text-forest/80 transition"
        >
          Mau ikut? Kontak leader kita aja!
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {crew.map((person, index) => (
          <div key={index} className="text-center space-y-2">
            <img src={person.avatar} alt={person.name} className="w-20 h-20 rounded-full mx-auto shadow-md" />
            <p className="text-lg text-cream font-semibold">{person.name}</p>
            <p className="text-sm text-forest">{person.role}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-cream font-body italic">
        “bersama sama, kita akan menaklukan tantangan dan keindahan alam gunung puntang”
      </p>
    </section>
  );
};

export default CrewSection;
