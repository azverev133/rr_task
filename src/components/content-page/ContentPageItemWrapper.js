import React from "react"

import { Col, Row } from "react-bootstrap"

import { ContentPageItemType } from "./ContentPageItemType"

import { ContentPageArticleItem } from "./ContentPageArticleItem"
import { ContentPageUserItem } from "./ContentPageUserItem"
import { ContentPagePhotoItem } from "./ContentPagePhotoItem"

import "./ContentPageItemWrapper.scss"

export const ContentPageItemWrapper = props => {

  const { type } = props

  const getItemComponent = item => ({
    [ContentPageItemType.ARTICLE]: <ContentPageArticleItem item={item}/>,
    [ContentPageItemType.USER]: <ContentPageUserItem item={item}/>,
    [ContentPageItemType.PHOTO]: <ContentPagePhotoItem item={item}/>
  }[type])

  return (
    <Row className="content-page-item-wrapper">
      { props.items.map(item => <Col className="col">{ getItemComponent(item) }</Col>) }
    </Row>
  )
}