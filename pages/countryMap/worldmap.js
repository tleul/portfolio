import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Note that HighMaps has to be in the codebase already
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src';
import ReactDOM from 'react-dom';
import maps from './mapdata/africa';
import PropTypes from 'prop-types';
import { mapAnalysis } from '../../store/actions/index';
import { connect } from 'react-redux';
const WorldMap = ({ mapAnalysis, dataAfrica }) => {
	useEffect(() => {
		mapAnalysis();
	}, []);

	const levelOne = dataAfrica.filter((cases) => cases.cases.active < 50000);
	const levelTwo = dataAfrica.filter(
		(cases) => cases.cases.active > 50000 && cases.cases.active < 100000,
	);
	const levelThree = dataAfrica.filter(
		(cases) => cases.cases.active > 100000 && cases.cases.active < 150000,
	);
	const levelFour = dataAfrica.filter((cases) => cases.cases.active > 150000);

	const config = {
		chart: {
			spacingBottom: 20,
			backgroundColor: 'none',
		},
		title: {
			text: 'Covid Spread in africa',
		},

		legend: {
			enabled: true,
		},
		setOptions: {},

		plotOptions: {
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
					pointFormat: '{point.name}: <b>{point.case}</b>',
				},
			},
		},

		series: [
			{
				name: '0 - 50,000',
				color: '#ffb3b3',
				data: levelOne.map((country) => {
					return { code: country.id, case: country.cases.active };
				}),
			},
			{
				name: '50,000 - 100,000',
				color: '#ff4d4d',
				data: levelTwo.map((country) => {
					return { code: country.id };
				}),
			},
			{
				name: '100,000 - 150,000',
				color: '#ff1a1a',
				data: levelThree.map((country) => {
					return { code: country.id };
				}),
			},
			{
				name: ' > 1500,000',
				color: '#990000',
				data: levelFour.map((country) => {
					return { code: country.id };
				}),
			},
		],
	};
	return (
		<div>
			<h1>Country Map</h1>
			<div>
				<ReactHighmaps config={config} />
			</div>
		</div>
	);
};

WorldMap.propTypes = {
	dataAfrica: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	mapAnalysis: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	dataAfrica: state.africa.data,
	loading: state.africa.loading,
});
export default connect(mapStateToProps, { mapAnalysis })(WorldMap);
