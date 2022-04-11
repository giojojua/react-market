import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap"
import {Link} from "react-router-dom"
import sitelogo from '../images/logo.png';

export default function Navigation() {
    const pages = require('../data/data.json').pages
    pages.sort((a, b) => a.position > b.position ? 1 : -1)

    return (
        <header>
            <Navbar variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link className="d-flex align-items-end text-decoration-none" to="/">
                            <img className="pe-2" src={sitelogo} alt=""/>
                            <span className="brand-color">BikeWorld</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                pages.map(page => {
                                    return <Link className="nav-link" key={page.id} to={page.url}>{page.name}</Link>
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}