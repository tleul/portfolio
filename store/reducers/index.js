import { combineReducers } from 'redux'
import covidReducer from './covidReducer' 
import caseByDay from './caseByDay' 

import mapAfrica from './mapAfrica'

import mapWorld from './mapWorld'

export default combineReducers({
  covid: covidReducer,
  deathByDay: caseByDay,
  africa: mapAfrica,
  world: mapWorld
})
