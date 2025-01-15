import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Gallery = () => {
  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setImages([...images, ...newImages]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': []
    }
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Galeria</h1>
      
      <div
        {...getRootProps()}
        className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer mb-8
          ${isDragActive ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-600">Deja las imágenes aquí...</p>
        ) : (
          <p className="text-gray-600">
            Arrastre y suelte las imágenes aquí o haga clic para seleccionar archivos
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.preview}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <button className="text-white bg-red-600 px-4 py-2 rounded-md">
                Borrar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;