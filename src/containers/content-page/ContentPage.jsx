import React from "react"
import { useSelector } from "react-redux"

import './ContentPage.scss'
import { Container } from "react-bootstrap"

import { ContentPageLoader } from "../../components/content-page/ContentPageLoader"
import { ContentPageItemWrapper } from "../../components/content-page/ContentPageItemWrapper"

import { array } from "../../utils/array"
import { composeClass } from "../../utils/reactHelper"

export const ContentPage = props => {
  const loading = useSelector(({ main }) => main.loading)
  const className = composeClass("content-page", loading && "content-page-loading")

  const transformedItems =
    !props.data
      ? 'Nothing'
      : [...array.chunks(props.data, 4)].map(items => <ContentPageItemWrapper type={props.type} items={items} />)

  return (
    <Container className={className}>
      { loading ? <ContentPageLoader /> : transformedItems }
    </Container>
  )
}
