import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BButton from '../Button/Button';

const Result = props => {
  const anchor = {
    textDecoration: 'none',
    color: '#000000'
  };

  return (
    <Container className="my-5 Result">
      <Row>
        <Col sm="6">
          <a href={props.link} target="_blank" style={anchor}>
            <h2 className="text-left">{props.children}</h2>
          </a>
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
