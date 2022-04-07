import React from "react";
import Slider from "../components/Slider";
import {Container} from "react-bootstrap";
import Services from "../components/Services";

export default function Home() {
    return (
        <section>
            <Slider/>
            <Container>
                <Services/>
            </Container>
        </section>
    )
};
