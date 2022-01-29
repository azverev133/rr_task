import React from "react"
import { Spinner } from "react-bootstrap"

export const ContentPageLoader = () => (
  <Spinner animation="border" variant="secondary" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
)