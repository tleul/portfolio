import React from 'react';
import WorldMap from './worldmap'

import Navbar from '../Navbar';
import Wrapper from './../../components/Wrapper';

const World = () => {
	return (
		<div className='map-container'>
			<Wrapper>
				<Navbar />
				<div>
					<WorldMap />
				</div>
				
			</Wrapper>
		</div>
	);
};

export default World;
