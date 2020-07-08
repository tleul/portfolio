import React,{useEffect} from 'react'

import Navbar from "./Navbar"
import Wrapper from "../components/Wrapper";

import { Container } from '@material-ui/core';
import {connect} from 'react-redux'
import { getCovidData, processData } from "../store/actions";
import CharBar from "../components/chartOne/ChartBar";
import covidReducer from "../store/reducers/covidReducer";
import PropTypes from 'prop-types'
import MenuDisplay from '../components/Menu'
import CovidTbleTwo from '../components/CovidTbleTwo'
import Spinner from '../components/Spinner'
import { Router } from 'next/router';

const Display = () => {
    
   return (
    <>
<MenuDisplay />
<CovidTbleTwo />
    </>
)}

const Covid = ({loading, getCovidData }) =>{
    useEffect (()=>{
getCovidData()
    },[])

return (
    <>
    <Wrapper>
        <Navbar/>
         <br/>
         <br/>
         <Container>
        {!loading ? <Spinner /> : <> <Display/> </>}

        </Container>

\
    </Wrapper>
   
    </>
)

}

Covid.propTypes = {
    loading: PropTypes.bool.isRequired,
    getCovidData: PropTypes.func.isRequired,
}

const mapStateToProps = (state) =>({
loading : state.covid.loading
})

export default connect(mapStateToProps, {getCovidData})(Covid);