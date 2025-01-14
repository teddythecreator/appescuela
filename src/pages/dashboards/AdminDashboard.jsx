const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">User Management</h2>
          <p className="text-gray-600">Manage students and teachers</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Course Management</h2>
          <p className="text-gray-600">Create and manage courses</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">System Settings</h2>
          <p className="text-gray-600">Configure system parameters</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;