import { Nav, Navbar } from 'react-bootstrap';

export default function Navigation() {
  return (
    <div className='container-fluid p-0 sticky-top'>
      <Navbar
        bg='light'
        expand='lg'>
        <div className='container'>
          <Navbar.Brand href='/'>Karen Sutherland Therapy</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <div className='justify-content-end'><Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/profile'>Profile</Nav.Link>
              <Nav.Link href='/services'>Services</Nav.Link>
              <Nav.Link href='/fees'>Fees</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse></div>
        </div>
      </Navbar>
    </div>
  );
}
