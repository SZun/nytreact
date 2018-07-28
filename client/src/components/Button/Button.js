import React from 'react';

import { Button } from 'reactstrap';

const Butonne = props => (
  <Button color={props.color} onClick={props.clicked}>
    {props.children}
  </Button>
);

export default Butonne;
