import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { supabase } from '../lib/supabaseClient';
import { FaTrash, FaPen } from 'react-icons/fa';

const defaultAvatar = '/assets/default-avatar.png';
const UPLOADTHING_TOKEN='eyJhcGlLZXkiOiJza19saXZlXzZjZWJjYjQ5NmM3YTk1YzM0YzEwMmU4MTJlODAyM2IzNzhjMzVlYTk5YzgxMjgzOWY4Y2RhZTlmMWMyY2ViOWQiLCJhcHBJZCI6ImNxaGE4dTRjbHIiLCJyZWdpb25zIjpbInNlYTEiXX0='

// Komponen Upload Foto
const ImageUploader = ({ onUploaded }) => {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    try {
      const res = await axios.post(
        'https://uploadthing.com/api/uploadFiles',
        {
          files: [{ name: file.name, type: file.type }],
        },
        {
          headers: {
            Authorization: `Bearer ${UPLOADTHING_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const { key, url } = res.data[0];

      await axios.put(url, file, {
        headers: { 'Content-Type': file.type },
      });

      const finalUrl = `https://utfs.io/f/${key}`;
      onUploaded(finalUrl);
    } catch (err) {
      console.error(err);
      alert('Upload gagal');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mb-3">
      <label className="block font-semibold mb-1">Foto (opsional)</label>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {uploading && <span className="text-sm text-gray-600">Mengunggah...</span>}
      </div>
    </div>
  );
};

const CrewSection = () => {
  const [crew, setCrew] = useState([]);
  const [form, setForm] = useState({ name: '', role: '', agree: false });
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    supabase
      .from('crew')
      .select('*')
      .order('created_at', { ascending: true })
      .then(({ data }) => data && setCrew(data))
      .catch(console.error);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.agree) return;
    setLoading(true);

    const avatar = avatarUrl || defaultAvatar;

    const { data, error } = await supabase.from('crew').insert([
      {
        name: form.name,
        role: form.role,
        avatar,
      },
    ]);

    if (!error) {
      setCrew((prev) => [...prev, ...data]);
      setForm({ name: '', role: '', agree: false });
      setAvatarUrl(null);
    } else {
      alert('Gagal menyimpan');
      console.error(error);
    }

    setLoading(false);
  };

  const deleteCrew = async (id) => {
    if (!window.confirm('Yakin ingin hapus?')) return;
    const { error } = await supabase.from('crew').delete().eq('id', id);
    if (!error) setCrew((prev) => prev.filter((c) => c.id !== id));
  };

  const openEdit = (person) => setEditing(person);
  const closeEdit = () => setEditing(null);

  const handleUpdate = async () => {
    if (!editing.name || !editing.role) return;

    const { data, error } = await supabase
      .from('crew')
      .update({ name: editing.name, role: editing.role })
      .eq('id', editing.id)
      .select();

    if (!error) {
      setCrew((prev) => prev.map((c) => (c.id === editing.id ? data[0] : c)));
      closeEdit();
    } else {
      alert('Gagal update');
      console.error(error);
    }
  };

  return (
    <section id="crew" className="bg-leaf/80 text-forest py-20 px-4 md:px-16">
      <div className="flex justify-between items-baseline mb-8">
        <h2 className="text-3xl font-heading">Siapa aja nih?</h2>
        <p className="text-sm text-forest">Mau ikut? Isi form di bawah ya.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-16">
        {!crew.length && (
          <p className="col-span-full text-center italic text-cream">
            Belum ada yang mendaftar
          </p>
        )}
        {crew.map((person) => (
          <div key={person.id} className="relative text-center space-y-2">
            <div className="relative inline-block">
              <img
                src={person.avatar || defaultAvatar}
                alt={person.name}
                className="w-20 h-20 rounded-full object-cover shadow-md"
              />
              <button
                onClick={() => openEdit(person)}
                className="absolute top-0 left-0 bg-blue-500 text-white p-1 rounded-full"
              >
                <FaPen size={12} />
              </button>
              <button
                onClick={() => deleteCrew(person.id)}
                className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
              >
                <FaTrash size={12} />
              </button>
            </div>
            <p className="font-semibold text-cream">{person.name}</p>
            <p className="text-sm text-forest">{person.role}</p>
          </div>
        ))}
      </div>

      {/* === Form Pendaftaran === */}
      <form
        onSubmit={handleSubmit}
        className="bg-cream p-6 rounded-md shadow-md max-w-xl mx-auto"
      >
        <div className="mb-3">
          <label className="block mb-1 font-semibold">Nama</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 border rounded border-forest/30"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1 font-semibold">Peran</label>
          <input
            type="text"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="w-full p-2 border rounded border-forest/30"
            required
          />
        </div>

        <ImageUploader onUploaded={setAvatarUrl} />

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
          className={`w-full py-2 rounded bg-leaf/80 text-cream font-semibold ${
            loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-leaf'
          }`}
        >
          {loading ? 'Mengirim...' : 'Ikut Trip'}
        </button>
      </form>

      {/* === Modal Edit === */}
      {editing && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-4 z-50">
          <div className="bg-cream p-6 rounded shadow-md max-w-sm w-full space-y-4">
            <h3 className="text-xl font-bold">Edit Profil</h3>
            <input
              type="text"
              value={editing.name}
              onChange={(e) => setEditing({ ...editing, name: e.target.value })}
              className="w-full p-2 border rounded border-forest/30"
            />
            <input
              type="text"
              value={editing.role}
              onChange={(e) => setEditing({ ...editing, role: e.target.value })}
              className="w-full p-2 border rounded border-forest/30"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={closeEdit}
                className="px-4 py-2 rounded bg-gray-300 text-forest"
              >
                Batal
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 rounded bg-leaf/80 text-cream"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      <p className="mt-10 text-center italic text-cream font-body">
        “bersama sama, kita akan menaklukan tantangan dan keindahan alam gunung puntang”
      </p>
    </section>
  );
};

export default CrewSection;
