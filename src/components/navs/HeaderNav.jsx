import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

import HeaderSearch from './SearchForm';

function HeaderNav() {
    const { pathname } = useLocation();

    return (
        <Navbar bg="white" expand="lg">
            <Container >
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/images/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    گروه یاب
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className={"nav-item nav-link"} to="/search">
                            لیست گروه ها
                        </NavLink>
                        <NavLink className={"nav-item nav-link"}>
                            افزودن گروه
                        </NavLink>
                    </Nav>
                    {
                        (pathname === "/" || pathname === "/search") ? null :
                            <HeaderSearch />
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderNav