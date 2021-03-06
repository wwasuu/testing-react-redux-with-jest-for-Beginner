import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import sinon from 'sinon'


import { GET_POST_SUCCESS, ADD_POST_SUCCESS } from '../../constants/ActionTypes'
import { getPosts, addPost, getPostsSuccess, addPostSuccess } from '../post'
import { SERVICE_POST } from '../../constants/EndPoints'

describe('[Unit] post Action', () => {
  const mockStore = configureMockStore([thunk])
  const store = mockStore({ posts: [] })
  let mockAxios

  beforeEach(() => {
    mockAxios = sinon.mock(axios)
  })
  afterEach(() => {
    mockAxios.restore()
  })

  it('Should creates GET_POST_SUCCESS action when calling getPostsSuccess()', () => {
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

  it('Should creates ADD_POST_SUCCESS action when calling addPostSuccess()', () => {
    const post = { id: 2, message: 'testing2' }

    const actual = addPostSuccess(post)
    const expected = {
      type: ADD_POST_SUCCESS,
      payload: post,
    }
    expect(actual).toEqual(expected)
  })

  it('Should dispatch GET_POST_SUCCESS actions when calling getPosts()', () => {
    const posts = [{
      id: 1,
      message: 'Beware the dark side. #WednesdayWisdom',
    },
    {
      id: 2,
      message: 'Thank you to everyone that donated to the #ForceForChange 40th anniversary campaign! Learn more about your impact: http://strw.rs/60078c7DX',
    }]
    const expected = [
      {
        type: GET_POST_SUCCESS,
        payload: posts,
      },
    ]
    const apiData = { status: 200, data: posts }
    const resApi = Promise.resolve(apiData)
    mockAxios.expects('get').once().withArgs(`${SERVICE_POST}?_sort=id&_order=DESC`, {}).returns(resApi)
    store.dispatch(getPosts()).then(() => {
      expect(store.getActions()).toEqual(expected)
    })
  })

  it('Should dispatch ADD_POST_SUCCESS actions when calling addPost()', () => {
    const data = {
      id: 1,
      message: 'Beware the dark side. #WednesdayWisdom',
    }
    const expected = [
      {
        type: ADD_POST_SUCCESS,
        payload: data,
      },
    ]
    const apiData = { status: 201, data }
    const resApi = Promise.resolve(apiData)
    mockAxios.expects('post').once().withArgs(`${SERVICE_POST}`, { message: data.message }).returns(resApi)
    store.dispatch(addPost(data.message)).then(() => {
      expect(store.getActions()).toEqual(expected)
    })
  })
})
