import React from 'react';

import BHeader from '../../components/Header/Header';
import NavBar from '../NavBar/NavBar';

const Layout = props => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <header>
        <BHeader />
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
