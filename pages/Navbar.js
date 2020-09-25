import Link from 'next/link';
import Router from 'next/router';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
const Gonavbar = (props) => {
	return (
		<>
			<div className='nav-bar'>
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
							<Nav.Link href='/'>
								<p>Blogs && Tutorial</p>
							</Nav.Link>
							<Nav.Link href='/covid19'>
								{' '}
								<p>Covid19 Realtime</p>
							</Nav.Link>
							<div className='nav-projects'>
								<NavDropdown
									title='Projects'
									id='collasible-nav-dropdown'>
									<NavDropdown.Item href='https://shop.tafachtech.com/'>
										<p>E-commerce</p>
									</NavDropdown.Item>
									<NavDropdown.Item href='http://oasiscafe.tafachtech.com/'>
										<p>Full CMS cafe/Restaurant Website</p>
									</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.3'>
										<p>Virtual Support Assistance</p>{' '}
										<p>On----progress</p>
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href='#action/3.4'>
										About Developer
									</NavDropdown.Item>
								</NavDropdown>
							</div>
						</Nav>
						<Nav>
							{/* <Nav.Link href='#deets'>
								<p> For Foodies</p>
							</Nav.Link>
							<Nav.Link eventKey={2} href='#memes'>
								Dank memes
							</Nav.Link> */}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</>
	);
};

export default Gonavbar;
