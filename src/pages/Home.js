import React from "react";
import Slider from "../components/Slider";
import {Container} from "react-bootstrap";
import Services from "../components/Services";
import Grid from "../components/Grid";

export default function Home() {
    return (
        <section>
            <Slider/>
            <Container>
                <Services/>
                <Grid/>
            </Container>
        </section>
    )
};
