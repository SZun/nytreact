import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import BButton from '../Button/Button';
import BInput from '../Input/Input';

const SavedArticle = props => {
  const anchor = {
    textDecoration: 'none',
    color: '#000000'
  };

  return (
    <Container>
      <Row>
        <Col sm="4">
          <a href={props.link} target="_blank" style={anchor}>
            <h2 className="text-left">{props.title}</h2>
          </a>
        </Col>
        <Col sm="4">{props.date}</Col>
        <Col sm="4">
          <BButton color="danger" clicked={props.remove}>
            Remove
          </BButton>
        </Col>
      </Row>
      <Row className="my-4">
        <Col sm="8">
          <BInput placeholder="I think..." type="text" change={props.change} />
        </Col>
        <Col sm="4">
          <BButton color="primary" clicked={props.comment}>
            Comment
          </BButton>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <h6 className="text-left">
            <strong>Comments:</strong>
          </h6>
        </Col>
        <Col sm="12">
          <p className="text-left">{props.comments}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default SavedArticle;
