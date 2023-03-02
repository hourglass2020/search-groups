import { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

import AddGroupForm from './AddGroupForm';
import SearchForm from './SearchForm';

function HeaderNav() {
    const { pathname } = useLocation();
    const [formShow, setFormShow] = useState(false)

    const handleClickOpen = () => {
        setFormShow(true);
    };

    const handleClose = () => {
        setFormShow(false);
    };

    return (
        <Navbar bg="primary" variant='dark' expand="lg">
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
                        <NavLink className={"nav-item nav-link"} onClick={handleClickOpen}>
                            افزودن گروه
                        </NavLink>
                        <AddGroupForm handleClose={handleClose} open={formShow} setOpen={setFormShow} />

                    </Nav>
                    {
                        (pathname === "/" || pathname === "/search") ? null :
                            <SearchForm />
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderNav