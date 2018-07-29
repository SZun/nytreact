import React from 'react';

import { Card, CardHeader, CardBody } from 'reactstrap';

import './Card.css';

const BCard = props => (
  <div className="Card">
    <Card>
      <CardHeader>
        <h1>{props.header}</h1>
      </CardHeader>
      <CardBody>{props.children}</CardBody>
    </Card>
  </div>
);

export default BCard;
