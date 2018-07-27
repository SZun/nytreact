import React, { Component } from 'react';

import BHeader from '../../components/Header/Header';
import Home from '../Home/Home';

class Layout extends Component {
  state = {};
  render() {
    return (
      <div>
        <BHeader />
        <Home />
      </div>
    );
  }
}

export default Layout;
