import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import {BrowserRouter as Router } from 'react-dom'
import Wrapper from '../components/Wrapper'
import Navbar from '../components/Navbar'
import Home from '../components/Home'



const Index = () => {

  return (
    <>
     
      <Wrapper>
       <Navbar />
       <Home />
      </Wrapper>
    </>
  )
}

export default Index
