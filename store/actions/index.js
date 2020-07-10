import {GET_COVID_DATA, GET_COVID_DEATH_BYDAY} from './types'
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
         
 

  const totalCases =   res.data.response.sort(function(a, b) {
   return b.cases.total - a.cases.total;
});

 
    dispatch({type: GET_COVID_DATA, payload: totalCases})
    
  } catch (error) {
    console.log(error)
  }
 
}

export const processData = (country) => async dispatch => {

    
    const config ={
      headers:{
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "2926cb8831msh5b23fd7bdae7f5ap13fdcejsn2c5175c5b760",
        "useQueryString": true,
        "Content-Type": "application/json"
      }
    }
    const res = await axios.get(`https://covid-193.p.rapidapi.com/history?country=${country}`, config)
    
    const dataEach = res.data.response 
    let caseByDay = []

    dataEach.map((item)=>{

      const temp = {}
      temp.day = item.day
      temp.value = item.deaths.total
      caseByDay.push(temp)

    })
    let userhushMap = {}
    caseByDay = caseByDay.filter((item)=>{

  
      let alreadyExist = userhushMap.hasOwnProperty(item.day)

      return alreadyExist ? false : userhushMap[item.day] = 1

    })
   dispatch({type: GET_COVID_DEATH_BYDAY, payload: caseByDay})
    

}
