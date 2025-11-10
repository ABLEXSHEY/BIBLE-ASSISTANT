import { NavLink, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.jsx';
import CounselingScreen from './screens/CounselingScreen.jsx';
import PassageScreen from './screens/PassageScreen.jsx';
import LibraryScreen from './screens/LibraryScreen.jsx';
import SettingsScreen from './screens/SettingsScreen.jsx';
import PremiumScreen from './screens/PremiumScreen.jsx';
import OnboardingWelcome from './screens/OnboardingWelcome.jsx';
import OnboardingPrepare from './screens/OnboardingPrepare.jsx';
import OnboardingContext from './screens/OnboardingContext.jsx';
import './App.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/onboarding/welcome', label: 'Welcome' },
  { to: '/onboarding/prepare', label: 'Prepare' },
  { to: '/onboarding/context', label: 'Context' },
  { to: '/counseling', label: 'Counseling' },
  { to: '/passage/john-3-16', label: 'Passage' },
  { to: '/library', label: 'Library' },
  { to: '/premium', label: 'Premium' },
  { to: '/settings', label: 'Settings' },
];

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Bible Assistant</h1>
        <nav aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="app-content">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/onboarding/welcome" element={<OnboardingWelcome />} />
          <Route path="/onboarding/prepare" element={<OnboardingPrepare />} />
          <Route path="/onboarding/context" element={<OnboardingContext />} />
          <Route path="/counseling" element={<CounselingScreen />} />
          <Route path="/passage/:slug" element={<PassageScreen />} />
          <Route path="/library" element={<LibraryScreen />} />
          <Route path="/premium" element={<PremiumScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
        </Routes>
      </main>
    </div>
  );
}
