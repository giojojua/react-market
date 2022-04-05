import { Container, Nav, Navbar } from "react-bootstrap"

function Navigation() {
    const pages = require('../data/data.json').pages
    return (
        <header>
            <Navbar variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                                {
                                    pages.map(page => {
                                        pages.sort((a, b) => a.position > b.position ? 1 : -1)
                                        return <Nav.Link key={page.id} href={page.url}>{page.name}</Nav.Link>
                                    })
                                }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navigation