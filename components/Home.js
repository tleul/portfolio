import SkillShuffler from './Titlehome';
import CovidTbleTwo from './CovidTbleTwo';
import { connect } from 'react-redux';
import { getCovidData } from './../store/actions/index';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import Aboutme from './Aboutme';

const test = './test.gif';

const Home = () => {
	return (
		<>
			<div className='main-container'>
				<div className='protoflio-home'>
					<div className='top-title'>
						<h3>
							<br />
							Leul, T
							<br />
							Fullstack Developer!
						</h3>
						<hr style={{ borderWidth: 10, borderColor: 'black' }} />
					</div>

					<div className='shuffle'>
						<SkillShuffler />
						<hr style={{ borderWidth: 10, borderColor: 'black' }} />
					</div>
					<div>
						<h2 style={{ color: 'black' }}>About Me</h2>
						<Aboutme />
					</div>
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
