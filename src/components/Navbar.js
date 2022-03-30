import { Container, Nav, Navbar } from "react-bootstrap"

function Navigation() {
    const pages = [
        {
            id: 1,
            name: 'Product',
            url: '/product'
        },
        {
            id: 2,
            name: 'About Us',
            url: '/about-us'
        },
        {
            id: 3,
            name: 'Contact',
            url: '/contact'
        }
    ]
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
                                        console.log(page)
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