const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Gestión de usuarios</h2>
          <p className="text-gray-600">Gestionar estudiantes y profesores</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Gestión de cursos</h2>
          <p className="text-gray-600">Crear y gestionar cursos</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Configuración del sistema</h2>
          <p className="text-gray-600">Configurar parámetros del sistema</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;