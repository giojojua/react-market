import React from "react";
import {Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Product() {

    const {loading, error, data} = useFetch('http://localhost:1337/api/products?populate=%2A')

    if (loading) return (
        <Row>
            <Col>
                Loading
            </Col>
        </Row>
    )

    if (error) return <p>Error...</p>

    data.data.sort((a, b) => a.attributes.position > b.attributes.position ? -1 : 1)

    return (
        <Row className="py-5">
            {
                data.data.map(product => {
                    let attribute = product.attributes
                    let image = attribute.image.data.attributes.url
                    let category = attribute.product_category.data.attributes.name

                    return (
                        <Col xs={12} sm={6} md={6} lg={3} key={product.id} className="category" data-item={category}>
                            <Link to={"/pages/productdetailed/" + product.id}
                                  className="text-decoration-none">
                                <div className="box">
                                    <div className="boximage">
                                        <div className="category-baner">
                                            {category}
                                        </div>
                                        <img src={"http://localhost:1337" + image} alt=""/>
                                    </div>
                                    <div className="boxtext">
                                        <h5>{attribute.title} {attribute.model}</h5>
                                        <hr/>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <span className="pe-2">Price:</span>
                                                <span className="text-white">{attribute.price} BTC</span>
                                            </div>
                                            <div>
                                                <span className="pe-2">Year:</span>
                                                <span className="text-white">{attribute.year}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    )
                })
            }
        </Row>
    )
}