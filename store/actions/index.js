import {GET_COVID_DATA, GET_COVID_DEATH_BYDAY, GET_COVID_DATA_AFRICA, GET_COVID_DATA_WORLD} from './types'
import axios from 'axios';
const mapsAfrica = require('../../components/countryMap/mapdata/africa');
const mapsWorld = require('../../components/countryMap/mapdata/world');

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

export  const africaMapAnaysis = () => async dispatch => {
// Country id
// console.log(maps.features[0].id)
//Country name
// console.log(maps.features[0].properties.name)

    
const config ={
  headers:{
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "2926cb8831msh5b23fd7bdae7f5ap13fdcejsn2c5175c5b760",
    "useQueryString": true,
    "Content-Type": "application/json"
  }
}
const res = await axios.get("https://covid-193.p.rapidapi.com/statistics", config)

      const dataEach = res.data.response 
      let dataAfrica = []
      const check = dataEach.filter((item)=>{
        return item.continent == 'Africa'
      })
     const mapdata = mapsAfrica.features
     mapdata.map((cid)=>{

      check.map((item)=>{
       
      if(item.country.replace("-"," ").includes(cid.properties.name)){

          let temp = {}

          temp = item
          temp.id = cid.id

          dataAfrica.push(temp)
        
       
      }
      })
     })
    // dataAfrica.map((item)=>{
    //   mapdata.map((id)=>{
    //     if(item.id != id.id){
    //       console.log(id)
    //     }
    //   })
    // })

    const totalCases =   dataAfrica.sort(function(a, b) {
      return b.cases.total - a.cases.total;
   });
      
     dispatch({type:GET_COVID_DATA_AFRICA, payload: totalCases})
}
export  const worldMapAnaysis = () => async dispatch => {
  // Country id
  // console.log(maps.features[0].id)
  //Country name
  // console.log(maps.features[0].properties.name)
  
      
  const config ={
    headers:{
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "2926cb8831msh5b23fd7bdae7f5ap13fdcejsn2c5175c5b760",
      "useQueryString": true,
      "Content-Type": "application/json"
    }
  }
  const res = await axios.get("https://covid-193.p.rapidapi.com/statistics", config)

        const dataEach = res.data.response 
        console.log(dataEach)
        let dataWorld = []
        // const check = dataEach.filter((item)=>{
        //   return item.continent == 'Africa'
        // })
       const mapdata = mapsWorld.features
       mapdata.map((cid)=>{
  
        dataEach.map((item)=>{
         
        if(item.country.replace("-"," ").includes(cid.properties.name)){
  
            let temp = {}
  
            temp = item
            temp.id = cid.id
  
            dataWorld.push(temp)
          
         
        }
        })
       })
       console.log(dataWorld)
      // dataWorld.map((item)=>{
      //   mapdata.map((id)=>{
      //     if(item.id != id.id){
      //       console.log(id)
      //     }
      //   })
      // })
  
    //   const totalCases =   dataAfrica.sort(function(a, b) {
    //     return b.cases.total - a.cases.total;
    //  });
        
       dispatch({type:GET_COVID_DATA_WORLD, payload: dataWorld})
  }