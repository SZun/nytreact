import React from 'react';

import BHeader from '../../components/Header/Header';

const Layout = props => {
  return (
    <div>
      <header>
        <BHeader />
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
