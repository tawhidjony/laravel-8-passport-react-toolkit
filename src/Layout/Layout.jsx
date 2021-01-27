import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import AllRoute from '../routes/AllRoute'

const Layout = () => {
    return (
        <>
        <NavBar />
        <Container fluid >
            <AllRoute />
        </Container>
        </>
    )
}

export default Layout
