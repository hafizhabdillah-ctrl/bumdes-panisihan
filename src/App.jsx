import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import TentangKami from './pages/TentangKami';
import VisiMisi from './pages/VisiMisi';
import PotensiDesa from './pages/PotensiDesa';
import Contact from './pages/Contact';

import SportCenter from './pages/Unit/SportCenter';
import Pertanian from './pages/Unit/Pertanian';
import Umkm from './pages/Unit/Umkm';
import Peternakan from './pages/Unit/Peternakan';
import PengolahanSampah from './pages/Unit/PengolahanSampah';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/tentang-kami' element={<TentangKami />} />
        <Route path='/visi-misi' element={<VisiMisi />} />
        <Route path='/potensi-desa' element={<PotensiDesa />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/unit/sport-center' element={<SportCenter />} />
        <Route path='/unit/pertanian' element={<Pertanian />} />
        <Route path='/unit/umkm' element={<Umkm />} />
        <Route path='/unit/peternakan' element={<Peternakan />} />
        <Route path='/unit/pengolahan-sampah' element={<PengolahanSampah />} />
      </Routes>
    </div>
  );
}