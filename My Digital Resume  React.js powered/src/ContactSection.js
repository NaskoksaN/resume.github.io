import React, { useState } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showContactInfo = () => {
    setIsVisible(true);
  };

  return (
    <section>
      <h2>📫 Let's Connect!</h2>
      <p>If you're interested in collaboration or want to get in touch, click the button below.</p>
      <button className="button" onClick={showContactInfo}>
        Curious?
      </button>
      {isVisible && (
        <ul id="contact-list">
          <li><i className="fa-solid fa-envelope"></i> <strong>Email:</strong> <a href="mailto:nbobchev@yahoo.com">nbobchev@yahoo.com</a></li>
          <li><i className="fa-brands fa-linkedin"></i> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/atanas-bobchev-62a99b289/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
          <li><i className="fab fa-github"></i> <strong>GitHub:</strong> <a href="https://github.com/NaskoksaN" target="_blank" rel="noopener noreferrer">NaskoksaN GitHub</a></li>
        </ul>
      )}
    </section>
  );
};

export default ContactSection;
