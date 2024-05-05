"use client"
import { useEffect, useState } from 'react';

export default function Home() {
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    fetch('https://x9gxpoxtaf.execute-api.us-east-1.amazonaws.com/default/listNamePdf')
      .then(response => response.json())
      .then(data => setFileNames(data.file_names));
  }, []);

  return (
    <div>
      <main className="flex flex-col items-center text-white">
        <div className="mb-2">
          <h1>Lista de Manuales</h1>
        </div>
        <div className="border border-white rounded p-2">
          <ul>
            {fileNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}