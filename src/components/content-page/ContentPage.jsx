import React from "react";

import './ContentPage.scss';
import {Col, Container, Row} from "react-bootstrap";
import {ContentPageItem} from "./ContentPageItem";

export const ContentPage = props => {

  return (
    <Container>
      <Row>
        <Col>
          <ContentPageItem />
        </Col>
        <Col>
          <ContentPageItem />
        </Col>
        <Col>
          <ContentPageItem />
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  )
}
