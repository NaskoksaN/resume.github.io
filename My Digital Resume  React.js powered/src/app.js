// src/App.js
import React from 'react';
import Header from './Header';
import SkillsSection from './SkillsSection';
import CertificationsSection from './CertificationsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import './index.css'; // Import your CSS file

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
