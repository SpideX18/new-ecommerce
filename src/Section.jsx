import React from 'react';
import Mens from './Mens';
import Female from './Female';
import Comp from './Comp';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Details from './Details';
import Order from './Order';

function Section() {
  return (
    <div>
     
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mens" element={<Mens/>}/>
      <Route path="/computer" element={<Comp/>}/>
      <Route path="/female" element={<Female/>}/>
      <Route path="/details/:pict" element={<Details/>}/>
      <Route path="/order/:ord" element={<Order/>}/>
     </Routes>
     

    </div>
  );
}

export default Section;
