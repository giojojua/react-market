import React from "react";
import {Col, Row, Card} from "react-bootstrap"
import * as md from "react-icons/md";
import BtnLink from "./BtnLink";

export default function Services() {

    const services = require('../data/data.json').services

    return (
        <Row className="py-5">
            {
                services.map(service => {
                    return (
                        <Col key={service.id}>
                            <Card bg="transparent" style={{width: '18rem'}}>
                                {
                                   React.createElement(
                                       md[service.image],
                                       {
                                           className: 'm-auto',
                                           color: '#6164fe',
                                           size: '60px'
                                       }
                                   )
                                }

                                <Card.Body>
                                    <Card.Title className="text-center text-white">{service.title}</Card.Title>
                                    <Card.Text>
                                        {service.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
            <Col xs={12}>
                <BtnLink btnPage="Go To Shop" btnSrc="/pages/shop" margin="mx-auto"/>
            </Col>
        </Row>
    )
}