import React from 'react';

import { Card, CardHeader, CardBody } from 'reactstrap';

const BCard = props => (
  <div>
    <Card>
      <CardHeader>
        <h1>
          <strong>{props.header}</strong>
        </h1>
      </CardHeader>
      <CardBody>{props.children}</CardBody>
    </Card>
  </div>
);

export default BCard;
