import React from 'react';

import { Input } from 'reactstrap';

const BInput = props => (
  <Input
    type={props.type}
    placeholder={props.placeholder}
    onChange={props.change}
  />
);

export default BInput;
