import React from 'react';
import TopBar from '../../../Components/TopBar';

export default function SportCenter() {
    const facilities = [
        {
            title: "Kolam Renang",
            description: "Fasilitas kolam renang yang bersih, jernih, dan aman untuk anak-anak serta keluarga menikmati liburan menyegarkan.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2m-4-3h9m-9 3h9m-9 3h9M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
            )
        },
        {
            title: "Playground Anak",
            description: "Taman bermain ramah anak yang menyenangkan untuk melatih motorik, interaksi sosial, dan keceriaan buah hati Anda.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            )
        },
        {
            title: "Kuliner & UMKM",
            description: "Pusat jajanan lokal dan produk unggulan Desa Panisihan yang dikelola langsung oleh pelaku usaha mikro desa.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            )
        },
        {
            title: "Mushola",
            description: "Sarana ibadah yang bersih, tenang, dan nyaman untuk memastikan Anda dapat beribadah tepat waktu selama berkunjung.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50/50">
            <TopBar showMainLinks={false} />

            {/* Main Content Area */}
            <main className="flex-grow max-w-6xl mx-auto px-6 py-12 space-y-16">
                
                {/* Introduction Section */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-white p-2 rounded-2xl shadow-xl overflow-hidden">
                            <img 
                                src="/sportcenter.jpeg" 
                                alt="Sport Center Desa Panisihan" 
                                className="w-full h-80 sm:h-96 object-cover rounded-xl transform transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>
                    
                    <div className="lg:col-span-7">
                        <h2 className="text-3xl mb-3 font-extrabold text-slate-800 tracking-tight">
                            Sport Center
                        </h2>
                        <div className="h-1 w-45 bg-emerald-600 rounded"></div>
                        <div className='mt-6'>
                        <p className="text-slate-600 text-justify leading-relaxed text-base py-4">
                            Desa Panisihan dengan bangga menghadirkan Sport Center terpadu, sebuah kawasan wisata buatan inovatif yang telah resmi beroperasi dan berkekuatan hukum berdasarkan Surat Keputusan (SK) Kepala Desa. 
                            Tempat ini dirancang khusus untuk menyatukan kegiatan olahraga, rekreasi keluarga, sekaligus menjadi wadah strategis bagi geliat ekonomi lokal. 
                        </p>
                        <p className="text-slate-600 text-justify leading-relaxed text-base">
                            Sebagai pusat aktivitas dan destinasi liburan masyarakat, Sport Center Desa Panisihan dikonseptualisasikan bukan sekadar tempat untuk menjaga kebugaran fisik, melainkan sebuah ruang publik kreatif yang dibangun untuk mempererat kebersamaan warga sekaligus menggerakkan roda ekonomi desa.
                        </p>
                        </div>
                    </div>
                </section>

                {/* Facilities Grid */}
                <section className="space-y-8">
                    <div className="text-center max-w-2xl mx-auto space-y-2">
                        <h2 className="text-3xl font-extrabold text-slate-800">Fasilitas Utama</h2>
                        <p className="text-slate-500">
                            Kami menyediakan berbagai sarana pendukung rekreasi dan olahraga untuk kenyamanan para pengunjung.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {facilities.map((facility, index) => (
                            <div 
                                key={index} 
                                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
                            >
                                <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl mb-4">
                                    {facility.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">{facility.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{facility.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-green-900 text-green-50 mt-auto">
                <div className="border-t border-green-800/50 py-6 text-center text-sm text-green-100/80">
                    © {new Date().getFullYear()} BUMDes Panisihan - KKN Tematik Literasi Universitas Jenderal Soedirman
                </div>
            </footer>
        </div>
    );
}
