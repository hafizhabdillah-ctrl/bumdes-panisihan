import React from "react";
import TopBar from "../../Components/TopBar";
import { potensi } from "../../utils/potensi";
import { tanah } from "../../utils/potensi";

export default function PotensiDesa() {

  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar showMainLinks={false} />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-3xl flex justify-center font-bold text-gray-900 mb-8">Potensi Desa Panisihan</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {potensi.map((s) => {
            const specialPos = s.label && s.label.toLowerCase().includes("umkm") ? "md:col-start-2 md:row-start-2" : "";
            return (
              <div key={s.label} className={`text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow ${specialPos}`}>
                <div className="text-5xl md:text-4xl font-bold text-black">{s.value}</div>
                <div className="mt-3 text-gray-700 text-sm">{s.label}</div>
              </div>
            );
          })}
        </div>

        <h1 className="text-3xl flex mt-6 justify-center font-bold text-gray-900 mb-8">Perincian Tanah Desa Panisihan</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {tanah.map((s) => (
            <div key={s.label} className="text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl md:text-4xl font-bold text-black">
                <span>
                  {s.value}
                </span>
                <span className="text-xl text-gray-500">
                  ha
                </span>
              </div>
              <div className="mt-3 text-gray-700 text-sm">{s.label} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
