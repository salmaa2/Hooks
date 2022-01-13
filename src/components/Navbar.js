import {Container,Nav,Navbar} from 'react-bootstrap'
function NavBar() {
    return (
        <div className='nav'> 

<Navbar className='navs'>
  <Container>
    <Navbar.Brand href="#home"><h1>TuniBest</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home"><h3>Home</h3></Nav.Link>
       
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
    
}
export default NavBar 