import {GET_COVID_DATA} from './types'
import axios from 'axios';



export const getCovidData = () => async (dispatch) => {
  try {
    const config ={
      headers:{
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "2926cb8831msh5b23fd7bdae7f5ap13fdcejsn2c5175c5b760",
        "useQueryString": true,
        "Content-Type": "application/json"
      }
    }
    const res = await axios.get("https://covid-193.p.rapidapi.com/statistics", config)
    
    console.log(res.data)
    dispatch({type: GET_COVID_DATA, payload: res.data.response})
  } catch (error) {
    console.log(error)
  }
 
}

export const processData = () => dispatch => {

console.log('processData')

}
