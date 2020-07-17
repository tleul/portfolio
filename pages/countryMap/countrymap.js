import React,{useEffect,useState} from 'react'
import  axios from 'axios'
// Note that HighMaps has to be in the codebase already
import  ReactHighmaps from 'react-highcharts/ReactHighmaps.src';
import  ReactDOM from 'react-dom';
import  maps from './mapdata/africa';
import PropTypes from 'prop-types';
import {mapAnalysis} from '../../store/actions/index'
import { connect } from 'react-redux';
const CountryMap = ({mapAnalysis, dataAfrica}) =>{
useEffect(() => {
	mapAnalysis()
	mapper(dataAfrica)


}, [])
const [averagelevel, setaveragelevle] = useState({
	levelone:{
		data:[],
		color: ''
	},
	leveltwo:{
		data:'',
		color: ''
	},
	levelthree: {
		data:'',
		color: ''
	},
	levelfour: {
		data:'',
		color: ''
	},
	levelfive: {
		data:'',
		color: ''
	},
})

console.log(averagelevel.levelone)
const config = {
	chart       : {
        spacingBottom : 20,
        backgroundColor:'none',
        
	},
	title       : {
		text : 'Europe time zones',
	},

	legend      : {
		enabled : true,
	},
	setOptions  : {},

	plotOptions : {
		map : {
			allAreas   : false,
			joinBy     : [
				'iso-a2',
				'code',
			],
			dataLabels : {
				enabled : true,
				color   : 'white',
				style   : {
					fontWeight : 'bold',
				},
			},
			mapData    : maps,
			tooltip    : {
				headerFormat : '',
				pointFormat  :
					'{point.name}: <b>{series.name}</b>',
			},
		},
	},

	series      : [
		{
			color : 'red',
			data  : dataAfrica.map((country)=>{
				return {code: country.id}
			})
		},
	],
};
return(
<div>
    <h1>
        Country Map
    </h1>
    <div >
    <ReactHighmaps config={config} />
    </div>
</div>
)
}

CountryMap.getInitialProps = async (ctx) => {
    
        const config ={
          headers:{
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "2926cb8831msh5b23fd7bdae7f5ap13fdcejsn2c5175c5b760",
            "useQueryString": true,
            "Content-Type": "application/json"
          }
        }
        const res = await axios.get("https://covid-193.p.rapidapi.com/statistics", config)
           
      const data = res.data.response
      
     const africa = data.filter((item)=>{
        return item.continent === 'Africa'
     })
   
      
    return {continent: africa}
    
}   
CountryMap.propTypes = {
	dataAfrica: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	mapAnalysis: PropTypes.func.isRequired,
}
const mapStateToProps = (state) =>({
	dataAfrica: state.africa.data,
	loading: state.africa.loading,
})
export default connect(mapStateToProps,{mapAnalysis}) (CountryMap);