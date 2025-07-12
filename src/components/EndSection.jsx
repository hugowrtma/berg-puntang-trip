import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const EndSection = () => {
  const [copied, setCopied] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scrollToTop = () => {
    const home = document.getElementById('home');
    if (home) {
      home.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="end"
      className="relative bg-cream text-forest py-20 px-8 md:px-16 text-center"
    >
      <div className="flex justify-center items-center gap-2 overflow-x-auto sm:gap-4 mb-8">
        <img
          src="https://cdn.dribbble.com/userupload/23533744/file/original-13e576fdc1842bc837417d79c1941de0.gif"
          alt="Camping gif 3"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded object-cover flex-shrink-0"
        />
        <img
          src="https://i.gifer.com/P1w.gif"
          alt="Camping gif 2"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded object-cover flex-shrink-0"
        />
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/414a9281017073.5cf1d8920b7a2.gif"
          alt="Camping gif 1"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded object-cover flex-shrink-0"
        />
      </div>
      <h2 className="text-3xl font-heading mb-4">sampai jumpa di berg puntang!</h2>

      <p className="text-lg font-body mb-6 max-w-xl mx-auto">
        mari jadikan perjalanan ini momen yang tak terlupakan — penuh kode bersih,
        tenda yang kokoh, dan kenangan yang akan kita ceritakan terus-menerus.
      </p>

      <button
        onClick={handleCopy}
        className="inline-block px-6 py-3 bg-leaf text-white rounded-full shadow-md hover:opacity-90 transition"
      >
        {copied ? 'Link berhasil disalin!' : 'bagikan rencana ini'}
      </button>

      <p className="mt-10 text-sm text-gray-500">
        dibuat dengan ❤️ oleh Hugo
      </p>

      {/* ✅ Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-forest text-cream p-2 rounded-full shadow-md hover:bg-forest/80 transition z-50"
          aria-label="Kembali ke atas"
        >
          <FaArrowUp size={14} />
        </button>
      )}
    </section>
  );
};

export default EndSection;
