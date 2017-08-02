import axios from 'axios'

import {
  GET_POST_SUCCESS,
  ADD_POST_SUCCESS,
} from '../constants/ActionTypes'
import { SERVICE_POST } from '../constants/EndPoints'

const getPostsSuccess = posts => ({
  type: GET_POST_SUCCESS,
  payload: posts,
})

const addPostSuccess = post => ({
  type: ADD_POST_SUCCESS,
  payload: post,
})

const getPosts = () => dispatch => (
  axios.get(`${SERVICE_POST}?_sort=id&_order=DESC`, {})
  .then(res => dispatch(getPostsSuccess(res.data)))
)

const addPost = message => dispatch => (
  axios.post(`${SERVICE_POST}`, { message })
  .then(res => dispatch(addPostSuccess(res.data)))
)

export {
  getPosts,
  getPostsSuccess,
  addPost,
  addPostSuccess,
}
