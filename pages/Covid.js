import React,{useEffect} from 'react'
import Navbar from "../components/Navbar"
import Wrapper from "../components/Wrapper";
import StickyHeadTable from '../components/CovidTable'
import { Container } from '@material-ui/core';
import {connect} from 'react-redux'
import { getCovidData, processData } from "../store/actions";
import CharBar from "../components/ChartBar";
import covidReducer from "../store/reducers/covidReducer";
import PropTypes from 'prop-types'
import MenuDisplay from '../components/Menu'
import CovidTbleTwo from '../components/CovidTbleTwo'
const Covid = () =>{

return (
    <>
    <Wrapper>
         <Navbar />
         <br/>
         <br/>
         <Container >
        <MenuDisplay />
        <br/>
        <CovidTbleTwo />
        
        </Container>

        
         
    
         <CharBar />
   
      
      
         
         
    </Wrapper>
   
    </>
)

}


export default Covid;