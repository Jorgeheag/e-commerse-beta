import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

const Navbarrr = () => {

    const [show, setShow] = useState(false);


    const navigate = useNavigate()
    const handleClose = () => setShow(false);
    const handleShow = () => {
    const token =   localStorage.getItem("token")

    if(token){
        setShow(true)}
    else{ navigate('/login')}

    }
    
    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/#/">E-comerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/#/login">Login</Nav.Link>
                            <Nav.Link href="/#/purchase">Purchases</Nav.Link>
                            <Nav.Link role="button" onClick={handleShow}>carrito</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Cart show={show} handleClose={handleClose}/>
        </div>
    );
};

export default Navbarrr;