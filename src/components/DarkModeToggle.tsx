import React, { useState } from 'react';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    () => document.body.classList.contains('dark')
  );

  const toggleDarkMode = () => {
    if (darkMode) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <span className="dark-mode-icon">🌙</span> // Moon icon for dark mode
      ) : (
        <span className="dark-mode-icon">☀️</span> // Sun icon for light mode
      )}
    </button>
  );
};

export default DarkModeToggle;
