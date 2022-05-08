import React from "react";
import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Slider(props) {

    const {loading, error, data} = useFetch('http://localhost:1337/api/sliders?populate=%2A')

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
        <Carousel className="mb-4">
            {
                data.data.map(slider => {
                    let attribute = slider.attributes
                    let image = "http://localhost:1337" + attribute.image.data.attributes.url
                    return (
                        <Carousel.Item key={slider.id}>
                            <div className="sliderImage" style={{backgroundImage: `url(${image})`}}>
                                <div className="container d-flex align-items-center">
                                    <div className="sliderText">
                                        <h2>{attribute.title}</h2>
                                        <p>{attribute.description}</p>
                                        <Link className="yellow-btn" to={props.btnSrc}>{props.btnPage}</Link>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}
