import {Carousel} from "react-bootstrap";
import slider1 from '../images/slider1.jpg';
import React from "react";

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="sliderImage" style={{backgroundImage: `url(${slider1})`}}>
                    <div className="container d-flex align-items-center">
                        <div className="sliderText">
                            <h2>Lorem ipsum dolor <span className="text-yellow">sit amet</span>, consectetur adipisicing
                                elit.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, eius id molestiae
                                nobis quas qui quis repellendus saepe unde vel. Eaque eveniet illum ipsam laboriosam
                                reiciendis rerum soluta suscipit tempore.</p>
                            <a href="/" className="slider-btn">Go To Market</a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="sliderImage" style={{backgroundImage: `url(${slider1})`}}>
                    <div className="container d-flex align-items-center">
                        <div className="sliderText">
                            <h2>Lorem ipsum dolor <span className="text-yellow">sit amet</span>, consectetur adipisicing
                                elit.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, eius id molestiae
                                nobis quas qui quis repellendus saepe unde vel. Eaque eveniet illum ipsam laboriosam
                                reiciendis rerum soluta suscipit tempore.</p>
                            <a href="/" className="slider-btn">Go To Market</a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="sliderImage" style={{backgroundImage: `url(${slider1})`}}>
                    <div className="container d-flex align-items-center">
                        <div className="sliderText">
                            <h2>Lorem ipsum dolor <span className="text-yellow">sit amet</span>, consectetur adipisicing
                                elit.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, eius id molestiae
                                nobis quas qui quis repellendus saepe unde vel. Eaque eveniet illum ipsam laboriosam
                                reiciendis rerum soluta suscipit tempore.</p>
                            <a href="/" className="slider-btn">Go To Market</a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider
