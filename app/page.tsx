'use client';

import { useState, ChangeEvent } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');

  const cleanText = () => {
    if (!inputText.trim()) return;
    
    // Paso 1: Eliminar números que aparecen después de un punto
    let cleanedText = inputText.replace(/\.(\d+)/g, '.');
    
    // Paso 2: Eliminar caracteres especiales: #, ##, *, **
    cleanedText = cleanedText.replace(/[#*]+/g, '');
    
    // Paso 3: Eliminar referencias e hipervínculos encerrados en ([ ])
    // Busca patrones como ([texto](url)) y los elimina
    cleanedText = cleanedText.replace(/\(\[.*?\]\(.*?\)\)/g, '');
    
    setOutputText(cleanedText);
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleOutputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setOutputText(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#071124] to-[#0c1c42] text-white">
      <div className="container mx-auto py-12 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Text Cleaner 🧹</h1>
          <p className="text-[#94a3b8]">Limpia tu texto de números de referencia y más</p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="card mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#60a5fa]">Texto Original</h2>
            <div className="textarea-container">
              <textarea
                className="textarea"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Pega aquí tu texto con números de referencia..."
              />
            </div>
          </div>

          <div className="flex justify-center my-8">
            <button 
              className="btn btn-primary"
              onClick={cleanText}
            >
              Limpiar Texto
            </button>
          </div>

          {outputText && (
            <div className="card">
              <h2 className="text-xl font-semibold mb-4 text-[#60a5fa]">Texto Limpio</h2>
              <div className="textarea-container">
                <textarea
                  className="textarea"
                  value={outputText}
                  onChange={handleOutputChange}
                  placeholder="El texto limpio aparecerá aquí..."
                />
              </div>
            </div>
          )}
        </div>

        <footer className="mt-16 text-center text-sm text-[#94a3b8]">
          <p>Desarrollado con Next.js - 2025</p>
        </footer>
      </div>
    </div>
  );
}
