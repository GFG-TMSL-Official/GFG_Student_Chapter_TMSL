import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Check if dark mode is already enabled in localStorage or system preferences
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(savedMode === 'true');
      document.body.classList.toggle('dark', savedMode === 'true');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
      document.body.classList.toggle('dark', systemPrefersDark);
    }
  }, []);

  // Toggle dark mode and store preference in localStorage
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.body.classList.toggle('dark', newMode);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        className="p-3 rounded-lg bg-primary text-white dark:bg-darkPrimary dark:text-darkText hover:bg-secondary dark:hover:bg-darkText transition-all"
      >
        {isDarkMode ? (
          <span role="img" aria-label="Sun Icon">
            🌞 Light Mode
          </span>
        ) : (
          <span role="img" aria-label="Moon Icon">
            🌙 Dark Mode
          </span>
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
