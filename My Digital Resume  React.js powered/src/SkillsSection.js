import React from 'react';

const SkillsSection = () => {
  return (
    <section>
      <h2>💻 Technical & Soft Skills</h2>
      <div className="skills-grid">
        <div>
          <h3>Technical Skills</h3>
          <ul>
            <li><strong>Programming Languages:</strong> C#, JavaScript, HTML, CSS</li>
            <li><strong>Tools:</strong> Visual Studio, Visual Studio Code, SSMS</li>
            <li><strong>Frameworks:</strong> .NET, ASP.NET Core, EF Core</li>
            <li><strong>Databases:</strong> Microsoft SQL Server</li>
          </ul>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <ul>
            <li><strong>Problem-Solving:</strong> Identifying, analyzing, and solving complex challenges.</li>
            <li><strong>Attention to Detail:</strong> Delivering high-quality and precise solutions.</li>
            <li><strong>Teamwork & Collaboration:</strong> Working seamlessly in teams to achieve goals.</li>
            <li><strong>Effective Communication:</strong> Conveying complex ideas clearly and effectively.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
