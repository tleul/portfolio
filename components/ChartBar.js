import React,{useEffect, useState} from 'react'
import { ResponsiveBar } from '@nivo/bar'
import Navbar from "../components/Navbar"
import Wrapper from "../components/Wrapper";
import { Container, Table } from "react-bootstrap";
import {connect} from 'react-redux'
import { getCovidData, processData } from "../store/actions";
import CharBar from "../components/ChartBar";

import PropTypes from 'prop-types'

const ChartBar = ({getCovidData,processData, covidData, loading}) =>{


    


return (
 

   
<div style={{height: '100vh'}}>





   </div>
          
   
  
     
)

}
ChartBar.propTypes = {
  covidData : PropTypes.array,
  loading: PropTypes.bool.isRequired,
  processData: PropTypes.func.isRequired,
  getCovidData: PropTypes.func.isRequired,
}
const mapStateToProps = (state) =>({
covidData: state.covid.data,
loading: state.covid.loading

})
export default connect(mapStateToProps,{getCovidData, processData }) (ChartBar);