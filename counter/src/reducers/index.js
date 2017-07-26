import { combineReducers } from 'redux'
import counter_reducer from './CounterReducer'

export default combineReducers({
  penghitungCounter: counter_reducer
})
