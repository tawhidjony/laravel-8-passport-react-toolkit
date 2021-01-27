import React from 'react'
import {Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <>
                <Navbar bg="white" variant="light" className="shadow-sm">
                    <Navbar.Brand as={Link} to="/">Lara-8-api</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/login" className="btn btn-outline-primary btn-sm mr-2 px-4" >Login</Nav.Link>
                        <Nav.Link as={Link} to="/register" className="btn btn-outline-success btn-sm px-4" >Sign up</Nav.Link>
                    </Nav>
                </Navbar>
             </>
        </div>
    )
}

export default NavBar
