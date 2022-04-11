import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Intro from "../components/Intro";
import Map from "../components/Maps";
import ContactText from "../components/ContactText";

export default function Contact() {
    return (
        <section>
            <Intro introImage="https://i.pinimg.com/736x/97/5f/95/975f95721627da1d9eb55bcf2f5e1e17.jpg"
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