import React, { useRef, useEffect, useState } from "react";
import { unitUsaha } from "../../utils/unit";
import { useNavigate } from "react-router-dom";

export default function Main() {
    const carouselRef = useRef(null);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        try {
            document.documentElement.style.scrollBehavior = "smooth";
        } catch (e) {}
        setMounted(true);
        return () => {
            try {
                document.documentElement.style.scrollBehavior = "auto";
            } catch (e) {}
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const scrollCarousel = (direction) => {
        if (!carouselRef.current) return;

        const cardWidth = 500;
        carouselRef.current.scrollBy({
            left: direction * cardWidth,
            behavior: "smooth",
        });
    };

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(8px)", transition: "opacity 400ms ease, transform 400ms ease" }}>
            {/* Topbar */}
            <div className="sticky top-0 z-50 flex items-center justify-between px-6 border-b border-gray-200 h-16 bg-white/95 backdrop-blur shadow-sm">

                {/* Title */}
                <div className="flex items-center font-bold text-green-800 text-xl cursor">
                    <p>BUMDes Panisihan</p>
                </div>

                {/* Section */}
                <div className="flex-1 flex flex-row justify-center text-gray-500 h-full">
                    <div className="cursor-pointer flex items-center px-4 hover:bg-gray-100 hover:text-green-800 border-b-2 border-transparent hover:border-green-800 transition-all whitespace-nowrap">
                        <a href="#beranda">Beranda</a>
                    </div>

                    <div className="cursor-pointer flex items-center px-4 hover:bg-gray-100 hover:text-green-800 border-b-2 border-transparent hover:border-green-800 transition-all whitespace-nowrap">
                        <a href="#unit">Unit Usaha</a>
                    </div>

                    <div className="cursor-pointer flex items-center px-4 hover:bg-gray-100 hover:text--800 border-b-2 border-transparent hover:border-green-800 transition-all whitespace-nowrap">
                        <a href="#desa">Desa</a>
                    </div>
                </div>

                <div className="flex items-center text-gray-500 h-full">
                    <div className="flex items-center hover:text-green-800 border-b-2 border-transparent hover:border-green-800 transition-all">
                        <div ref={dropdownRef} className="relative">
                            {/* Tombol Pemicu Dropdown */}
                            <button
                                type="button"
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="flex items-center px-4 py-2 whitespace-nowrap focus:outline-none"
                            >
                                Tentang
                                <svg className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Menu Dropdown */}
                            {isOpen && (
                                <div className="absolute right-0 top-full mt-3 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-50 py-1">
                                    <button
                                        type="button"
                                        onClick={() => { setIsOpen(false); navigate('/tentang-kami'); }}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                                    >
                                        Tentang Kami
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => { setIsOpen(false); navigate('/visi-misi'); }}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                                    >
                                        Visi & Misi
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => { setIsOpen(false); navigate('/potensi-desa'); }}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                                    >
                                        Potensi Desa
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="cursor-pointer flex items-center px-4 hover:bg-gray-100 hover:text-green-800 border-b-2 border-transparent hover:border-green-800 transition-all whitespace-nowrap">
                        <button className="hover:text-green-800" onClick={handleContactClick}>Kontak Kami</button>
                    </div>
                </div>
            </div>

            {/* Beranda */}
            <section id="beranda" className="relative overflow-hidden text-white scroll-mt-20">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/hero_bg.png)' }}></div>
                <div className="absolute inset-0 bg-green-900/75"></div>
                <div className="relative max-w-6xl mx-auto py-24 px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Membangun Kemandirian Ekonomi Desa</h1>
                        <p className="mt-4 max-w-2xl text-sm md:text-base text-green-100/90">Dedikasi kami untuk memajukan kesejahteraan masyarakat Panisihan melalui tata kelola usaha yang profesional, transparan, dan berkelanjutan.</p>
                    </div>
                </div>
            </section>

            {/* Unit Usaha */}
            <section id="unit" className="py-8 bg-gray-100 scroll-mt-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-6 gap-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Unit Usaha</h2>
                        {unitUsaha.length > 4 && (
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => scrollCarousel(-1)}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-green-700 bg-white text-green-800 shadow-lg transition hover:bg-green-50"
                                    aria-label="Scroll unit usaha sebelumnya"
                                >
                                    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => scrollCarousel(1)}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-green-700 bg-green-800 text-white shadow-lg transition hover:bg-green-700"
                                    aria-label="Scroll unit usaha berikutnya"
                                >
                                    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <div
                            ref={carouselRef}
                            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth px-1"
                            style={{ scrollbarWidth: "none" }}
                        >
                            {unitUsaha.map((item) => (
                                <div
                                    key={item.id}
                                    className={`${unitUsaha.length > 4 ? "w-72 min-w-[18rem] flex-shrink-0" : "w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"} bg-white rounded-lg shadow p-4`}
                                >
                                    <div className="h-40 bg-cover bg-center rounded-md mb-4" style={{ backgroundImage: `url(${item.image})` }}></div>
                                    <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                                    <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                                    <div className="mt-4 flex justify-end text-sm text-green-700 font-medium">
                                        <button 
                                            className="text-md text-green-800 cursor-pointer"
                                            onClick={() => navigate(item.link)}
                                        >
                                            Detail →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Desa */}
            <section id="desa" className="py-12 bg-white scroll-mt-20">
                <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-800">Desa Panisihan</h2>
                        <p className="mt-4 text-gray-600 text-justify">
                            Desa Panisihan merupakan desa di mana mayoritas masyarakatnya bermata pencaharian di sektor pertanian, perdagangan, dan UMKM. Dengan didukung semangat gotong royong serta potensi sumber daya yang dimiliki, Desa Panisihan terus berupaya meningkatkan kesejahteraan masyarakat melalui pembangunan yang berkelanjutan.
                        </p>

                        <div className="mt-6">
                            <h4 className="font-semibold text-gray-700">Lokasi</h4>
                            <p className="text-gray-600">Desa Panisihan, Kecamatan Maos, Kabupaten Cilacap, Provinsi Jawa Tengah</p>
                            <p className="text-sm text-gray-500 mt-2">Koordinat: -7.587878607793967, 109.15780733921832</p>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="w-full h-64 bg-gray-100 rounded-md flex items-center justify-center">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d11186.081862906727!2d109.15053135192564!3d-7.588346029078601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzUnMTYuNCJTIDEwOcKwMDknMjguMSJF!5e0!3m2!1sen!2sid!4v1784130008990!5m2!1sen!2sid" 
                            width="530" 
                            height="250" 
                            style={ { border: "0" } }
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="strict-origin-when-cross-origin">
                           </iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-green-900 text-green-50">
                <div className="border-t border-green-800/50 py-4 text-center text-sm text-green-100/80">© {new Date().getFullYear()} BUMDes Panisihan.</div>
            </footer>
        </div>
    )
}