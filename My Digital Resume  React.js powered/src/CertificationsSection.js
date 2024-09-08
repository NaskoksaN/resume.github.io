import React, { useState } from 'react';

const certifications = [
    { name: "C# Programming Basics", url: "https://softuni.bg/certificates/details/143669/35c7c325" },
    { name: "C# Fundamentals", url: "https://softuni.bg/certificates/details/166578/6dcdbe2a" },
    { name: "C# Advanced", url: "https://softuni.bg/certificates/details/173536/19144603" },
    { name: "C# Object-Oriented Programming (OOP)", url: "https://softuni.bg/certificates/details/181076/bf712d9b" },
    { name: "MS SQL", url: "https://softuni.bg/certificates/details/185659/97d75cc0" },
    { name: "Entity Framework Core", url: "https://softuni.bg/certificates/details/194086/73aff59c" },
    { name: "ASP.NET Fundamentals", url: "https://softuni.bg/certificates/details/206714/ea7a4803" },
    { name: "ASP.NET Advanced", url: "https://softuni.bg/certificates/details/214172/c1f94a91" },
    { name: "HTML & CSS", url: "https://softuni.bg/certificates/details/218399/43b08988" },
    { name: "JavaScript Front-End", url: "https://softuni.bg/certificates/details/223866/e079d5fd" }
];

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleList = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section>
      <h2>📚 SoftUni Professional Modules (2022-2024)</h2>
      <button className="button" onClick={toggleList}>
        {isVisible ? 'Hide Modules' : 'Show Modules'}
      </button>
      {isVisible && (
        <ul>
          {certifications.map(cert => (
            <li key={cert.name}>
              <strong>{cert.name}</strong> – <a href={cert.url} target="_blank" rel="noopener noreferrer">Certificate & Exam Result</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CertificationsSection;
