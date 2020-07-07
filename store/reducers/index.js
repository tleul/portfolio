import { combineReducers } from 'redux'
import covidReducer from './covidReducer' 
export default combineReducers({
  covid: covidReducer
})
