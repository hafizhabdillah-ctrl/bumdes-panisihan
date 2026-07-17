import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopBar({ showMainLinks = false }) {
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (path) => {
    setIsOpen(false);
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <div ref={menuRef} className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-gray-200">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavigation('/')}>          <img src="/logo.png" alt="Logo Panisihan" className="h-10 w-10 object-contain" />
          <p className="text-lg md:text-xl font-bold text-green-800">BUMDes Panisihan</p>
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center text-gray-500 space-x-2">
          {showMainLinks && (
            <>
              <a href="#beranda" className="px-3 py-5 text-sm font-medium hover:bg-gray-100 hover:text-green-800 hover:border-b-2 transition">Beranda</a>
              <a href="#unit" className="px-3 py-5 text-sm font-medium hover:bg-gray-100 hover:text-green-800 hover:border-b-2 transition">Unit Usaha</a>
              <a href="#desa" className="px-3 py-5 text-sm font-medium hover:bg-gray-100 hover:text-green-800 hover:border-b-2 transition">Desa</a>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2 text-gray-500">
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={`flex items-center px-3 py-5 hover:border-b-2 text-sm font-medium transition bg-gray-100 ${isOpen ? 'text-green-800 border-b-2' : 'hover:text-green-800'}`}
                aria-expanded={isOpen}
              >
                Tentang
                <svg className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-50 py-1">
                  <button
                    type="button"
                    onClick={() => handleNavigation('/tentang-kami')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                  >
                    Tentang Kami
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigation('/visi-misi')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                  >
                    Visi & Misi
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigation('/potensi-desa')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                  >
                    Potensi Desa
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleNavigation('/contact')}
              className="px-3 py-5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:border-b-2 hover:text-green-800 transition"
            >
              Kontak Kami
            </button>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-green-100 hover:text-green-800 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col gap-1 px-4 py-3 text-gray-700">
            {showMainLinks && (
              <>
                <a href="#beranda" className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-green-50 hover:text-green-800" onClick={() => setMobileMenuOpen(false)}>Beranda</a>
                <a href="#unit" className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-green-50 hover:text-green-800" onClick={() => setMobileMenuOpen(false)}>Unit Usaha</a>
                <a href="#desa" className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-green-50 hover:text-green-800" onClick={() => setMobileMenuOpen(false)}>Desa</a>
              </>
            )}
            <button type="button" onClick={() => handleNavigation('/tentang-kami')} className="text-left rounded-lg px-3 py-2 text-sm font-medium hover:bg-green-50 hover:text-green-800">Tentang Kami</button>
            <button type="button" onClick={() => handleNavigation('/visi-misi')} className="text-left rounded-lg px-3 py-2 text-sm font-medium hover:bg-green-50 hover:text-green-800">Visi & Misi</button>
            <button type="button" onClick={() => handleNavigation('/potensi-desa')} className="text-left rounded-lg px-3 py-2 text-sm font-medium hover:bg-green-50 hover:text-green-800">Potensi Desa</button>
            <button type="button" onClick={() => handleNavigation('/contact')} className="text-left rounded-lg px-3 py-2 text-sm font-medium hover:bg-green-50 hover:text-green-800">Kontak Kami</button>
          </div>
        </div>
      )}
    </div>
  );
}
