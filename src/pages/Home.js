import React from "react";
import Slider from "../components/Slider";
import {Container} from "react-bootstrap";
import Services from "../components/Services";
import Grid from "../components/Grid";
import BtnLink from "../components/BtnLink";

export default function Home() {
    return (
        <section>
            <Slider btnPage="Go To Shop" btnSrc="/pages/shop"/>
            <Container>
                <Services/>
                <Grid imgSrc="/images/garage2.jpg"
                      imgHeight="auto" imgWidth="600px"
                      heading="About" btnPage="Explore More" btnSrc="/pages/about"
                      paragraph="We are motorcycle company. We're a two man crew that has always dreamed of putting motorcycles on the road, and we've been inspired by our passion for them over many years."
                      btnExist={
                          <BtnLink btnPage="Explore More" btnSrc="/pages/about"/>
                      }
                />
            </Container>
        </section>
    )
};
