import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopBar({ showMainLinks = false }) {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 px-6 border-b border-gray-200 h-16 items-stretch bg-white/95 backdrop-blur shadow-sm">
      <div className="flex items-center font-bold text-green-800 text-xl cursor-pointer" onClick={() => navigate('/')}>
        <p>BUMDes Panisihan</p>
      </div>

      <div className="flex flex-row justify-center text-gray-500 h-full">
        {showMainLinks && (
          <>
            <div className="cursor-pointer flex items-center px-4 hover:bg-gray-100 hover:text-green-800 border-b-2 border-transparent hover:border-green-800 transition-all whitespace-nowrap">
              <a href="#beranda">Beranda</a>
            </div>
            <div className="cursor-pointer flex items-center px-4 hover:bg-gray-100 hover:text-green-800 border-b-2 border-transparent hover:border-green-800 transition-all whitespace-nowrap">
              <a href="#unit">Unit Usaha</a>
            </div>
            <div className="cursor-pointer flex items-center px-4 hover:bg-gray-100 hover:text-green-800 border-b-2 border-transparent hover:border-green-800 transition-all whitespace-nowrap">
              <a href="#desa">Desa</a>
            </div>
          </>
        )}
      </div>

        <div className="flex items-center justify-end space-x-4 text-gray-500 h-full">
        <div ref={dropdownRef} className={`cursor-pointer flex items-center px-4 transition-all whitespace-nowrap relative ${isOpen ? 'text-green-800 border-b-2 border-green-800' : 'hover:text-green-800 border-b-2 border-transparent hover:border-green-800'}`}>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center py-2 whitespace-nowrap focus:outline-none"
              aria-expanded={isOpen}
            >
              Tentang
              <svg className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute right-0 top-full mt-3 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-50 py-1">
                <button
                  type="button"
                  onClick={() => { setIsOpen(false); navigate('/tentang-kami'); }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                >
                  Tentang Kami
                </button>
                <button
                  type="button"
                  onClick={() => { setIsOpen(false); navigate('/visi-misi'); }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                >
                  Visi & Misi
                </button>
                <button
                  type="button"
                  onClick={() => { setIsOpen(false); navigate('/potensi-desa'); }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                >
                  Potensi Desa
                </button>
              </div>
            )}
          </div>

          <div className="cursor-pointer flex items-center px-4 hover:bg-gray-100 hover:text-green-800 border-b-2 border-transparent hover:border-green-800 transition-all whitespace-nowrap">
            <button className="hover:text-green-800" onClick={() => navigate('/contact')}>Kontak Kami</button>
          </div>
        </div>
    </div>
  );
}
