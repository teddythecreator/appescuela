import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useSettings } from '../contexts/SettingsContext';

const SettingsModal = ({ isOpen, onClose }) => {
  const { settings, updateSettings } = useSettings();

  const colors = {
    green: '#16a34a',
    'neon-blue': '#00f2fe',
    'royal-blue': '#4169e1',
    'tomato-orange': '#ff6347',
  };

  const schemes = ['light', 'dark', 'system'];
  const navStyles = ['blend-in', 'discrete', 'evident'];
  const layouts = ['vertical', 'horizontal'];
  const orientations = ['ltr', 'rtl'];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <Dialog.Title as="div" className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium">App Settings</h3>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </Dialog.Title>

                <div className="space-y-6">
                  {/* Primary Color */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Primary Color</h4>
                    <div className="flex gap-3">
                      {Object.entries(colors).map(([name, value]) => (
                        <button
                          key={name}
                          className={`w-8 h-8 rounded-full ${
                            settings.primaryColor === name
                              ? 'ring-2 ring-offset-2 ring-blue-500'
                              : ''
                          }`}
                          style={{ backgroundColor: value }}
                          onClick={() => updateSettings({ primaryColor: name })}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Color Scheme */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Color Scheme</h4>
                    <div className="flex gap-3">
                      {schemes.map((scheme) => (
                        <button
                          key={scheme}
                          className={`px-4 py-2 rounded-lg ${
                            settings.colorScheme === scheme
                              ? 'bg-blue-100 text-blue-600'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                          onClick={() => updateSettings({ colorScheme: scheme })}
                        >
                          {scheme.charAt(0).toUpperCase() + scheme.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Nav Color */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Nav Color</h4>
                    <div className="flex gap-3">
                      {navStyles.map((style) => (
                        <button
                          key={style}
                          className={`px-4 py-2 rounded-lg ${
                            settings.navColor === style
                              ? 'bg-blue-100 text-blue-600'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                          onClick={() => updateSettings({ navColor: style })}
                        >
                          {style.charAt(0).toUpperCase() + style.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Layout */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Layout</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {layouts.map((layout) => (
                        <button
                          key={layout}
                          className={`p-4 rounded-lg border-2 ${
                            settings.layout === layout
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200'
                          }`}
                          onClick={() => updateSettings({ layout: layout })}
                        >
                          <div className="aspect-video bg-gray-200 rounded mb-2" />
                          {layout.charAt(0).toUpperCase() + layout.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Orientation */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Orientation</h4>
                    <div className="flex gap-3">
                      {orientations.map((orientation) => (
                        <button
                          key={orientation}
                          className={`px-4 py-2 rounded-lg ${
                            settings.orientation === orientation
                              ? 'bg-blue-100 text-blue-600'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                          onClick={() => updateSettings({ orientation: orientation })}
                        >
                          {orientation.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SettingsModal;