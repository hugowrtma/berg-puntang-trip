import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { FaTrash, FaPen } from 'react-icons/fa';
import ImageUploader from '../components/ImageUploaderCloudinary';

const defaultAvatar = '/assets/avatar.png';

const CrewSection = () => {
  const [crew, setCrew] = useState([]);
  const [form, setForm] = useState({ name: '', role: '', agree: false });
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(null);

  const fetchCrew = async () => {
    const { data, error } = await supabase
      .from('crew')
      .select('*')
      .order('created_at', { ascending: true });
    if (!error) setCrew(data);
  };

  useEffect(() => {
    fetchCrew();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.agree) return;
    setLoading(true);

    const avatar = avatarUrl?.trim() ? avatarUrl : defaultAvatar;

    const { error } = await supabase.from('crew').insert([
      {
        name: form.name,
        role: form.role,
        avatar,
      },
    ]);

    if (!error) {
      await fetchCrew();
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
    if (!error) await fetchCrew();
  };

  const openEdit = (person) => setEditing(person);
  const closeEdit = () => setEditing(null);

  const handleUpdate = async () => {
    if (!editing.name || !editing.role) return;

    const { error } = await supabase
      .from('crew')
      .update({
        name: editing.name,
        role: editing.role,
        avatar: editing.avatar?.trim() || defaultAvatar,
      })
      .eq('id', editing.id);

    if (!error) {
      await fetchCrew();
      closeEdit();
    } else {
      alert('Gagal update');
      console.error(error);
    }
  };

  return (
    <section id="crew" className="bg-leaf/80 text-forest py-20 px-4 md:px-16">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-8 space-y-1 sm:space-y-0">
        <h2 className="text-3xl font-heading">siapa aja nih?</h2>
        <p className="text-sm text-forest">mau ikut? isi form di bawah ya.</p>
      </div>

      {/* ✅ Grid now shows 3 columns on small screens */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-16">
        {!crew.length && (
          <p className="col-span-full text-center italic text-cream">
            Belum ada yang mendaftar
          </p>
        )}
        {crew.map((person) => (
          <div
            key={person.id}
            className="relative text-center space-y-1 group"
          >
            <div className="relative inline-block">
              <img
                src={person.avatar || defaultAvatar}
                alt={person.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-md"
              />
              {/* Tombol Edit */}
              <button
                onClick={() => openEdit(person)}
                className="absolute top-0 left-0 bg-blue-500 text-white p-1 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition"
              >
                <FaPen size={12} />
              </button>
              {/* Tombol Delete */}
              <button
                onClick={() => deleteCrew(person.id)}
                className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition"
              >
                <FaTrash size={12} />
              </button>
            </div>
            <p className="text-[13px] font-semibold text-cream">{person.name}</p>
            <p className="text-[12px] text-forest">{person.role}</p>
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
          {loading ? 'Uploading...' : 'Ikut Trip'}
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

            <ImageUploader
              onUploaded={(url) =>
                setEditing((prev) => ({ ...prev, avatar: url }))
              }
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
        “bersama sama, kita akan menaklukan tantangan dan keindahan alam di area green corner cabin”
      </p>
    </section>
  );
};

export default CrewSection;
