import React from "react";
import TopBar from "../../Components/TopBar";
import { potensi } from "../../utils/potensi";

export default function PotensiDesa() {

  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar showMainLinks={false} />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl flex justify-center font-bold text-gray-900 mb-8">Potensi Desa Panisihan</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {potensi.map((s) => (
            <div key={s.label} className="text-center bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow">
              <div className="text-5xl md:text-5xl font-bold text-black">{s.value}</div>
              <div className="mt-3 text-gray-700">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
