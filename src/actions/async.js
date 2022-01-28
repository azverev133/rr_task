import axios from "axios"
import { updateArticles, updatePhotos, updateUsers } from "./actions"

export const fetchArticles = () => dispatch => axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => dispatch(updateArticles(response.data)))
  .catch(error => console.error(error))

export const fetchUsers = () => dispatch => axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => dispatch(updateUsers(response.data)))
  .catch(error => console.error(error))

export const fetchPhotos = () => dispatch => axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(response => dispatch(updatePhotos(response.data)))
  .catch(error => console.error(error))