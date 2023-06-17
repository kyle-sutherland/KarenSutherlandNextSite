import { Nav, Navbar } from 'react-bootstrap';

export default function Navigation() {
  return (
    <div className='container-fluid p-0 col-lg-8 col-xxl-6 pt-lg-5 rounded sticky-top'>
      <Navbar
        bg='light'
        expand='lg'
        className='rounded p-0'>
          <div className='container-fluid p-0'><div className='container-fluid rounded p-0 bg-primary'><Navbar.Brand href='/' className='text-dark'><img
              src='/navbar-graphic.svg'
              className='d-inline-block img-fluid rounded' height='64px' width='240px'/></Navbar.Brand></div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <div className='justify-content-end p-3'><Navbar.Collapse id='basic-navbar-nav'>
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
