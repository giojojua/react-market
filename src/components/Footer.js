import React from "react";
import {Col, Row, Container} from "react-bootstrap"
import sitelogo from '../images/logo.png';
import ScrollButton from "./ScrollButton";
import ContactText from "./ContactText";

export default function Footer() {
    const pages = require('../data/data.json').pages

    return (
        <footer className="mt-5">
            <Container>
                <Row className="py-5">
                    <Col className="pe-4" xs={6}>
                        <a className="text-decoration-none" href="/">
                            <div className="d-flex align-items-end pb-4">
                                <img className="pe-2" src={sitelogo} alt=""/>
                                <span className="brand-color">BikeWorld</span>
                            </div>
                        </a>
                        <p>Our Shop is growing and accessible to everyone. We are providing safest transactions with
                            BitCoin and on every transactaction you can be relaxed.</p>
                    </Col>
                    <Col>
                        <h5>Navigation</h5>
                        <ul>
                            {
                                pages.map(page => {
                                        pages.sort((a, b) => a.position > b.position ? 1 : -1)
                                        return (<li key={page.id}><a href={page.url}>{page.name}</a></li>)
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
                        <p className="text-center">© Copyright 2022 <a href="/"
                                                                       className="text-white text-decoration-none">Shop</a> All
                            Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
            <ScrollButton/>
        </footer>
    )
}