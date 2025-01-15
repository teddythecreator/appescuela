import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { UserCircleIcon, KeyIcon, MapPinIcon, PhotoIcon, CalendarIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Profile = () => {
  const [userForm, setUserForm] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Student at Computer Science',
    location: 'New York',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleUserSubmit = (e) => {
    e.preventDefault();
    // Handle user data update
    console.log('User data updated:', userForm);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password update
    console.log('Password updated:', passwordForm);
  };

  const tabs = [
    { name: 'Profile', icon: UserCircleIcon },
    { name: 'Events', icon: CalendarIcon },
    { name: 'Gallery', icon: PhotoIcon },
    { name: 'Exams', icon: AcademicCapIcon },
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {/* Profile Header */}
      <div className="relative mb-8">
        <div className="h-48 w-full bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg"></div>
        <div className="absolute bottom-0 left-8 transform translate-y-1/2">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="Profile"
            className="h-32 w-32 rounded-full ring-4 ring-white bg-white"
          />
        </div>
      </div>

      <div className="mt-16">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
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
                <div className="flex items-center justify-center space-x-2">
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.name}</span>
                </div>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            {/* Profile Tab */}
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* User Information Form */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-medium mb-4">User Information</h3>
                  <form onSubmit={handleUserSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        value={userForm.name}
                        onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        value={userForm.email}
                        onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Bio</label>
                      <textarea
                        value={userForm.bio}
                        onChange={(e) => setUserForm({ ...userForm, bio: e.target.value })}
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700"
                    >
                      Actualizar perfil
                    </button>
                  </form>
                </div>

                {/* Password Change Form */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-medium mb-4">Change Password</h3>
                  <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                      Contraseña actual
                      </label>
                      <input
                        type="password"
                        value={passwordForm.currentPassword}
                        onChange={(e) =>
                          setPasswordForm({ ...passwordForm, currentPassword: e.target.value })
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                      Nueva contraseña
                      </label>
                      <input
                        type="password"
                        value={passwordForm.newPassword}
                        onChange={(e) =>
                          setPasswordForm({ ...passwordForm, newPassword: e.target.value })
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                      Confirmar nueva contraseña
                      </label>
                      <input
                        type="password"
                        value={passwordForm.confirmPassword}
                        onChange={(e) =>
                          setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700"
                    >
                      Actualizar contraseña
                    </button>
                  </form>
                </div>

                {/* Address Information */}
                <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
                  <h3 className="text-lg font-medium mb-4">Address Information</h3>
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Street Address
                      </label>
                      <input
                        type="text"
                        value={userForm.address}
                        onChange={(e) => setUserForm({ ...userForm, address: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">City</label>
                      <input
                        type="text"
                        value={userForm.city}
                        onChange={(e) => setUserForm({ ...userForm, city: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">State</label>
                      <input
                        type="text"
                        value={userForm.state}
                        onChange={(e) => setUserForm({ ...userForm, state: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                      Código postal
                      </label>
                      <input
                        type="text"
                        value={userForm.zip}
                        onChange={(e) => setUserForm({ ...userForm, zip: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700"
                      >
                        Actualizar dirección
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Tab.Panel>

            {/* Events Tab */}
            <Tab.Panel>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4 flex justify-between items-center">
                  <h3 className="text-lg font-medium">Mis eventos</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Add Event
                  </button>
                </div>
                {/* Event list will go here */}
              </div>
            </Tab.Panel>

            {/* Gallery Tab */}
            <Tab.Panel>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4 flex justify-between items-center">
                  <h3 className="text-lg font-medium">Mi galería</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Upload Photos
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* Gallery grid will go here */}
                </div>
              </div>
            </Tab.Panel>

            {/* Exams Tab */}
            <Tab.Panel>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4">
                  <h3 className="text-lg font-medium">Próximos exámenes</h3>
                </div>
                {/* Exam list will go here */}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Profile;