import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
      <header>
      <Navbar bg="primary" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand className="fs-1"href="/">Universal Adventures</Navbar.Brand><br></br>
          <Nav className="me-auto fs-2">
            <Nav.Link href="home">Home<i class="fa-solid fa-house"></i></Nav.Link><br></br>
            <Nav.Link href="features">About<i class="fa-solid fa-question"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
    </header>
  )
}

export default Header
