import React from 'react'
import { Route, Switch } from 'react-router'

import { Header } from "./components/header/Header"
import { MainContainer } from "./containers/main-container/MainContainer"
import { ContentPage } from "./containers/content-page/ContentPage"

import './App.scss';

import { useDispatch, useSelector } from "react-redux"
import { fetchArticles, fetchPhotos, fetchUsers } from "./actions/async"

import { ContentPageItemType } from "./components/content-page/ContentPageItemType"

export const App = () =>  {
  const dispatch = useDispatch()

  const articles = useSelector(({ main }) => main.articles)
  const users = useSelector(({ main }) => main.users)
  const photos = useSelector(({ main }) => main.photos)

  const onNavigate = path => {
    switch (path) {
      case "/": console.log(path)
        break
      case "/articles": dispatch(fetchArticles())
        break
      case "/users": dispatch(fetchUsers())
        break
      case "/photos": dispatch(fetchPhotos())
        break
      default:
        break
    }
  }

  return (
      <div className="app">
        <Header onNavigate={onNavigate}/>
        <MainContainer>
          <Switch>
            <Route exact path="/">
              <ContentPage title="Home" />
            </Route>
            <Route path="/articles">
              <ContentPage title="Articles" data={articles} type={ContentPageItemType.ARTICLE} />
            </Route>
            <Route path="/users">
              <ContentPage title="Users" data={users} type={ContentPageItemType.USER} />
            </Route>
            <Route path="/photos">
              <ContentPage title="Photos" data={photos} type={ContentPageItemType.PHOTO} />
            </Route>
            <Route>
              <div>nothing</div>
            </Route>
          </Switch>
        </MainContainer>
      </div>
  )
}
