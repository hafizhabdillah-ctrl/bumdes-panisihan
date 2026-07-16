import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import TentangKami from './pages/TentangKami';
import VisiMisi from './pages/VisiMisi';
import PotensiDesa from './pages/PotensiDesa';
import Contact from './pages/Contact';

import SportCenter from './pages/Unit/SportCenter';

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
      </Routes>
    </div>
  );
}