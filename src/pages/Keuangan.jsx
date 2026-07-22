import React, { useState } from "react";
import TopBar from "../../Components/TopBar";
import { financialData } from "../../utils/keuangan";

export default function Keuangan() {
  const [activeYear, setActiveYear] = useState("2026");

  const currentData = financialData[activeYear];

  const totalPendapatan = currentData.pendapatan.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  const totalPengeluaran = currentData.pengeluaran.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  const labaRugi = totalPendapatan - totalPengeluaran;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar showMainLinks={false} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Header Title */}
        <section className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Laporan Keuangan BUMDes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Transparansi laporan pendapatan, pengeluaran, serta laba rugi BUMDes Mitra Qyta Sejahtera Desa Panisihan.
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

        {/* Financial Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 flex flex-col justify-between hover:shadow-md transition">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                Total Pendapatan
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-800 mt-4">
                {formatCurrency(totalPendapatan)}
              </h3>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Periode Tahun {activeYear}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100 flex flex-col justify-between hover:shadow-md transition">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                Total Pengeluaran
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-rose-700 mt-4">
                {formatCurrency(totalPengeluaran)}
              </h3>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Periode Tahun {activeYear}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex flex-col justify-between hover:shadow-md transition">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Laba Rugi (Netto)
              </span>
              <h3
                className={`text-2xl sm:text-3xl font-extrabold mt-4 ${
                  labaRugi >= 0 ? "text-blue-700" : "text-red-600"
                }`}
              >
                {formatCurrency(labaRugi)}
              </h3>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Hasil Bersih Tahun {activeYear}
            </p>
          </div>
        </div>

        {/* Financial Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">
              Rincian Keuangan ({activeYear})
            </h2>
            <span className="text-xs font-medium text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
              Mata Uang: IDR (Rp)
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead className="bg-gray-100 text-gray-900 font-bold uppercase text-xs">
                <tr>
                  <th className="px-6 py-3.5">No</th>
                  <th className="py-3.5">Kategori / Sumber</th>
                  <th className="px-6 py-3.5 text-right">Jumlah (Rp)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* SECTION: PENDAPATAN */}
                <tr className="bg-emerald-50/70">
                  <td colSpan="3" className="px-6 py-3 font-bold text-emerald-900">
                    PENDAPATAN
                  </td>
                </tr>
                {currentData.pendapatan.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3.5 font-medium text-gray-500">{idx + 1}</td>
                    <td className="font-medium text-gray-800">{item.name}</td>
                    <td className="px-6 py-3.5 text-right font-medium text-emerald-700">
                      {formatCurrency(item.amount)}
                    </td>
                  </tr>
                ))}
                <tr className="bg-emerald-100/50 font-bold">
                  <td colSpan="2" className="px-6 py-3.5 text-emerald-950">
                    Total Pendapatan
                  </td>
                  <td className="px-6 py-3.5 text-right text-emerald-900 text-base">
                    {formatCurrency(totalPendapatan)}
                  </td>
                </tr>

                {/* SECTION: PENGELUARAN */}
                <tr className="bg-rose-50/70">
                  <td colSpan="3" className="px-6 py-3 font-bold text-rose-900">
                    PENGELUARAN
                  </td>
                </tr>
                {currentData.pengeluaran.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3.5 font-medium text-gray-500">{idx + 1}</td>
                    <td className="font-medium text-gray-800">{item.name}</td>
                    <td className="px-6 py-3.5 text-right font-medium text-rose-600">
                      {formatCurrency(item.amount)}
                    </td>
                  </tr>
                ))}
                <tr className="bg-rose-100/50 font-bold">
                  <td colSpan="2" className="px-6 py-3.5 text-rose-950">
                    Total Pengeluaran
                  </td>
                  <td className="px-6 py-3.5 text-right text-rose-900 text-base">
                    {formatCurrency(totalPengeluaran)}
                  </td>
                </tr>

                {/* SECTION: LABA RUGI */}
                <tr className="bg-green-800 text-white font-bold text-base">
                  <td colSpan="2" className="px-6 py-4 uppercase tracking-wider">
                    LABA RUGI (NETTO)
                  </td>
                  <td className="px-6 py-4 text-right">
                    {formatCurrency(labaRugi)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}