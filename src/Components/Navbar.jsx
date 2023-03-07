import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import React,{useState} from 'react'
import logo from '../images/logo.png'
import { NavLink } from "react-router-dom"

function Navbar(){

  return (
           <div >
            <a href="/">
  <img src="https://static.vecteezy.com/system/resources/thumbnails/000/595/983/small/04012019-25.jpg" class="rounded-circle mx-auto d-block image" alt="..."/>
  </a>
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-1">
        
            <Container>

                <Nav className="me-auto">
                    <Nav.Link to='/' as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>
                        About
                    </Nav.Link>
                    <Nav.Link to='/Contact' as={NavLink}>
                        Contact 
                    </Nav.Link>
                    <Nav.Link to='/offer' as={NavLink}>
                        Offer
                    </Nav.Link>
                    <Nav.Link to='/program' as={NavLink}>
                        Program
                    </Nav.Link>
                </Nav>
                </Container>
        </NavbarBs>
        </div>
  )
}

export default Navbar;