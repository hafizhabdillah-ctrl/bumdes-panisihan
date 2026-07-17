import React from "react";
import TopBar from "../../Components/TopBar";

export default function VisiMisi() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar showMainLinks={false} />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-3xl flex justify-center font-bold text-gray-900">Visi & Misi</h1>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl flex justify-center font-bold text-gray-900">Visi</h1>
        <p className="mt-4 text-gray-600 flex justify-center text-center">
          Menjadi BUMDes yang  profesional, mandiri, dan bermanfaat untuk seluruh warga Desa Panisihan
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-3xl flex justify-center font-bold text-gray-900">Misi</h1>
        <ul className="text-gray-600 list-disc">
          <li className="py-2">
            Mengembangkan usaha perdagangan umum yang mengakomodir kebutuhan masyarakat desa tanpa mematikan usaha warga.
          </li>
          <li className="py-2">
            Meningkatkan pendapatan asli desa (PADes) melalui unit-unit usaha yang dikelola secara transparan dan akuntabel.
          </li>
          <li className="py-2">
            Menjadi motor penggerak ekonomi desa dengan mengintegrasikan sektor jasa, perdagangan, dan potensi lokal seperti UMKM dan hasil pertanian.
          </li>
          <li className="py-2">
            Menciptakan lapangan kerja baru dan peluang usaha bagi masyarakat Desa Panisihan.
          </li>
        </ul>
      </div>
    </div>
  );
}
