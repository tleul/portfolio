import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import ChartBar from '../components/chartOne/ChartBar'

import Wrapper from '../components/Wrapper'
import Navbar from './Navbar'
import Home from '../components/Home'
import { Container } from '@material-ui/core'
import Titlehome from '../components/Titlehome'




const Index = () => {

  return (
    <>
      <Wrapper>
    <Navbar />
    <Container>
      <div className='home-card'>
        <div className='card-inner'>
          <Titlehome />
        </div>
        <div  className='card-inner'>
          <Titlehome />
        </div>
        <div  className='card-inner'> 
          <Titlehome />
        </div>
         
        
      </div>
   
    </Container>
  
      </Wrapper>
    </>
  )
}

export default Index
