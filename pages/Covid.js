import React,{useEffect} from 'react'

import Navbar from "./Navbar"
import Wrapper from "../components/Wrapper";
import Typist from 'react-typist';
import { Container } from '@material-ui/core';
import {connect} from 'react-redux'
import { getCovidData, processData } from "../store/actions";

import PropTypes from 'prop-types'
import MenuDisplay from '../components/Menu'
import CovidTbleTwo from '../components/CovidTbleTwo'
import Spinner from '../components/Spinner'
import { Router } from 'next/router';
import Lottie from "react-lottie";
import * as legoData from "../components/LoadingAnimations/homeLoading.json";
const Display = () => {
    
   return (
    <>
<MenuDisplay />
<CovidTbleTwo />
    </>
)}
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
    }
const Covid = ({loading, getCovidData }) =>{
    setInterval(()=>{
        
        getCovidData()
    },30000)
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
             <div style={{textAlign: 'center'}}>
             <Typist>
             <h6 className='toptitle'>Covid19 woldwide Real-Time Stastics</h6>
              <Typist.Delay ms={1250} />
              <h6 className='toptitle'>Explore each data into actionable insights with different visualization</h6>
              <Typist.Delay ms={1250} />
              <h5 className='toptitle'> It is designed/developed to show to the world how the virus is spreading</h5>  
              <Typist.Delay ms={500} />  
            <p className='caution'>Please  <Typist.Delay ms={500} /> wear mask 
              <Typist.Backspace count={10} delay={1000} /> 
              <Typist.Delay ms={750} />
              wash your hands
              <Typist.Backspace count={15} delay={1000} /> 
              <Typist.Delay ms={750} />
              maintain 6 feet away from each other
              <Typist.Delay ms={1250} />
             </p> 
              </Typist>
            
        
           
             </div>
        {!loading ? <Lottie options={defaultOptions} height={120} width={120} />  : <> <Display/> </>}
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