import React from "react";
import {Container} from "react-bootstrap";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

export default function About() {
    return (
        <section>
            <Intro introImage="/images/shop.jpg"
                   currentPage="/pages/about"
                   currentPageName="About"
            />
            <Container>
                <Grid imgSrc="/images/garage.jpg"
                      imgHeight="300px" imgWidth="600px"
                      heading="About"
                      paragraph="We are motorcycle company. We're a two man crew that has always dreamed of putting motorcycles on the road, and we've been inspired by our passion for them over many years."
                />
            </Container>
        </section>
    )
};