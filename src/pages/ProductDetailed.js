import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";

export default function ProductDetailed() {

    const productIdentify = useLocation()

    let identifier = productIdentify.state.from

    const product = require('../data/data.json').product


    return (
        product.map(product => {
            if (identifier === product.id) {
                return (
                    <Container key={product.id}>
                        <Row className="py-5">
                            <Col>
                                <img src={product.image} alt=""/>
                            </Col>
                            <Col>
                                <h3 className="fw-bold">{product.title}</h3>
                                <h5 className="fw-bold">{product.model}</h5>
                                <hr/>
                                <div className="d-flex justify-content-between">
                                    <span className="pe-2">Price:</span>
                                    <span className="text-white"> {product.price} BTC</span>
                                </div>
                                <hr/>
                                <div>
                                    <h6>Details:</h6>
                                    <div>
                                        <span className="pe-2">Manufacturer:</span>
                                        <span className="text-white"> {product.title}</span>
                                    </div>
                                    <div>
                                        <span className="pe-2">Model:</span>
                                        <span className="text-white"> {product.model}</span>
                                    </div>
                                    <div>
                                        <span className="pe-2">Category:</span>
                                        <span className="text-white"> {product.category}</span>
                                    </div>
                                    <div>
                                        <span className="pe-2">Year:</span>
                                        <span className="text-white"> {product.year}</span>
                                    </div>
                                    <div>
                                        <span className="pe-2">Engine:</span>
                                        <span className="text-white"> {product.engine}cc</span>
                                    </div>
                                    <div>
                                        <span className="pe-2">Transmission:</span>
                                        <span className="text-white"> {product.transmission}</span>
                                    </div>
                                </div>
                                <hr/>

                            </Col>
                        </Row>
                    </Container>
                )
            }
        })
    )
}