import React,{useEffect} from 'react'
import Navbar from "../components/Navbar"
import Wrapper from "../components/Wrapper";
import { Container, Table } from "react-bootstrap";
import {connect} from 'react-redux'
import { getCovidData, processData } from "../store/actions";
import CharBar from "../components/ChartBar";
import covidReducer from "../store/reducers/covidReducer";
import PropTypes from 'prop-types'
const Covid = () =>{

return (
    <>
    <Wrapper>
         <Navbar />
         <Container center='true'>
            <h1>Covid-19 Track</h1>
            
         </Container>
    
         <CharBar />
   
      
      
         
         
    </Wrapper>
   
    </>
)

}


export default Covid;