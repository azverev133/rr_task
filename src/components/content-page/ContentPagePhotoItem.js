import React from "react"

import './ContentPagePhotoItem.scss'
import { Card } from "react-bootstrap"

export const ContentPagePhotoItem = props => {

  const { item } = props

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.thumbnailUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}