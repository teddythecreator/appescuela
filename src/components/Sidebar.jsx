import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  HomeIcon,
  UserIcon,
  CalendarIcon,
  DocumentIcon,
  PhotoIcon,
  AcademicCapIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

const Sidebar = ({ userRole }) => {
  const menuItems = {
    student: [
      { name: 'Dashboard', icon: HomeIcon, path: '/dashboard/student' },
      { name: 'Calendar', icon: CalendarIcon, path: '/calendar' },
      { name: 'Events', icon: DocumentIcon, path: '/events' },
      { name: 'Gallery', icon: PhotoIcon, path: '/gallery' },
      { name: 'Exams', icon: AcademicCapIcon, path: '/exams' },
      { name: 'Files', icon: DocumentIcon, path: '/files' },
    ],
    teacher: [
      { name: 'Dashboard', icon: HomeIcon, path: '/dashboard/teacher' },
      { name: 'Calendar', icon: CalendarIcon, path: '/calendar' },
      { name: 'Events', icon: DocumentIcon, path: '/events' },
      { name: 'Gallery', icon: PhotoIcon, path: '/gallery' },
      { name: 'Exams', icon: AcademicCapIcon, path: '/exams' },
      { name: 'Files', icon: DocumentIcon, path: '/files' },
    ],
    admin: [
      { name: 'Dashboard', icon: HomeIcon, path: '/dashboard/admin' },
      { name: 'Users', icon: UserIcon, path: '/admin/users' },
      { name: 'Settings', icon: Cog6ToothIcon, path: '/admin/settings' },
    ],
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect to home page after logout
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const items = menuItems[userRole] || menuItems.student;

  return (
    <div className="h-screen w-64 bg-[#1E1E1E] text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">School Portal</h2>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-700 transition-colors">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <span className="ml-3 flex-1 text-left">John Doe</span>
          </Menu.Button>
          
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute bottom-full left-0 w-full mb-2 bg-gray-800 rounded-lg shadow-lg">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/profile"
                      className={`${
                        active ? 'bg-gray-700' : ''
                      } flex items-center px-4 py-2 text-sm`}
                    >
                      <UserIcon className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/settings"
                      className={`${
                        active ? 'bg-gray-700' : ''
                      } flex items-center px-4 py-2 text-sm`}
                    >
                      <Cog6ToothIcon className="h-4 w-4 mr-2" />
                      Settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={handleLogout}
                      className={`${
                        active ? 'bg-gray-700' : ''
                      } flex items-center w-full px-4 py-2 text-sm text-red-400`}
                    >
                      <ArrowLeftOnRectangleIcon className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;