import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const CrewSection = () => {
  const [crewList, setCrewList] = useState([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch crew from Supabase
  useEffect(() => {
    const fetchCrew = async () => {
      const { data, error } = await supabase
        .from('crew')
        .select('*')
        .order('created_at', { ascending: true });
      if (!error) setCrewList(data);
    };

    fetchCrew();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agree || !name) return;

    setLoading(true);
    const { data, error } = await supabase.from('crew').insert([
      {
        name,
        role,
        avatar: '',
      },
    ]);

    if (!error) {
      setCrewList((prev) => [...prev, ...data]);
      setName('');
      setRole('');
      setAgree(false);
    }
    setLoading(false);
  };

  return (
    <section id="crew" className="bg-leaf/80 text-forest py-20 px-8 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start mb-10">
        <h2 className="text-3xl font-heading">siapa aja nih?</h2>
      </div>

      {/* Form Pendaftaran */}
      <form
        onSubmit={handleSubmit}
        className="mb-12 bg-cream rounded-xl p-6 space-y-4 max-w-xl mx-auto shadow-md"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-forest/20"
          required
        />
        <input
          type="text"
          placeholder="Role (optional)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-forest/20"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-sm">
            I agree to join the trip and follow the event rules.
          </span>
        </label>
        <button
          type="submit"
          disabled={!agree || !name || loading}
          className={`px-6 py-2 rounded-full text-white bg-forest hover:bg-forest/80 transition ${
            !agree || !name || loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Loading...' : 'Join Trip'}
        </button>
      </form>

      {/* List Crew */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {crewList.map((person, index) => (
          <div key={index} className="text-center space-y-2">
            <div className="w-20 h-20 bg-forest/20 rounded-full mx-auto flex items-center justify-center font-bold text-forest shadow-md">
              {person.name.charAt(0)}
            </div>
            <p className="text-lg text-cream font-semibold">{person.name}</p>
            <p className="text-sm text-forest">{person.role || 'Participant'}</p>
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
