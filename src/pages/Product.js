import React from "react";
import {Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Product() {

    const { loading, error, data } = useFetch('http://localhost:1337/api/products')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    // const product = require('../data/data.json').product
    //
    // product.sort((a, b) => a.position > b.position ? 1 : -1)


    return (
        <Row className="py-5">
            {
                data.data.map(product => {
                    let attribute = product.attributes
                    console.log(attribute.image)
                    return (
                        <Col xs={12} sm={6} md={6} lg={3} key={product.id} className="category" data-item={attribute.category}>
                            <Link to="/pages/productdetailed"
                                  state={{ from: product.id }}
                                  className="text-decoration-none">
                                <div className="box">
                                    <div className="boximage">
                                        <img src={attribute.image} alt=""/>
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

        // <Row className="py-5">
        //     {
        //         product.map(product => {
        //             return (
        //                 <Col xs={12} sm={6} md={6} lg={3} key={product.id} className="category" data-item={product.category}>
        //                     <Link to="/pages/productdetailed"
        //                           state={{ from: product.id }}
        //                           className="text-decoration-none">
        //                         <div className="box">
        //                             <div className="boximage">
        //                                 <img src={product.image} alt=""/>
        //                             </div>
        //                             <div className="boxtext">
        //                                 <h5>{product.title} {product.model}</h5>
        //                                 <hr/>
        //                                 <div className="d-flex justify-content-between">
        //                                     <div>
        //                                         <span className="pe-2">Price:</span>
        //                                         <span className="text-white">{product.price} BTC</span>
        //                                     </div>
        //                                     <div>
        //                                         <span className="pe-2">Year:</span>
        //                                         <span className="text-white">{product.year}</span>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </Link>
        //                 </Col>
        //             )
        //         })
        //     }
        // </Row>
    )
}