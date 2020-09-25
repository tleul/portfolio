import { ResponsiveCalendar } from '@nivo/calendar';
import { connect } from 'react-redux';
import * as legoData from '../LoadingAnimations/legoloading.json';
import Lottie from 'react-lottie';

import PropTypes from 'prop-types';
import { useState } from 'react';
const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: legoData.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};
const ChartBar = ({ dataDay, loading }) => {
	const [disploading, triggerLoading] = useState(true);
	if (disploading) {
		setTimeout(() => {
			triggerLoading(!disploading);
		}, 3000);
	}

	return loading ? (
		<>
			{disploading && (
				<Lottie options={defaultOptions} height={120} width={120} />
			)}
			{!disploading && (
				<ResponsiveCalendar
					data={dataDay}
					from={dataDay[0].day}
					to={dataDay[dataDay.length - 1].day}
					emptyColor='#eeeeee'
					colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
					margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
					yearSpacing={40}
					monthBorderColor='#ffffff'
					dayBorderWidth={2}
					dayBorderColor='#ffffff'
					legends={[
						{
							anchor: 'bottom-left',
							direction: 'row',
							translateY: 36,
							itemCount: 5,
							itemWidth: 60,
							itemHeight: 36,
							itemsSpacing: 14,
							itemDirection: 'left-to-right',
						},
					]}
				/>
			)}
		</>
	) : (
		<Lottie options={defaultOptions} height={120} width={120} />
	);
};

ChartBar.propTypes = {
	dataDay: PropTypes.array,
	loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	dataDay: state.deathByDay.data,
	loading: state.deathByDay.loading,
});

export default connect(mapStateToProps, {})(ChartBar);
