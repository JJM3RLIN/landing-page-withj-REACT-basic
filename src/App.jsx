import React from 'react';
import { useState } from 'react';
import Header from './components/Header.jsx';
import SectionDesigned from './components/SectionDesigned.jsx'
import Grafico from './components/Grafico.jsx'
import SectionPc from './components/SectionPc.jsx'

const App = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div>
        <Header  />
        <SectionDesigned />
        <Grafico />
        <SectionPc />
    </div>
  )
}

export default App