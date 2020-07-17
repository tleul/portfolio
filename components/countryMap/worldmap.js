import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Note that HighMaps has to be in the codebase already
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src';
import ReactDOM from 'react-dom';
import maps from './mapdata/world';
import PropTypes from 'prop-types';
import { worldMapAnaysis } from '../../store/actions/index';
import { connect } from 'react-redux';
const WorldMap = ({ worldMapAnaysis, dataWorld }) => {
	useEffect(() => {
		worldMapAnaysis();
	}, []);
	const check = () => {
		console.log('clicked')
	}
	const levelOne = dataWorld.filter((cases) => cases.cases.active < 50000);
	const levelTwo = dataWorld.filter(
		(cases) => cases.cases.active > 50000 && cases.cases.active < 100000,
	);
	const levelThree = dataWorld.filter(
		(cases) => cases.cases.active > 100000 && cases.cases.active < 150000,
	);
	const levelFour = dataWorld.filter((cases) => cases.cases.active > 150000);

	const config = {
	
		chart: {
			spacingBottom: 20,
			backgroundColor: 'none',
		},
		title: {
			text: 'Covid Spread in the World',
		},

		legend: {

			enabled: true,
		},
		setOptions: {},

		plotOptions: {
			
				series: {
					events: {
						click: ()=>{
							console.log('heloo')
						}
					}
				},
			
			map: {
				allAreas: false,
				joinBy: ['iso-a2', 'code'],
				dataLabels: {
					enabled: true,
					color: 'white',
					style: {
						fontWeight: 'bold',
					},
				},
				mapData: maps,
				tooltip: {
					headerFormat: '',
					pointFormat: '{point.name}: <button>{point.case}</button>',
				},
			},
		},

		series: [
			{
				
				animation: true,
				name: 'world map',
				color: '#ffb3b3',
				states: {
					hover: {
						color: 'balck'
					},
				
				
				},
				
				tooltip: {
					valueSuffix: ' cases'
				},
				data: levelOne.map((country) => {
					return { code: country.id,case: country.cases.total  };
				}),
				
			},
			{
				name: '50,000 - 100,000',
				color: '#ff4d4d',
				states: {
					hover: {
						color: 'black'
					}
				},
				tooltip: {
					valueSuffix: ' cases'
				},
				data: levelTwo.map((country) => {
					return { code: country.id };
				}),
			},
			{
				name: '100,000 - 150,000',
				color: '#ff1a1a',
				states: {
					hover: {
						color: 'black'
					}
				},
				tooltip: {
					valueSuffix: ' cases'
				},
				data: levelThree.map((country) => {
					return { code: country.id };
				}),
			},
			{
				name: ' > 1500,000',
				color: '#990000',
				states: {
					hover: {
						color: 'black'
					}
				},
				onClick: function(){
					console.log('heloo')
				},
				tooltip: {
					valueSuffix: ' cases'
				},
				data: levelFour.map((country) => {
					return { code: country.id };
				}),
			},
		],
	};
	return (
		<div>
		
			<div>
				<ReactHighmaps config={config} />
			</div>
		</div>
	);
};

WorldMap.propTypes = {
	dataWorld: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	worldMapAnaysis: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	dataWorld: state.world.data,
	loading: state.world.loading,
});
export default connect(mapStateToProps, { worldMapAnaysis })(WorldMap);
