import postReducer from '../post'
import { GET_POST_SUCCESS, ADD_POST_SUCCESS } from '../../constants/ActionTypes'

describe('[Unit] post Reducer', () => {
  it('returns correct initial state', () => {
    expect(postReducer(undefined, {})).toEqual([])
  })

  it('returns current state if no action matched', () => {
    const curState = [
      { id: 1, message: 'testing' },
    ]
    const nextState = postReducer(curState, {})
    expect(nextState).toEqual(curState) // compare values
  })

  it('add post when receiving ADD_POST_SUCCESS action', () => {
    const curState = [
      { id: 1, message: 'testing1' },
    ]
    const action = {
      type: ADD_POST_SUCCESS,
      payload: { id: 2, message: 'testing2' },
    }
    const nextState = postReducer(curState, action)
    const expectedState = [
      { id: 2, message: 'testing2' },
      { id: 1, message: 'testing1' },
    ]
    expect(nextState).toEqual(expectedState)
  })

  it('get posts when receiving GET_POST_SUCCESS action', () => {
    const curState = []
    const action = {
      type: GET_POST_SUCCESS,
      payload: [
        { id: 2, message: 'testing2' },
        { id: 1, message: 'testing1' },
      ],
    }
    const nextState = postReducer(curState, action)
    const expectedState = [
      { id: 2, message: 'testing2' },
      { id: 1, message: 'testing1' },
    ]
    expect(nextState).toEqual(expectedState)
  })
})
