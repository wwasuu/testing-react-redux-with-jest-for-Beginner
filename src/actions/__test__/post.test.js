import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import 'isomorphic-fetch'

import { GET_POST_SUCCESS, ADD_POST_SUCCESS } from '../../constants/ActionTypes'
import { getPosts, addPost, getPostsSuccess, addPostSuccess } from '../post'

describe('[Unit] post Action', () => {

  it('creates GET_POST_SUCCESS action when calling getPostsSuccess()', () => {
    const posts = [
      { id: 2, message: 'testing2' },
      { id: 1, message: 'testing1' },
    ]

    const actual = getPostsSuccess(posts)
    const expected = {
      type: GET_POST_SUCCESS,
      payload: posts,
    }
    expect(actual).toEqual(expected)
  })

  it('creates ADD_POST_SUCCESS action when calling addPostSuccess()', () => {
    const post = { id: 2, message: 'testing2' }

    const actual = addPostSuccess(post)
    const expected = {
      type: ADD_POST_SUCCESS,
      payload: post,
    }
    expect(actual).toEqual(expected)
  })

})
