import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BButton from '../Button/Button';

const Result = props => {
  return (
    <Container>
      <Row>
        <Col sm="6">
          <h3>{props.children}</h3>
        </Col>
        <Col sm="3" />
        <Col sm="3">
          <BButton onClick={props.clicked} color="success">
            Save Article
          </BButton>
        </Col>
      </Row>
    </Container>
  );
};

export default Result;
