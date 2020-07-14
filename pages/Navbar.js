import Link from 'next/link';
import Router from 'next/router';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
const Gonavbar = (props) => {
	return (
		<>
			<Navbar
				className='nav'
				sticky='top'
				collapseOnSelect
				expand='lg'
				bg='none'>
				<Navbar.Brand onClick={() => Router.push('/', '/')}>
					<img width='200' height='100' src='/logo.png'></img>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/Titlehome'>
							<p className='navMenu'>Blogs && Tutorial</p>
						</Nav.Link>
						<Nav.Link
							onClick={() =>
								Router.push('/Covid', '/covid', {
									shallow: false,
								})
							}>
							{' '}
							<p className='navMenu'>Covid19 Realtime</p>
						</Nav.Link>
						<NavDropdown
							title='Projects'
							id='collasible-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>
								<p className='navMenu'>E-commerce</p>
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								<p className='navMenu'>
									Full CMS cafe/Restaurant Website
								</p>
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>
								<p className='navMenu'>
									Virtual Support Assistance
								</p>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>
								About Developer
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href='#deets'>For Foodies</Nav.Link>
						<Nav.Link eventKey={2} href='#memes'>
							Dank memes
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Gonavbar;
