import React from "react";
import {Col, Row} from "react-bootstrap";
import {MdKeyboardArrowDown} from "react-icons/md";
import useFetch from "../hooks/useFetch";

export default function Filter() {

    const { loading, error, data } = useFetch('http://localhost:1337/api/products?populate=%2A')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    // product.sort((a, b) => a.position > b.position ? 1 : -1)

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
            if (event.target.getAttribute('data-category-title') === item.getAttribute('data-item') || event.target.getAttribute('data-category-title') === "all") {
                item.style.display = "flex"
            } else {
                item.style.display = "none"
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
                            <li className="list" data-category-title="all" onClick={categoryFilter}>All Categories</li>
                            {
                                data.data.map(product => {
                                    let attribute = product.attributes
                                    let category = attribute.product_category.data.attributes.name

                                    return (
                                        <li className="list" key={product.id} data-category-title={category}
                                            onClick={categoryFilter}>
                                            {category}
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