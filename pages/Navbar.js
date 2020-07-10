
import Link from 'next/link'
import Router from 'next/router'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
const Gonavbar = (props) => {
     return(
         <>
<Navbar className='nav'  sticky='top' collapseOnSelect expand="lg" bg="none" >
  <Navbar.Brand  onClick={()=> Router.push('/', '/')}>
    <img width='200' height='100' src='/logo.png'></img>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Titlehome">Features</Nav.Link>
      <Nav.Link onClick={()=> Router.push('/Covid', '/index' , {shallow: true})}> Covid  </Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
     </>
     )

}

export default Gonavbar