import React from "react";
import TopBar from "../../Components/TopBar";
import { anggotaList } from "../../utils/anggota";

export default function Anggota() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar showMainLinks={false} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Header Title */}
        <section className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Anggota & Pengurus BUMDes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Struktur kepengurusan dan jajaran anggota BUMDes Mitra Qyta Sejahtera Desa Panisihan.
          </p>
        </section>

        {/* Grid 4 columns per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {anggotaList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Portrait Placeholder */}
              <div className="w-full aspect-[4/5] rounded-xl mb-4 bg-gray-100 relative overflow-hidden flex items-center justify-center border border-gray-100 shadow-inner group">
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-90 transition-transform duration-300 group-hover:scale-105`}
                />
                
                {/* SVG Silhouette / Portrait icon overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center text-white space-y-2">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl font-black tracking-widest border border-white/30 shadow-lg">
                    {item.initials}
                  </div>
                  <svg
                    className="w-16 h-16 text-white/40 absolute bottom-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>

              {/* Nama & Pangkat */}
              <h3 className="text-base font-bold text-gray-900 line-clamp-1">
                {item.nama}
              </h3>
              <p className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full mt-2 border border-green-100">
                {item.pangkat}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}