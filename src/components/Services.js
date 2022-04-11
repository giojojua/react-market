import React from "react";
import {Col, Row , Card} from "react-bootstrap"
import {RiCustomerService2Fill} from "react-icons/ri";
import {HiCreditCard} from "react-icons/hi";
import {MdDeliveryDining} from "react-icons/md";
import BtnLink from "./BtnLink";

export default function Services() {
    return (
        <Row className="py-5">
            <Col>
                <Card bg="transparent" style={{ width: '18rem' }}>
                    <RiCustomerService2Fill className="m-auto" color="#6164fe" size="60px"/>
                    <Card.Body>
                        <Card.Title className="text-center text-white">24/7 Support</Card.Title>
                        <Card.Text>
                            We will help you anytime, anywhere.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card bg="transparent" style={{ width: '18rem' }}>
                    <HiCreditCard className="m-auto" color="#6164fe" size="60px"/>
                    <Card.Body>
                        <Card.Title className="text-center text-white">24/7 Shop</Card.Title>
                        <Card.Text>
                            Our Shop is always open for you.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card bg="transparent" style={{ width: '18rem'}}>
                    <MdDeliveryDining className="m-auto" color="#6164fe" size="60px"/>
                    <Card.Body>
                        <Card.Title className="text-center text-white">24/7 Service</Card.Title>
                        <Card.Text>
                            Our Service is always open.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12}>
                <BtnLink btnPage="Go To Shop" btnSrc="/pages/shop" margin="mx-auto"/>
            </Col>
        </Row>
    )
}