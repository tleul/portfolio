import { combineReducers } from 'redux'
import covidReducer from './covidReducer' 
import caseByDay from './caseByDay' 
import mapchart from './mapchart'

export default combineReducers({
  covid: covidReducer,
  deathByDay: caseByDay,
  africa: mapchart
})
