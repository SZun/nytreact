import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import BButton from '../Button/Button';

const SavedArticle = props => {
  return (
    <Container>
      <Row>
        <Col sm="4">{props.title}</Col>
        <Col sm="4">{props.date}</Col>
        <Col sm="4">
          <BButton color="danger" clicked={props.clicked}>
            Remove
          </BButton>
        </Col>
      </Row>
    </Container>
  );
};

export default SavedArticle;
