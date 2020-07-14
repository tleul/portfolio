import SkillShuffler from './Titlehome';
import CovidTbleTwo from './CovidTbleTwo';
import { connect } from 'react-redux';
import { getCovidData } from './../store/actions/index';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Home = ({ getCovidData, loading }) => {
	setInterval(() => {
		getCovidData();
	}, 30000);
	useEffect(() => {
		getCovidData();
	}, []);
	return (
		<>
			<div className='main-container'>
				<div className='protoflio-home'>
					<div className='top-title'>
						<h3>
							Welcome In!!
							<br />
							This is Leul, T
							<br />I am Fullstack software Developer!
						</h3>
					</div>

					<div className='shuffle'>
						<SkillShuffler />
					</div>
				</div>
				<div className='covid-showroom'>
					<CovidTbleTwo />
				</div>
			</div>
		</>
	);
};
Home.propTypes = {
	getCovidData: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
	loading: state.covid.loading,
});
export default connect(mapStateToProps, { getCovidData })(Home);
