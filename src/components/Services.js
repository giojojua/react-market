import React from "react";
import {Col, Row, Card} from "react-bootstrap"
import * as md from "react-icons/md";
import BtnLink from "./BtnLink";
import useFetch from "../hooks/useFetch";

export default function Services() {

    const {loading, error, data} = useFetch('http://localhost:1337/api/services?populate=%2A')

    if (loading) return (
        <div className="loading">
            <img src="/images/loading.gif" alt=""/>
        </div>
    )

    if (error) return (
        <div className="error">
            <img src="/images/loading.gif" alt=""/>
        </div>
    )


    data.data.sort((a, b) => a.attributes.position > b.attributes.position ? -1 : 1)

    return (
        <Row className="py-5">
            {
                data.data.map(service => {
                    let attribute = service.attributes
                    console.log(attribute)

                    return (
                        <Col key={service.id}>
                            <Card bg="transparent" style={{width: '18rem'}}>
                                {
                                   React.createElement(
                                       md[attribute.image],
                                       {
                                           className: 'm-auto',
                                           color: '#6164fe',
                                           size: '60px'
                                       }
                                   )
                                }

                                <Card.Body>
                                    <Card.Title className="text-center text-white">{attribute.title}</Card.Title>
                                    <Card.Text>
                                        {attribute.description}
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