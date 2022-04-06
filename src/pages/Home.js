import React from "react";
import Slider from "../components/Slider";
import {Container} from "react-bootstrap";

export default function Home() {
    return (
        <section>
            <Slider/>
            <Container>
                <p>Home Content</p>
            </Container>
        </section>
    )
};
