import React from "react";
import {Col, Row, Container} from "react-bootstrap"
import sitelogo from '../images/logo.png';

export default function Footer() {
    const pages = require('../data/data.json').pages

    return (
        <footer className="mt-5">
            <Container>
                <Row className="py-5">
                    <Col>
                        <a className="text-decoration-none" href="/">
                            <div className="d-flex align-items-end">
                                <img className="pe-2" src={sitelogo} alt=""/>
                                <span className="brand-color">Market</span>
                            </div>
                        </a>
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
                </Row>
                <Row className="copyright">
                    <Col>
                        <p className="text-center">© Copyright 2022 <a href="/"
                                                                       className="text-white text-decoration-none">Market</a> All
                            Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}