import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { ExclamationTriangleIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Checksheet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const categories = [
    'Buttons',
    'Alerts',
    'Cards',
    'Forms',
    'Loaders',
    'Typography',
    'Layout',
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Component Checksheet</h1>

      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1 mb-8">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow text-blue-600'
                    : 'text-gray-600 hover:bg-white/[0.12] hover:text-blue-600'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {/* Buttons Panel */}
          <Tab.Panel>
            <div className="grid gap-4">
              <h2 className="text-xl font-semibold mb-4">Button Variants</h2>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Primary Button
                  </button>
                  <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                    Secondary Button
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Success Button
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    Danger Button
                  </button>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                    Outline Primary
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-600 rounded-lg hover:bg-gray-50">
                    Outline Secondary
                  </button>
                  <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50">
                    Outline Success
                  </button>
                  <button className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50">
                    Outline Danger
                  </button>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                    Rounded Primary
                  </button>
                  <button className="px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700">
                    Rounded Secondary
                  </button>
                  <button disabled className="px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed">
                    Disabled Button
                  </button>
                </div>
              </div>
            </div>
          </Tab.Panel>

          {/* Alerts Panel */}
          <Tab.Panel>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <div className="flex">
                  <InformationCircleIcon className="h-5 w-5 text-blue-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Information</h3>
                    <p className="mt-2 text-sm text-blue-700">This is an information message.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                <div className="flex">
                  <CheckCircleIcon className="h-5 w-5 text-green-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">Success</h3>
                    <p className="mt-2 text-sm text-green-700">Operation completed successfully.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                <div className="flex">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Warning</h3>
                    <p className="mt-2 text-sm text-yellow-700">Please proceed with caution.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                <div className="flex">
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Error</h3>
                    <p className="mt-2 text-sm text-red-700">Something went wrong.</p>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>

          {/* Cards Panel */}
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Basic Card */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2">Basic Card</h3>
                <p className="text-gray-600">This is a basic card component with some content.</p>
              </div>

              {/* Card with Image */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1706293161681-17a7b67bd16e"
                  alt="Card"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Card with Image</h3>
                  <p className="text-gray-600">A card featuring an image and content below.</p>
                </div>
              </div>

              {/* Interactive Card */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">Interactive Card</h3>
                <p className="text-gray-600">This card has hover effects and interactions.</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            </div>
          </Tab.Panel>

          {/* Forms Panel */}
          <Tab.Panel>
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Form Components</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Text Input</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter text"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Input</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Textarea</label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter description"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label className="ml-2 block text-sm text-gray-700">Checkbox option</label>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="radio-group"
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label className="ml-2 block text-sm text-gray-700">Radio 1</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="radio-group"
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label className="ml-2 block text-sm text-gray-700">Radio 2</label>
                  </div>
                </div>
              </form>
            </div>
          </Tab.Panel>

          {/* Loaders Panel */}
          <Tab.Panel>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Spinner */}
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="mt-2 text-sm text-gray-600">Spinner</span>
              </div>

              {/* Pulse */}
              <div className="flex flex-col items-center">
                <div className="animate-pulse h-8 w-8 bg-blue-600 rounded-full"></div>
                <span className="mt-2 text-sm text-gray-600">Pulse</span>
              </div>

              {/* Bounce */}
              <div className="flex flex-col items-center">
                <div className="space-x-1">
                  <div className="inline-block h-3 w-3 animate-bounce rounded-full bg-blue-600"></div>
                  <div className="inline-block h-3 w-3 animate-bounce rounded-full bg-blue-600 [animation-delay:0.2s]"></div>
                  <div className="inline-block h-3 w-3 animate-bounce rounded-full bg-blue-600 [animation-delay:0.4s]"></div>
                </div>
                <span className="mt-2 text-sm text-gray-600">Bounce</span>
              </div>

              {/* Progress */}
              <div className="flex flex-col items-center">
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="w-2/3 h-full bg-blue-600 rounded-full"></div>
                </div>
                <span className="mt-2 text-sm text-gray-600">Progress</span>
              </div>
            </div>
          </Tab.Panel>

          {/* Typography Panel */}
          <Tab.Panel>
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold">Heading 1</h1>
                <h2 className="text-3xl font-bold">Heading 2</h2>
                <h3 className="text-2xl font-bold">Heading 3</h3>
                <h4 className="text-xl font-bold">Heading 4</h4>
                <h5 className="text-lg font-bold">Heading 5</h5>
                <h6 className="text-base font-bold">Heading 6</h6>
              </div>

              <div>
                <p className="text-sm text-gray-600">Small Text</p>
                <p className="text-base text-gray-700">Base Text</p>
                <p className="text-lg text-gray-800">Large Text</p>
                <p className="text-xl text-gray-900">Extra Large Text</p>
              </div>

              <div>
                <p className="font-light">Light Text</p>
                <p className="font-normal">Normal Text</p>
                <p className="font-medium">Medium Text</p>
                <p className="font-semibold">Semibold Text</p>
                <p className="font-bold">Bold Text</p>
              </div>
            </div>
          </Tab.Panel>

          {/* Layout Panel */}
          <Tab.Panel>
            <div className="space-y-8">
              {/* Grid Layout */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Grid Layout</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded">Column 1</div>
                  <div className="bg-blue-100 p-4 rounded">Column 2</div>
                  <div className="bg-blue-100 p-4 rounded">Column 3</div>
                </div>
              </div>

              {/* Flex Layout */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Flex Layout</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 bg-green-100 p-4 rounded">Flex Item 1</div>
                  <div className="flex-1 bg-green-100 p-4 rounded">Flex Item 2</div>
                  <div className="flex-1 bg-green-100 p-4 rounded">Flex Item 3</div>
                </div>
              </div>

              {/* Container with Sidebar */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Sidebar Layout</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-64 bg-gray-100 p-4 rounded">Sidebar</div>
                  <div className="flex-1 bg-gray-100 p-4 rounded">Main Content</div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      {/* Loading Demo */}
      <div className="mt-8">
        <button
          onClick={handleLoadingDemo}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </span>
          ) : (
            'Test Loading State'
          )}
        </button>
      </div>
    </div>
  );
};

export default Checksheet;