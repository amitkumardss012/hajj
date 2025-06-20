import { Route, Routes } from 'react-router-dom';

// Layout components
import Layout from './components/layout/Layout';

// Pages
import AboutPage from './pages/AboutPage';
import CharityPage from './pages/CharityPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';
import HajjUmrahPage from './pages/HajjUmrahPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="hajj-umrah" element={<HajjUmrahPage />} />
        <Route path="charity" element={<CharityPage />} />
        <Route path="donate" element={<DonatePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;