import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-cream flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 space-y-10 md:space-y-0"
    >
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-6xl font-heading text-forest font-bold leading-tight">
          anak anak lucu goes to BERG Puntang
        </h1>
        <p className="text-lg text-leaf font-body">3 hari 3 malam</p>
        <a
          href="#crew"
          className="inline-block mt-6 px-6 py-3 bg-leaf text-white rounded-full shadow-soft hover:opacity-90 transition"
        >
          scroll kebawah ye
        </a>
      </div>
      <div className="md:w-1/2">
        <img
          src="/assets/trip.gif"
          alt="Trip GIF"
          className="rounded-full w-72 h-72 object-cover mx-auto shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
