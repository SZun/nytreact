import React from 'react';

import { Nav } from 'reactstrap';
import NavItem from '../../components/NavItem/NavItem';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <Nav>
        <NavItem link="/home">Home</NavItem>
        <NavItem link="/saved">Saved</NavItem>
        <NavItem link="/results">Results</NavItem>
      </Nav>
    </div>
  );
};

export default NavBar;
