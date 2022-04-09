import React from "react";
import {Container} from "react-bootstrap";
import Intro from "../components/Intro";

export default function Contact() {
    return (
        <section>
            <Intro introImage="https://i.pinimg.com/736x/97/5f/95/975f95721627da1d9eb55bcf2f5e1e17.jpg"
                   currentPage="/pages/contact"
                   currentPageName="Contact"
            />
            <Container>
                <p>Contact Content</p>
            </Container>
        </section>
    )
};