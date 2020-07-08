import { combineReducers } from 'redux'
import covidReducer from './covidReducer' 
import caseByDay from './caseByDay' 
export default combineReducers({
  covid: covidReducer,
  deathByDay: caseByDay
})
