import { useState } from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import SettingsModal from './SettingsModal';

const SettingsButton = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowSettings(true)}
        className="fixed bottom-4 right-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        title="Settings"
      >
        <Cog6ToothIcon className="h-6 w-6 text-gray-600" />
      </button>
      <SettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </>
  );
};

export default SettingsButton;