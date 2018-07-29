import React from 'react';

import { Link } from 'react-router-dom';
import { NavItem as NavItems, Button } from 'reactstrap';

const NavItem = props => {
  return (
    <div className="mx-5 my-2">
      <NavItems>
        <Link to={props.link}>
          <Button className="px-5 text-center" color="warning">
            {props.children}
          </Button>
        </Link>
      </NavItems>
    </div>
  );
};

export default NavItem;
