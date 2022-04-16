import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Intro from "../components/Intro";
import Map from "../components/Maps";
import ContactText from "../components/ContactText";

export default function Contact() {
    return (
        <section>
            <Intro introImage="/images/shop.jpg"
                   currentPage="/pages/contact"
                   currentPageName="Contact"
            />
            <Container>
                <Row>
                    <Col xs={12} md={5}>
                        <ContactText/>
                    </Col>
                    <Col xs={12} md={7}>
                        <Map/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};