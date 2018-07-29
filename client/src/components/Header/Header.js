import React from 'react';

import { Jumbotron } from 'reactstrap';
import './Header.css';

const BHeader = () => {
  const styles = {
    textDecoration: 'underline'
  };

  return (
    <div className="Header">
      <Jumbotron>
        <h1 className="text-center display-3" style={styles}>
          <strong>NYT + React</strong>
        </h1>
        <p className="text-center">
          Search for and add notes to NYT articles that inspire you!
        </p>
      </Jumbotron>
    </div>
  );
};

export default BHeader;
