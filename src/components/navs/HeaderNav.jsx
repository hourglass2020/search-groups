import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import { NavLink, useLocation } from 'react-router-dom';

function HeaderNav() {
    const { pathname } = useLocation();

    console.log(pathname)

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
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="جست و جو"
                                    className="me-2 mx-1"
                                    aria-label="Search"
                                />
                                <Button variant="outline-primary">
                                    <BsSearch />
                                </Button>
                            </Form>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderNav