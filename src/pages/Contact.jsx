import React from "react";
import TopBar from "../../Components/TopBar";
import { FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar showMainLinks={false} />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Kontak Kami</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Customer Service */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <FaPhone size={60} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Person</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <a className="text-blue-600 hover:text-blue-800 font-medium">
                  01234567891011
                </a>
                <p>Contact Person 1</p>
              </div>
              <div>
                <a className="text-blue-600 hover:text-blue-800 font-medium">
                  01234567891011
                </a>
                <p>Contact Person 2</p>
              </div>
              <div>
                <a className="text-blue-600 hover:text-blue-800 font-medium">
                  01234567891011
                </a>
                <p>Contact Person 3</p>
              </div>
              <div>
                <a className="text-blue-600 hover:text-blue-800 font-medium">
                  01234567891011
                </a>
                <p>Contact Person 4</p>
              </div>
            </div>
          </div>

          {/* Jam Kerja */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <FaClock size={60} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Jam Kerja</h2>
            <div className="space-y-3 text-gray-700">
              <p className="font-medium">Senin – Jumat</p>
              <p className="text-lg">08.00 – 16.00 WIB</p>
            </div>
          </div>

          {/* Alamat Kantor */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <FaMapMarkerAlt size={60} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alamat Kantor</h2>
            <div className="space-y-3 text-gray-700">
              <p className="font-medium">Balai Desa Panisihan</p>
              <p>
                Jl. Kesugihan - Maos - Sampang, Kecamatan Maos, Kabupaten Cilacap, Jawa Tengah, Kode Pos 53272.
              </p>
              <p className="mt-4">
                <span className="font-medium">Email:</span>
                <br />
                <a href="mailto:[EMAIL_ADDRESS]" className="text-blue-600 hover:text-blue-800">
                  [EMAIL_ADDRESS]
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
