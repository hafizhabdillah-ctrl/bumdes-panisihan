import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import TentangKami from './pages/TentangKami';
import VisiMisi from './pages/VisiMisi';
import PotensiDesa from './pages/PotensiDesa';
import Contact from './pages/Contact';

import SportCenter from './pages/Unit/SportCenter';
import PeternakanKambing from './pages/Unit/PeternakanKambing';
import KolamRenang from './pages/Unit/KolamRenang';
import Playground from './pages/Unit/Playground';
import Umkm from './pages/Unit/Umkm';

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
        <Route path='/unit/peternakan-kambing' element={<PeternakanKambing />} />
        <Route path='/unit/kolam-renang' element={<KolamRenang />} />
        <Route path='/unit/playground' element={<Playground />} />
        <Route path='/unit/umkm' element={<Umkm />} />
      </Routes>
    </div>
  );
}