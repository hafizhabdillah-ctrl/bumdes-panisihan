import React, { useState } from "react";
import TopBar from "../../Components/TopBar";
import { asetData } from "../../utils/aset";

export default function Aset() {
  const [activeYear, setActiveYear] = useState("2026");

  const currentAset = asetData[activeYear];

  const totalNilaiAset = currentAset.reduce(
    (acc, curr) => acc + curr.harga,
    0
  );

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const getKondisiBadge = (kondisi) => {
    if (kondisi === "Baik") {
      return (
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
          Baik
        </span>
      );
    }
    if (kondisi === "Rusak") {
      return (
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800 border border-amber-200">
          Rusak
        </span>
      );
    }
    return (
      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-rose-100 text-rose-800 border border-rose-200">
        {kondisi}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar showMainLinks={false} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Header Title */}
        <section className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Daftar Aset BUMDes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Inventarisasi dan daftar aset milik BUMDes Mitra Qyta Sejahtera Desa Panisihan.
          </p>
        </section>

        {/* Year Toggle (Swipe / Pill Switch) */}
        <div className="flex justify-center items-center">
          <div className="bg-gray-200 p-1.5 rounded-full flex items-center shadow-inner relative">
            <button
              type="button"
              onClick={() => setActiveYear("2025")}
              className={`relative z-10 px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${
                activeYear === "2025"
                  ? "bg-green-700 text-white shadow-md scale-105"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              2025
            </button>
            <button
              type="button"
              onClick={() => setActiveYear("2026")}
              className={`relative z-10 px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${
                activeYear === "2026"
                  ? "bg-green-700 text-white shadow-md scale-105"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              2026
            </button>
          </div>
        </div>

        {/* Total Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Total Estimasi Nilai Aset ({activeYear})
            </h3>
            <p className="text-2xl sm:text-3xl font-extrabold text-green-800 mt-1">
              {formatCurrency(totalNilaiAset)}
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs bg-green-50 text-green-700 font-semibold px-3 py-1.5 rounded-full border border-green-200">
              Total {currentAset.length} Barang Terdata
            </span>
          </div>
        </div>

        {/* Asset Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">
              Tabel Inventaris Aset BUMDes
            </h2>
            <span className="text-md font-medium text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
              {activeYear}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead className="bg-gray-100 text-gray-900 font-bold uppercase text-xs">
                <tr>
                  <th className="px-6 py-3.5">No</th>
                  <th className="px-6 py-3.5">Nama Barang</th>
                  <th className="px-6 py-3.5">Jumlah</th>
                  <th className="px-6 py-3.5 text-right">Harga</th>
                  <th className="px-6 py-3.5 text-center">Kondisi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentAset.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-500">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {item.barang}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-600">
                      {item.jumlah}
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-gray-800">
                      {formatCurrency(item.harga)}{" "}
                      <span className="text-xs text-gray-400 font-normal">
                        ({item.hargaDisplay})
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {getKondisiBadge(item.kondisi)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}