import React from "react";
import {Container} from "react-bootstrap";
import Intro from "../components/Intro";
import Filter from "../components/Filter";
import Product from "./Product";

export default function Shop() {
    return (
        <section>
            <Intro introImage="https://i.pinimg.com/736x/97/5f/95/975f95721627da1d9eb55bcf2f5e1e17.jpg"
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