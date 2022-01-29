import axios from "axios"
import { updateArticles, updatePhotos, updateUsers, contentLoading, contentLoaded } from "./actions"

export const fetchArticles = () => dispatch => {
  dispatch(contentLoading())
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      dispatch(contentLoaded())
      return dispatch(updateArticles(response.data))
    })
    .catch(error => console.error(error))
}

export const fetchUsers = () => dispatch => {
  dispatch(contentLoading())
  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      dispatch(contentLoaded())
      return dispatch(updateUsers(response.data))
    })
    .catch(error => console.error(error))
}

export const fetchPhotos = () => dispatch => {
  dispatch(contentLoading())
  return axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(response => {
      dispatch(contentLoaded())
      return dispatch(updatePhotos(response.data))
    })
    .catch(error => console.error(error))
}