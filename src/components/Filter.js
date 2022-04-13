import React from "react";
import {Col, Row} from "react-bootstrap";
import {MdKeyboardArrowDown} from "react-icons/md";

export default function Filter() {

    const product = require('../data/data.json').product

    product.sort((a, b) => a.position > b.position ? 1 : -1)

    function DropdownToggle() {
        if (document.getElementById('filter_dropdown').style.display === 'block') {
            document.getElementById('filter_dropdown').style.display = 'none'
        } else {
            document.getElementById('filter_dropdown').style.display = 'block'
        }
    }

    function categoryFilter(event) {
        const itemBox = document.querySelectorAll('.category')

        itemBox.forEach(item => {
            if (event.target.getAttribute('data-category-title') === item.getAttribute('data-item')) {

                item.style.display = "none"
            } else {
                item.style.display = "flex"
            }
        })
    }


    return (
        <Row>
            <Col>
                <div className="filter">
                    <div>
                        <h3 className="fw-bold mb-0">Shop</h3>
                    </div>
                    <div className="d-flex align-items-center position-relative">
                        <button id="current_category" onClick={DropdownToggle}> All Categories
                            <MdKeyboardArrowDown/>
                        </button>
                        <ul id="filter_dropdown" style={{display: "none"}}>
                            <li className="list" onClick={categoryFilter}>All Categories</li>
                            {
                                product.map(product => {
                                    return (
                                        <li className="list" key={product.id} data-category-title={product.category} onClick={categoryFilter}>
                                            {product.category}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Col>
        </Row>
    )
}