import React, { useState } from 'react';

const EndSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="end"
      className="bg-cream text-forest py-20 px-8 md:px-16 text-center"
    >
      <h2 className="text-3xl font-heading mb-4">sampai jumpa di berg puntang!</h2>

      <p className="text-lg font-body mb-6 max-w-xl mx-auto">
        mari jadikan perjalanan ini momen yang tak terlupakan — penuh kode bersih,
        tenda yang kokoh, dan kenangan yang akan kita ceritakan terus-menerus.
      </p>

      <button
        onClick={handleCopy}
        className="inline-block px-6 py-3 bg-leaf text-white rounded-full shadow-md hover:opacity-90 transition"
      >
        {copied ? 'Link berhasil disalin!' : '📤 bagikan rencana ini'}
      </button>

      <p className="mt-10 text-sm text-gray-500">
        dibuat dengan ❤️ oleh Hugo, dibantu ChatGPT & Gemini
      </p>
    </section>
  );
};

export default EndSection;
