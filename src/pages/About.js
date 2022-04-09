import React from "react";
import {Container} from "react-bootstrap";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

export default function About() {
    return (
        <section>
            <Intro introImage="https://i.pinimg.com/736x/97/5f/95/975f95721627da1d9eb55bcf2f5e1e17.jpg"
                   currentPage="/pages/about"
                   currentPageName="About"
            />
            <Container>
                <Grid imgSrc="https://i.pinimg.com/736x/97/5f/95/975f95721627da1d9eb55bcf2f5e1e17.jpg"
                      imgHeight="300px" imgWidth="600px"
                      heading="About"
                      paragraph="Accusamus aliquid aspernatur at consectetur
                      culpa delectus dignissimos dolorem eligendi harum incidunt inventore ipsum iusto, quae quo, reiciendis
                      reprehenderit tenetur vero voluptate."
                />
            </Container>
        </section>
    )
};