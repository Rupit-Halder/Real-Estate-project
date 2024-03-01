import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.png"
import "./menu.css"


const Menu = () => {
  return (
    <div className='menu_main'>
      <Container>
        <Row>
            <Col lg={12}>
            <Navbar expand="lg" className="bg_menu">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           
            <Nav.Link href="/Footer" className='menu-bar'>Home</Nav.Link>
            <Nav.Link href="#link" className='menu-bar'>About</Nav.Link>
            <Nav.Link href="#link" className='menu-bar1'>Properties</Nav.Link>
            <Nav.Link href="#link" className='menu-bar1'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Menu