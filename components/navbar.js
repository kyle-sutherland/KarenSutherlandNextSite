import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Navigation() {
  return (
    <div className='container-fluid col-lg-8 p-0 p-lg-5 rounded sticky-top'>
      <Navbar
        bg='light'
        expand='lg'
        className='rounded'>
        <Container>
          <Navbar.Brand href='/'>Karen Sutherland Therapy</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/profile'>Profile</Nav.Link>
              <Nav.Link href='/services'>Services</Nav.Link>
              <Nav.Link href='/fees'>Fees</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
