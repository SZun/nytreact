import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import BButton from '../Button/Button';
import BInput from '../Input/Input';

const SavedArticle = props => {
  return (
    <Container>
      <Row>
        <Col sm="4">{props.title}</Col>
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
        <h6>
          <strong>
            Comments: <p>{props.comments}</p>
          </strong>
        </h6>
      </Row>
    </Container>
  );
};

export default SavedArticle;
