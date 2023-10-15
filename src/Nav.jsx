import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <div className='navb'>
        <Link to="/">HOME</Link>
        <Link to="/mens">MENS FASSION</Link>
        <Link to="/computer">COMPUTER APPLIANCES</Link>
        <Link to="/female">FEMALE FASSION</Link>
        
      </div>
</div>
  );
}

export default Nav;
