import React from "react";

import './ContentPage.scss';
import { Container, Row, Col } from "react-bootstrap"

import { ContentPageUserItem } from "../../components/content-page/ContentPageUserItem"
import { ContentPageArticleItem } from "../../components/content-page/ContentPageArticleItem"
import { ContentPagePhotoItem } from "../../components/content-page/ContentPagePhotoItem"

import { array } from "../../utils/array"

export const ContentPage = props => {

  return (
    <Container>
      {
        props.data && [...array.chunks(props.data, 4)].map(items => <Row style={{ marginTop: 8 }}>
          {
            items.map(item =>
              <Col>
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
        </Row>)
      }


    </Container>
  )
}
