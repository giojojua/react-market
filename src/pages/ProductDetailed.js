import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {MdKeyboardArrowLeft} from "react-icons/md";
import useFetch from "../hooks/useFetch";

export default function ProductDetailed() {

    const {id} = useParams()

    const {loading, error, data} = useFetch('http://localhost:1337/api/products/' + id + '?populate=%2A')

    console.log(data);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>


    let attribute = data.data.attributes
    let image = attribute.image.data.attributes.url
    let category = attribute.product_category.data.attributes.name

    return (
        <Container key={id}>
            <Row className="py-5">
                <Col xs={12}>
                    <Link className="text-decoration-none d-flex align-items-center" to="/pages/shop">
                        <span className="fs-1" style={{marginLeft: -14}}><MdKeyboardArrowLeft/></span>
                        <span className="pt-2">Back</span>
                    </Link>
                </Col>
                <Col>
                    <img src={"http://localhost:1337" + image} alt=""/>
                </Col>
                <Col>
                    <h3 className="fw-bold">{attribute.title}</h3>
                    <h5 className="fw-bold">{attribute.model}</h5>
                    <hr/>
                    <div className="d-flex justify-content-between">
                        <span className="pe-2">Price:</span>
                        <span className="text-white">{attribute.price} BTC</span>
                    </div>
                    <hr/>
                    <div>
                        <h6>Details:</h6>
                        <div>
                            <span className="pe-2">Manufacturer:</span>
                            <span className="text-white"> {attribute.title}</span>
                        </div>
                        <div>
                            <span className="pe-2">Model:</span>
                            <span className="text-white"> {attribute.model}</span>
                        </div>
                        <div>
                            <span className="pe-2">Category:</span>
                            <span className="text-white"> {category}</span>
                        </div>
                        <div>
                            <span className="pe-2">Year:</span>
                            <span className="text-white"> {attribute.year}</span>
                        </div>
                        <div>
                            <span className="pe-2">Engine:</span>
                            <span className="text-white"> {attribute.engine}cc</span>
                        </div>
                        <div>
                            <span className="pe-2">Transmission:</span>
                            <span className="text-white"> {attribute.transmission}</span>
                        </div>
                    </div>
                    <hr/>
                </Col>
            </Row>
        </Container>
    )
}