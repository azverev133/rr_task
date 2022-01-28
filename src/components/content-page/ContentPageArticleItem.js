import React from "react"

import './ContentPageArticleItem.scss'
import { Card } from "react-bootstrap"

export const ContentPageArticleItem = props => {

  const { item } = props

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.body}</Card.Text>
      </Card.Body>
    </Card>
  )
}