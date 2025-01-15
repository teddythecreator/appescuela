const TeacherDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Profesores</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Mis clases</h2>
          <p className="text-gray-600">Administra tus clases actuales</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Grade Management</h2>
          <p className="text-gray-600">Actualizar y revisar las calificaciones de los estudiantes</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Materiales del curso</h2>
          <p className="text-gray-600">Subir y organizar materiales didácticos</p>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;