const TeacherDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">My Classes</h2>
          <p className="text-gray-600">Manage your current classes</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Grade Management</h2>
          <p className="text-gray-600">Update and review student grades</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Course Materials</h2>
          <p className="text-gray-600">Upload and organize teaching materials</p>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;