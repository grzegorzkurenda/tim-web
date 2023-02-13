import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux'

function counterReducer(state = { value: 0}, action){
  switch (action.type) {
    case 'counte/incremented':
      return {value: state.value + 1}
    case 'counter/decremented':
      return {value: state.value - 1}
    default:
       return state
  }
}
export let store = createStore(counterReducer)
// export const store = configureStore({
//   reducer: {},
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// })
