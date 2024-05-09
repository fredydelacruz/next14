"use client"
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [fileNames, setFileNames] = useState([]);
  const fileInput = useRef(null);

  useEffect(() => {
    fetch('https://x9gxpoxtaf.execute-api.us-east-1.amazonaws.com/default/listNamePdf')
      .then(response => response.json())
      .then(data => setFileNames(data.file_names));
  }, []);

  const handleUpload = () => {
    const file = fileInput.current.files[0];
    const filename = file.name;

    fetch(`https://rh0ss8b8r6.execute-api.us-east-1.amazonaws.com/v1/manuales-pdf/${filename}`, {
      method: 'PUT',
      body: file
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <main className="flex flex-col items-center text-white">
        <div className="mb-2">
          <h1>Manuales</h1>
        </div>
        <div className="border border-white rounded p-2">
          <ul>
            {fileNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        <input type="file" ref={fileInput} />
        <button onClick={handleUpload}>Subir archivo pdf</button>
      </main>
    </div>
  );
}