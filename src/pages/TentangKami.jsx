import React from "react";
import TopBar from "../../Components/TopBar";

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar showMainLinks={false} />

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-10">
        <section className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Tentang Kami</h1>
          <p className="mt-4 text-gray-600 mx-auto">
            BUMDes Mitra Qyta Sejahtera merupakan BUMDes di Desa Panisihan Kecamatan Maos Kabupaten Cilacap. BUMDes Mitra Qyta Sejahtera bergerak pada jasa pengelolahan sampah, bidang pertanian, peternakan, dan jasa pengelolaan sport center. Kami mengelola dengan semangat kebersamaan dan gotong royong dengan prinsip pembangunan inklusif, keterbukaan, tanggung jawab dengan mengedepankan prinsip <i>Sustainable development</i>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center text-gray-900">Struktur</h2>
          <div className="flex justify-center items-center mt-6">
            <img src="/struktur.jpeg" alt="Struktur organisasi" className="max-w-full w-80 md:w-96 lg:w-[680px] h-auto rounded shadow" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center text-gray-900">Dasar Hukum</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Peraturan Pemerintah (PP) No. 11 Tahun 2021 tentang Badan Usaha Milik Desa</h3>
                  <a href="https://drive.google.com/uc?export=download&id=1LcDj3bHmt3HXTA_55xXCIgiiR_F5JvVZ" className="text-sky-500 mt-3 inline-block">Download</a>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-300" />
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Nomor Pokok Wajib Pajak (NPWP)</h3>
                  <p className="text-gray-400 mt-10">12.707.117.3-522.000</p>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-300" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
