import { Link } from 'react-router-dom';
import SettingsButton from '../components/SettingsButton';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Bienvenido a Study App
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Su sistema completo de gestión educativa
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* User Access */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceso de usuarios</h2>
            <div className="space-y-4">
              <Link
                to="/login"
                className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Acceso
              </Link>
              <Link
                to="/register"
                className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
              >
                Registro
              </Link>
            </div>
          </div>

          {/* Dashboards */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dashboards</h2>
            <div className="space-y-4">
              <Link
                to="/dashboard/student"
                className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Dashboadr Estudiantes
              </Link>
              <Link
                to="/dashboard/teacher"
                className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
              >
                Dashboard Profesores
              </Link>
              <Link
                to="/dashboard/admin"
                className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
              >
                Admin Dashboard
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Características</h2>
            <div className="space-y-4">
              <Link
                to="/calendar"
                className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700"
              >
                Calendario
              </Link>
              <Link
                to="/files"
                className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700"
              >
                Gestión de archivos
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Enlaces rápidos</h2>
          <div className="inline-flex flex-wrap justify-center gap-4">
            {[
              { to: '/login', text: 'Sign In' },
              { to: '/register', text: 'Create Account' },
              { to: '/calendar', text: 'View Calendar' },
              { to: '/files', text: 'Manage Files' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <SettingsButton />
    </div>
  );
};

export default Home;