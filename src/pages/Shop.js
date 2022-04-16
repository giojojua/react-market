import React from "react";
import {Container} from "react-bootstrap";
import Intro from "../components/Intro";
import Filter from "../components/Filter";
import Product from "./Product";

export default function Shop() {
    return (
        <section>
            <Intro introImage="/images/shop.jpg"
                   currentPage="/pages/shop"
                   currentPageName="Shop"
            />
            <Container>
                <Filter/>
                <Product/>
            </Container>
        </section>
    )
};