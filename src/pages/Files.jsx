import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Files = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle file upload logic here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de archivos</h1>
      
      <div
        {...getRootProps()}
        className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer
          ${isDragActive ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300'}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-indigo-600">Suelta los archivos aquí...</p>
        ) : (
          <p className="text-gray-600">
            Arrastre y suelte algunos archivos aquí o haga clic para seleccionar archivos
          </p>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Archivos subidos</h2>
        {/* File list will go here */}
      </div>
    </div>
  );
};

export default Files;