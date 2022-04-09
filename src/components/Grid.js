import React from "react";
import {Col, Row} from "react-bootstrap";


export default function Grid(props) {
    return (
        <Row className="py-5">
            <Col>
                <img src={props.imgSrc} alt=""
                     style={{
                         height: props.imgHeight,
                         width: props.imgWidth
                     }}/>
            </Col>
            <Col>
                <h2>{props.heading}</h2>
                <p>{props.paragraph}</p>
                {props.btnExist}
            </Col>
        </Row>
    )
}