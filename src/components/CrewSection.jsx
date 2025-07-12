import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { FaTrash, FaPen } from 'react-icons/fa';

const defaultAvatar = '/assets/default-avatar.png';

const CrewSection = () => {
  const [crew, setCrew] = useState([]);
  const [form, setForm] = useState({ name: '', role: '', agree: false });
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(null);
  const [editAvatarFile, setEditAvatarFile] = useState(null);

  useEffect(() => {
    const fetchCrew = async () => {
      const { data, error } = await supabase
        .from('crew')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) console.error('Gagal fetch crew:', error);
      else setCrew(data);
    };
    fetchCrew();
  }, []);

  const uploadAvatar = async (file) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('crew-avatars')
      .upload(filePath, file);

    if (uploadError && !uploadError.message.includes('already exists')) {
      throw uploadError;
    }

    const { data: publicUrlData, error: urlError } = supabase
      .storage
      .from('crew-avatars')
      .getPublicUrl(filePath);

    if (urlError) throw urlError;

    return publicUrlData.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.agree) return;
    setLoading(true);

    let avatarUrl = defaultAvatar;

    try {
      if (avatarFile) {
        avatarUrl = await uploadAvatar(avatarFile);
      }

      const { data, error } = await supabase
        .from('crew')
        .insert([{ name: form.name, role: form.role, avatar: avatarUrl }]);

      if (error) throw error;

      setCrew((prev) => [...prev, ...data]);
      setForm({ name: '', role: '', agree: false });
      setAvatarFile(null);
    } catch (err) {
      console.error(err);
      alert('Terjadi kesalahan saat menyimpan.');
    } finally {
      setLoading(false);
    }
  };

  const deleteCrew = async (id) => {
    if (!window.confirm('Yakin ingin menghapus data ini?')) return;

    const { error } = await supabase.from('crew').delete().eq('id', id);
    if (error) return console.error(error);

    setCrew((prev) => prev.filter((c) => c.id !== id));
  };

  const openEdit = (person) => {
    setEditing(person);
    setEditAvatarFile(null);
  };
  const closeEdit = () => setEditing(null);

  const handleUpdate = async () => {
    if (!editing.name || !editing.role) return;

    let newAvatarUrl = editing.avatar;

    try {
      if (editAvatarFile) {
        newAvatarUrl = await uploadAvatar(editAvatarFile);
      }

      const { data, error } = await supabase
        .from('crew')
        .update({
          name: editing.name,
          role: editing.role,
          avatar: newAvatarUrl,
        })
        .eq('id', editing.id)
        .select();

      if (error) throw error;

      setCrew((prev) => prev.map((c) => (c.id === editing.id ? data[0] : c)));
      closeEdit();
    } catch (err) {
      console.error(err);
      alert('Terjadi kesalahan saat update.');
    }
  };

  return (
    <section id="crew" className="bg-leaf/80 text-forest py-20 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start mb-10">
        <h2 className="text-3xl font-heading">Siapa aja nih?</h2>
        <p className="mt-2 md:mt-0 text-sm text-forest">Mau ikut? Isi form di bawah ya.</p>
      </div>

      {/* === Daftar Crew === */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-16">
        {crew.length === 0 ? (
          <p className="text-center col-span-full text-cream italic">Belum ada yang mendaftar</p>
        ) : (
          crew.map((person) => (
            <div key={person.id} className="text-center space-y-2 relative">
              <div className="relative w-20 h-20 mx-auto">
                <img
                  src={person.avatar || defaultAvatar}
                  alt={person.name}
                  className="w-20 h-20 rounded-full shadow-md object-cover"
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
              <p className="text-lg text-cream font-semibold">{person.name}</p>
              <p className="text-sm text-forest">{person.role}</p>
            </div>
          ))
        )}
      </div>

      {/* === Form Input (Relative) === */}
      <form
        onSubmit={handleSubmit}
        className="bg-cream text-forest p-4 rounded-md shadow-md w-full max-w-xl mx-auto"
      >
        <div className="mb-3">
          <label className="block mb-1 font-semibold">Nama</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 rounded border border-forest/30"
            placeholder="Tulis nama kalian"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-semibold">Peran</label>
          <input
            type="text"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="w-full p-2 rounded border border-forest/30"
            placeholder="Contoh: juru masak, penjaga tenda, dll"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-semibold">Foto (opsional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setAvatarFile(e.target.files[0])}
            className="w-full"
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
          className={`bg-leaf/80 text-cream px-4 py-2 rounded font-semibold hover:bg-leaf transition w-full ${
            loading ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Mengirim...' : 'Ikut Trip'}
        </button>
      </form>

      {/* === Modal Edit === */}
      {editing && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-cream text-forest p-6 rounded shadow-md w-full max-w-sm space-y-4">
            <h3 className="text-xl font-bold mb-2">Edit Data</h3>
            <input
              type="text"
              value={editing.name}
              onChange={(e) => setEditing({ ...editing, name: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Nama"
            />
            <input
              type="text"
              value={editing.role}
              onChange={(e) => setEditing({ ...editing, role: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Peran"
            />
            <div>
              <label className="block font-semibold text-sm mb-1">Ganti Foto (opsional)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setEditAvatarFile(e.target.files[0])}
                className="w-full"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button onClick={closeEdit} className="text-sm px-3 py-1 rounded bg-[#A8A29E]/70 ">Batal</button>
              <button onClick={handleUpdate} className="text-sm px-3 py-1 rounded bg-leaf/80 text-cream">Simpan</button>
            </div>
          </div>
        </div>
      )}

      <p className="mt-10 text-center text-cream font-body italic">
        “bersama sama, kita akan menaklukan tantangan dan keindahan alam gunung puntang”
      </p>
    </section>
  );
};

export default CrewSection;
