import React from 'react';

import AfricaMap from './africamap';
import Navbar from '../Navbar';
import Wrapper from './../../components/Wrapper';

const Africa = () => {
	return (
		<div className='map-container'>
			<Wrapper>
				<Navbar />
				<div>
					<AfricaMap />
				</div>
				<div>
					<AfricaMap />
				</div>
				<div>
					<AfricaMap />
				</div>
				<div>
					<AfricaMap />
				</div>
			</Wrapper>
		</div>
	);
};

export default Africa;
