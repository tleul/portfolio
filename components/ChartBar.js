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
   useEffect(()=>{
 getCovidData()
},[])

    


return (
 

   
    <div style={{height: '100vh'}}>
<button onClick={()=>processData(covidData)}>Referesh</button>

{/*         
          <ResponsiveBar
        data={covidData}
        keys={[ 'Active Cases_text',  ]}
        indexBy="Country_text"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'cases',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
      */}

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