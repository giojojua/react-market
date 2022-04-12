import React from "react";
import {Col, Row} from "react-bootstrap";
import {MdKeyboardArrowDown} from "react-icons/md";

export default function Filter() {
    return (
        <Row>
            <Col>
                <div className="filter">
                    <div>
                        <h3 className="fw-bold mb-0">Shop</h3>
                    </div>
                    <div className="d-flex align-items-center">
                        <button id="current_category"> All Categories
                            <MdKeyboardArrowDown/>
                        </button>
                        <ul id="filter_dropdown" style={{display: "none"}}>
                            <li className="list" data-filter="All Categories">All Categories</li>
                            <li className="list" data-filter="Cars For Sale">Cars For Sale</li>
                            <li className="list" data-filter="Exclusive Spirits">Exclusive Spirits</li>
                            <li className="list" data-filter="Fine Jewelry">Fine Jewelry</li>
                            <li className="list" data-filter="Men's Watches">Men's Watches</li>
                            <li className="list" data-filter="Ladies Watches">Ladies Watches</li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Row>
    )
}