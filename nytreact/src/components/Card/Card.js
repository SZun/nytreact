import React from 'react';

import { Card, CardHeader, CardBody } from 'reactstrap';

const BCard = props => (
  <div>
    <Card>
      <CardHeader>{props.header}</CardHeader>
      <CardBody>{props.children}</CardBody>
    </Card>
  </div>
);

export default BCard;
