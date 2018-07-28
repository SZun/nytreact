import React from 'react';
import { Label } from 'reactstrap';

const BLabel = props => (
  <div>
    <Label className="text-center">
      <h5>
        <strong>{props.children}</strong>
      </h5>
    </Label>
  </div>
);

export default BLabel;
