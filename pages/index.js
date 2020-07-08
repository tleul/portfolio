import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Head from 'next/head'
import ChartBar from '../components/chartOne/ChartBar'
import Link from 'next/link'
import Router from 'next/router'
import Wrapper from '../components/Wrapper'
import Navbar from './Navbar'
import Home from '../components/Home'
import { Button } from '@material-ui/core'



const Index = () => {



  // const testRoute = () =>{
  //     
  // }
  return (
    <>
      <Wrapper>

    <Navbar />
       

        <Button   variant='contained' onClick={()=> testRoute() }>Routing test</Button>
    
      
      </Wrapper>
    </>
  )
}

export default Index
