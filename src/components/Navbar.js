import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap"
import {Link} from "react-router-dom"
import useFetch from "../hooks/useFetch";

export default function Navigation() {

    const {loading, error, data} = useFetch('http://localhost:1337/api/pages?populate=%2A')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>


    data.data.sort((a, b) => a.attributes.position > b.attributes.position ? -1 : 1)


    return (
        <header>
            <Navbar variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link className="d-flex align-items-end text-decoration-none" to="/">
                            <img className="pe-2" src="/images/logo.png" alt=""/>
                            <span className="brand-color">Bikeworld</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                data.data.map(page => {
                                    let attribute = page.attributes
                                    return <Link className="nav-link" key={page.id} to={"/pages/" + attribute.slug}>{attribute.title}</Link>
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}