import { createStore as createReduxStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers'

const createStore = (preloadState) => {
  const store = createReduxStore(
    rootReducer,
    preloadState,
    compose(
      applyMiddleware(thunk),
    )
  )

  return store
}

export {
  createStore,
}
