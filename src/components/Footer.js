import React from "react";
import {Col, Row, Container} from "react-bootstrap"
import ScrollButton from "./ScrollButton";
import ContactText from "./ContactText";
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Footer() {
    const {loading, error, data} = useFetch('http://localhost:1337/api/pages')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    data.data.sort((a, b) => a.attributes.position > b.attributes.position ? -1 : 1)

    return (
        <footer className="mt-5">
            <Container>
                <Row className="py-5">
                    <Col className="pe-4" xs={6}>
                        <Link className="text-decoration-none" to="/">
                            <div className="d-flex align-items-end pb-4">
                                <img className="pe-2" src="/images/logo.png" alt=""/>
                                <span className="brand-color">Bikeworld</span>
                            </div>
                        </Link>
                        <p>Our Shop is growing and accessible to everyone. We are providing safest transactions with
                            BitCoin and on every transactaction you can be relaxed.</p>
                    </Col>
                    <Col>
                        <h5>Navigation</h5>
                        <ul>
                            {
                                data.data.map(page => {
                                    let attribute = page.attributes
                                        return (<li key={page.id}><Link to={"/pages/" + attribute.slug}>{attribute.title}</Link></li>)
                                    }
                                )
                            }
                        </ul>
                    </Col>
                    <Col>
                        <ContactText/>
                    </Col>
                </Row>
                <Row className="copyright">
                    <Col>
                        <p className="text-center">© Copyright 2022 <Link to="/"
                                                                       className="text-white text-decoration-none">Bikeworld</Link> All
                            Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
            <ScrollButton/>
        </footer>
    )
}