import { useEffect } from 'react';
import './index.css';
import HeroSection from './components/HeroSection';
import CrewSection from './components/CrewSection';
import RideSection from './components/RideSection';
import JourneySection from './components/JourneySection';
import ExploreSection from './components/ExploreSection';
import RundownSection from './components/RundownSection';
import PackSection from './components/PackSection';
import InfoSection from './components/InfoSection';
import EndSection from './components/EndSection';

function App() {
  // Aktifkan smooth scroll di seluruh dokumen
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <main className="font-body bg-cream text-forest">
      <HeroSection />
      <ExploreSection />
      <RideSection />
      <JourneySection />
      <RundownSection />
      <PackSection />
      <InfoSection />
      <CrewSection />
      <EndSection />
    </main>
  );
}

export default App;
