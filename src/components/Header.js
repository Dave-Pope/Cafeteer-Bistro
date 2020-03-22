import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <div className='Header'>
            <Navbar collapseOnSelect expand='lg' variant='dark'>
                <Navbar.Brand>Cafeteer</Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav' />

                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Nav.Link href='#'>HOME</Nav.Link>
                        <Nav.Link href='#'>MENU</Nav.Link>
                        <Nav.Link href='#'>PAYOUT</Nav.Link>
                        <Nav.Link href='#'>HISTORY</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
