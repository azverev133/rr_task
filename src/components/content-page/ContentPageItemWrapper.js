import React from "react"

import { Col, Row } from "react-bootstrap"

import { ContentPageArticleItem } from "./ContentPageArticleItem"
import { ContentPageUserItem } from "./ContentPageUserItem"
import { ContentPagePhotoItem } from "./ContentPagePhotoItem"

import "./ContentPageItemWrapper.scss"

export const ContentPageItemWrapper = props => (
  <Row className="content-page-item-wrapper">
    {
      props.items.map(item =>
        <Col className="col">
          {
            {
              '0': <ContentPageArticleItem item={item}/>,
              '1': <ContentPageUserItem item={item}/>,
              '2': <ContentPagePhotoItem item={item}/>
            }[props.type]
          }
        </Col>
      )
    }
  </Row>
)