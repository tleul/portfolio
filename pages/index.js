import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ChartBar from '../components/chartOne/ChartBar';

import Wrapper from '../components/Wrapper';
import Gonavbar from './Navbar';
import Home from '../components/Home';

import { Container } from '@material-ui/core';

const Index = () => {
	return (
		<>
			<Wrapper>
				<Gonavbar />
				<Container>
					<Home />
				</Container>
			</Wrapper>
		</>
	);
};

export default Index;
