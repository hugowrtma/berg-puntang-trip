import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const defaultAvatar = '/assets/default-avatar.png';

const CrewSection = () => {
  const [crew, setCrew] = useState([]);
  const [form, setForm] = useState({ name: '', role: '', agree: false });
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch data dari Supabase
  useEffect(() => {
    const fetchCrew = async () => {
      const { data, error } = await supabase
        .from('crew')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Gagal fetch:', error);
      } else {
        setCrew(data);
      }
    };

    fetchCrew();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.agree) return;

    setLoading(true);

    let avatarUrl = defaultAvatar;

    // Upload avatar jika ada file
    if (avatarFile) {
      const fileExt = avatarFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('crew-avatars')
        .upload(filePath, avatarFile);

      if (uploadError) {
        console.error('Gagal upload avatar:', uploadError);
      } else {
        const { data: publicUrlData } = supabase.storage
          .from('crew-avatars')
          .getPublicUrl(filePath);

        avatarUrl = publicUrlData.publicUrl;
      }
    }

    const { data, error } = await supabase.from('crew').insert([
      {
        name: form.name,
        role: form.role,
        avatar: avatarUrl,
      },
    ]);

    if (error) {
      console.error('Gagal insert:', error);
    } else {
      setCrew((prev) => [...prev, ...data]);
      setForm({ name: '', role: '', agree: false });
      setAvatarFile(null);
    }

    setLoading(false);
  };

  return (
    <section
      id="crew"
      className="bg-leaf/80 text-forest py-20 px-4 md:px-16 flex flex-col items-center"
    >
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          <h2 className="text-3xl font-heading">Siapa aja nih?</h2>
          <p className="mt-2 md:mt-0 text-sm text-forest">
            Mau ikut? Isi form di bawah ya.
          </p>
        </div>

        {/* === DAFTAR PESERTA === */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-16">
          {crew.length === 0 ? (
            <p className="text-center col-span-full text-cream italic">
              Belum ada yang mendaftar
            </p>
          ) : (
            crew.map((person, index) => (
              <div key={index} className="text-center space-y-2">
                <img
                  src={person.avatar || defaultAvatar}
                  alt={person.name}
                  className="w-20 h-20 rounded-full mx-auto shadow-md object-cover"
                />
                <p className="text-lg text-cream font-semibold">
                  {person.name}
                </p>
                <p className="text-sm text-forest">{person.role}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* === FORM === */}
      <form
        onSubmit={handleSubmit}
        className="bg-cream text-forest w-full max-w-sm p-6 rounded-lg shadow-xl relative bottom-8"
      >
        <h3 className="text-xl font-bold mb-4 text-center">Mau Ikut Trip?</h3>

        <div className="mb-3">
          <label className="block text-sm font-semibold mb-1">Nama</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-3 py-2 rounded border border-forest/30"
            placeholder="Nama"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-semibold mb-1">Peran</label>
          <input
            type="text"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="w-full px-3 py-2 rounded border border-forest/30"
            placeholder="Contoh: Penjaga tenda, juru masak"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-semibold mb-1">Foto (opsional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setAvatarFile(e.target.files[0])}
            className="text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              className="mr-2"
              required
            />
            Saya setuju dengan ketentuan trip dan siap ikut
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-leaf/80 text-cream py-2 rounded font-semibold hover:bg-leaf transition ${
            loading ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Mengirim...' : 'Ikut Trip'}
        </button>
      </form>

      <p className="mt-10 text-center text-cream font-body italic max-w-3xl">
        “bersama sama, kita akan menaklukan tantangan dan keindahan alam gunung
        puntang”
      </p>
    </section>
  );
};

export default CrewSection;
