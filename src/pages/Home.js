import React from "react";
import Slider from "../components/Slider";
import {Container} from "react-bootstrap";
import Services from "../components/Services";
import Grid from "../components/Grid";

export default function Home() {
    return (
        <section>
            <Slider btnPage="Go To Market" btnSrc="/pages/market"/>
            <Container>
                <Services btnPage="Go To Market" btnSrc="/pages/market"/>
                <Grid imgSrc="https://i.pinimg.com/736x/97/5f/95/975f95721627da1d9eb55bcf2f5e1e17.jpg"
                      imgHeight="300px" imgWidth="600px"
                      heading="About"
                      paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aspernatur at consectetur
                      culpa delectus dignissimos dolorem eligendi harum incidunt inventore ipsum iusto, quae quo, reiciendis
                      reprehenderit tenetur vero voluptate."
                />
            </Container>
        </section>
    )
};
