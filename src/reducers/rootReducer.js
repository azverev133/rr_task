import { combineReducers } from 'redux'
import {UPDATE_ARTICLES, UPDATE_PHOTOS, UPDATE_USERS} from "../actions/types"

const initialState = {
  articles: [],
  users: [],
  photos: []
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ARTICLES: return { ...state, articles: action.payload }
    case UPDATE_USERS: return { ...state, users: action.payload }
    case UPDATE_PHOTOS: return { ...state, photos: action.payload }
    default: return state
  }
}

const rootReducer = combineReducers({
  main: mainReducer,
})

export default rootReducer