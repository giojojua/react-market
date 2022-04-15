import React from "react";
import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Slider(props) {

    const slider = require('../data/data.json').slider

    slider.sort((a, b) => a.position > b.position ? 1 : -1)

    return (
        <Carousel className="mb-4">
            {
                slider.map(slider => {
                    return (
                        <Carousel.Item key={slider.id}>
                            <div className="sliderImage" style={{backgroundImage: `url(${slider.sliderImage})`}}>
                                <div className="container d-flex align-items-center">
                                    <div className="sliderText">
                                        <h2>{slider.sliderTitle}</h2>
                                        <p>{slider.sliderText}</p>
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
