import React from 'react';
import TopBar from '../../../Components/TopBar';

export default function Peternakan() {
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
                                src="/peternakan.jpg" 
                                alt="Peternakan Desa Panisihan" 
                                className="w-full h-80 sm:h-96 object-cover rounded-xl transform transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>
                    
                    <div className="lg:col-span-7">
                        <h2 className="text-3xl mb-3 font-extrabold text-slate-800 tracking-tight">
                            Peternakan
                        </h2>
                        <div className="h-1 w-45 bg-emerald-600 rounded"></div>
                        <div className='mt-6'>
                        <p className="text-slate-600 text-justify leading-relaxed text-base py-4">
                            Peternakan Desa Panisihan adalah salah satu unit usaha Badan Usaha Milik Desa (BUMDes) Panisihan yang berfokus pada pengembangan sektor peternakan. 
                        </p>
                        <p className="text-slate-600 text-justify leading-relaxed text-base">
                            Unit peternakan ini memiliki fokus utama pada pengembangan ternak kambing dan domba yang dikelola secara profesional dan berkelanjutan. Dengan sistem yang terintegrasi mulai dari pemeliharaan, pakan, hingga pemasaran, unit ini berperan penting dalam meningkatkan ekonomi desa dan memenuhi kebutuhan protein masyarakat.
                        </p>
                        </div>
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
