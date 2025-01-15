import { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    primaryColor: 'green',
    colorScheme: 'light',
    navColor: 'evident',
    layout: 'vertical',
    orientation: 'ltr',
  });

  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
    // Apply theme changes
    document.documentElement.setAttribute('data-theme', newSettings.colorScheme);
    document.documentElement.setAttribute('data-orientation', newSettings.orientation);
    // Apply primary color
    document.documentElement.style.setProperty('--primary-color', newSettings.primaryColor);
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);