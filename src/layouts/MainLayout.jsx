import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import SettingsButton from '../components/SettingsButton';

const MainLayout = ({ userRole }) => {
  return (
    <div className="flex">
      <Sidebar userRole={userRole} />
      <main className="flex-1 p-8 relative">
        <Outlet />
        <SettingsButton />
      </main>
    </div>
  );
};

export default MainLayout;