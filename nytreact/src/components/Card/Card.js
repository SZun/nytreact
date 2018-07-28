import React from 'react';

import { Card, CardHeader, CardBody } from 'reactstrap';

const BCard = props => (
  <div>
    <Card>
      <CardHeader>
        <h1>{props.header}</h1>
      </CardHeader>
      <CardBody>{props.children}</CardBody>
    </Card>
  </div>
);

export default BCard;
