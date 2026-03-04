import React, { useState } from 'react';

export const Buscador = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscando:', search);
    setSearch('');
    setMobileOpen(false); // cerrar en móvil
  };

  return (
    <>
      {/* 🖥️ Desktop */}
      <form
        onSubmit={handleSubmit}
        className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-2 w-72"
      >
        <svg className="w-5 h-5 text-gray-500 dark:text-gray-300 mr-2" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar artículos fisicos y digitales..."
          className="bg-transparent w-full focus:outline-none text-sm text-gray-800 dark:text-white"
        />
      </form>

      {/* 📱 Mobile: icono de lupa */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </button>
      </div>

      {/* 📱 Mobile: Overlay búsqueda */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col p-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            >
              <svg className="w-5 h-5 text-gray-800 dark:text-white" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <form onSubmit={handleSubmit} className="flex-1 flex bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
                className="bg-transparent w-full focus:outline-none text-sm text-gray-900 dark:text-white"
                placeholder="Buscar..."
              />
              <button type="submit" className="ml-2 text-blue-600 dark:text-blue-400 font-semibold text-sm">
                Buscar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
