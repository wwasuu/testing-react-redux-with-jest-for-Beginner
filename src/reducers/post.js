import {
  GET_POST_SUCCESS,
  ADD_POST_SUCCESS,
} from '../constants/ActionTypes'

const initialState = []

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_SUCCESS: {
      return action.payload
    }
    case ADD_POST_SUCCESS: {
      return [action.payload, ...state]
    }
    default: {
      return state
    }
  }
}

export default postReducer
