import React from 'react';
import './Settings.css';

const LANGUAGES = ['English', 'French', 'German', 'Russian', 'Spanish', 'Chinese'];

const Settings = ({ currentLanguage, onLanguageChange }) => {
  const handleChange = (event) => {
    onLanguageChange(event.target.value);
  };

  return (
    <div className="settings">
      <label htmlFor="language-select">Select Language:</label>
      <select id="language-select" value={currentLanguage} onChange={handleChange}>
        {LANGUAGES.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Settings;
