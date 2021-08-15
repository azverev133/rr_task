import { combineReducers } from 'redux'
import {createReducer} from "@reduxjs/toolkit";
import {updateArticles, updatePhotos, updateUsers} from "../actions/actions";

const initialState = {
  articles: [],
  users: [],
  photos: []
}

const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateArticles, (state, action) => {
      state.articles = [...action.payload]
    })
    .addCase(updateUsers, (state, action) => {
      state.users = [...action.payload]
    })
    .addCase(updatePhotos, (state, action) => {
      state.photos = [...action.payload]
    })
})

const rootReducer = combineReducers({
  main: mainReducer
})

export default rootReducer