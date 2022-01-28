import React from "react"

import './ContentPageUserItem.scss'
import { Card } from "react-bootstrap"

export const ContentPageUserItem = props => {

  const { item } = props

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.username && <p>Username: {item.username}</p>}
          {item.email && <p>Email: {item.email}</p>}
          {item.phone && <p>Phone: {item.phone}</p>}
          {item.website && <p>Website: {item.website}</p>}
          {item.address && <p>Address: {Object.values(item.address).filter(a => typeof a === 'string').join(', ')}</p>}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
