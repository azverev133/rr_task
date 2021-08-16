import React from 'react'
import { Route, Switch } from 'react-router'
import { Header } from "./components/header/Header"

import './App.scss';

import {useDispatch, useSelector} from "react-redux";
import {fetchArticles, fetchPhotos, fetchUsers} from "./actions/async";
import {ContentPage} from "./components/content-page/ContentPage";

export const App = () =>  {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

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
      <div className="App">
        <Header onNavigate={onNavigate}/>
        <div>
          <Switch>
            <Route exact path="/">
              <ContentPage title="Home" />
            </Route>
            <Route path="/articles">
              <ContentPage title="Articles" data={state} />
            </Route>
            <Route path="/users">
              <ContentPage title="Users" />
            </Route>
            <Route path="/photos">
              <ContentPage title="Photos" />
            </Route>
            <Route>
              <div>nothing</div>
            </Route>
          </Switch>
        </div>
      </div>
  )
}
