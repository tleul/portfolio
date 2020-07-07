import {GET_COVID_DATA} from './types'
import axios from 'axios';



export const getCovidData = () => async (dispatch) => {
  try {
    const config ={
      headers:{
        "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
        "x-rapidapi-key": "2926cb8831msh5b23fd7bdae7f5ap13fdcejsn2c5175c5b760",
        "useQueryString": true,
        "Content-Type": "application/json"
      }
    }
    const res = await axios.get("https://covid-19-tracking.p.rapidapi.com/v1", config)
    
    dispatch({type: GET_COVID_DATA, payload: res.data})
  } catch (error) {
    console.log(error)
  }
 
}

export const processData = (data) => dispatch => {
  // Active Cases_text: "25,335"
  // Country_text: "Ukraine"
  // Last Update: "2020-07-05 03:24"
  // New Cases_text: ""
  // New Deaths_text: ""
  // Total Cases_text: "47,677"
  // Total Deaths_text: "1,227"
  // Total Recovered_text: "21,115"
  
   
    // or we can use Math.max
  
    
    let  max = -Infinity;
    let container =[]
    let temp
    const storageCases = data
  
    for(let i = 0; i = 5; i++){
     
    for (let j = 1; j <  10 ; j++) {
           
        //   const activecase = parseInt(storageCases[j]['Active Cases_text'].replace(/,/g, ''))  
         
        // if (activecase > max) {
        //     max = activecase;
        //     temp = storageCases[j]
        //     storageCases.splice(j,1)
        //    console.log(temp)
        // }
        container.push('a')
    }

    
   
  }
 
 console.log(container)
}
