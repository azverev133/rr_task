import { combineReducers } from 'redux'
import { createReducer } from "@reduxjs/toolkit"
import { updateArticles, updatePhotos, updateUsers, contentLoading, contentLoaded } from "../actions/actions"

const initialState = {
  articles: [],
  users: [],
  photos: [],
  loading: false
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
    .addCase(contentLoading, (state, _) => {
      state.loading = true
    })
    .addCase(contentLoaded, (state, _) => {
      state.loading = false
    })
})

const rootReducer = combineReducers({
  main: mainReducer
})

export default rootReducer