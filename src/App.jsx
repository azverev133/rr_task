import React from 'react';
import { Route, Switch } from 'react-router';
import {Header} from "./main/header/Header";

import './App.scss';

import {useDispatch, useSelector} from "react-redux";
import {fetchArticles, fetchPhotos, fetchUsers} from "./actions/async";

export const App = () =>  {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log({state})

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
              <div>home</div>
            </Route>
            <Route path="/articles">
              <div>articles</div>
            </Route>
            <Route path="/users">
              <div>users</div>
            </Route>
            <Route path="/photos">
              <div>photos</div>
            </Route>
            <Route>
              <div>nothing</div>
            </Route>
          </Switch>
        </div>
      </div>
  )
}
