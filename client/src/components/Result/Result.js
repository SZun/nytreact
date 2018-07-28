import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BButton from '../Button/Button';

const Result = props => {
  return (
    <Container>
      <Row>
        <Col sm="6">
          <p className="text-left">{props.children}</p>
        </Col>
        <Col sm="3" />
        <Col sm="3">
          <BButton clicked={props.clicked} color="success">
            Save Article
          </BButton>
        </Col>
      </Row>
    </Container>
  );
};

export default Result;
