import React from 'react';

import { Input } from 'reactstrap';

import './Input.css';

const BInput = props => (
  <Input
    type={props.type}
    placeholder={props.placeholder}
    onChange={props.change}
    className="Input"
  />
);

export default BInput;
