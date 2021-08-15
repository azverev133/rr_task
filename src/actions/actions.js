import {UPDATE_ARTICLES, UPDATE_PHOTOS, UPDATE_USERS} from "./types";

export const updateArticles = payload => ({ type: UPDATE_ARTICLES, payload })
export const updateUsers = payload => ({ type: UPDATE_USERS, payload })
export const updatePhotos = payload => ({ type: UPDATE_PHOTOS, payload })