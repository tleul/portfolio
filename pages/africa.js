import React from 'react';

import AfricaMap from './countryMap/africamap';
import Navbar from './Navbar';
import Wrapper from '../components/Wrapper';

const Africa = () => {
	return (
		<Wrapper>
		<div className='map-container'>
		
				<Navbar />
				<div>
					<AfricaMap />
				</div>
				
			
		</div>
		</Wrapper>
	);
};

export default Africa;
