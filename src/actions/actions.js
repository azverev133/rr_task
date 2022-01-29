import { UPDATE_ARTICLES, UPDATE_PHOTOS, UPDATE_USERS, CONTENT_LOADING, CONTENT_LOADED } from "./types"
import { createAction } from "@reduxjs/toolkit"

export const updateArticles = createAction(UPDATE_ARTICLES)
export const updateUsers = createAction(UPDATE_USERS)
export const updatePhotos = createAction(UPDATE_PHOTOS)

export const contentLoading = createAction(CONTENT_LOADING)
export const contentLoaded = createAction(CONTENT_LOADED)