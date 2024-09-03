import Newsitemcontrol from './Components/Newsitemcontrol';
import React from 'react';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const pageSize=20;
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Newsitemcontrol key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/business" element={<Newsitemcontrol  key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route path="/entertainment" element={<Newsitemcontrol key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route path="/general" element={<Newsitemcontrol key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/health" element={<Newsitemcontrol key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route path="/science" element={<Newsitemcontrol key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route path="/sports" element={<Newsitemcontrol  key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route path="/technology" element={<Newsitemcontrol key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
      </div>
    </>
  );
}
