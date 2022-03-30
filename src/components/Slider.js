import {Carousel} from "react-bootstrap";
import slider1 from '../images/slider1.jpg';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="sliderImage" style={{backgroundImage: `url(${slider1})`}}>
                    <div className="container d-flex align-items-center">
                        <div className="sliderText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, eius id molestiae nobis
                            quas qui quis repellendus saepe unde vel. Eaque eveniet illum ipsam laboriosam reiciendis
                            rerum soluta suscipit tempore.
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="sliderImage" style={{backgroundImage: `url(${slider1})`}}>
                    <div className="container d-flex align-items-center">
                        <div className="sliderText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, eius id molestiae nobis
                            quas qui quis repellendus saepe unde vel. Eaque eveniet illum ipsam laboriosam reiciendis
                            rerum soluta suscipit tempore.
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="sliderImage" style={{backgroundImage: `url(${slider1})`}}>
                    <div className="container d-flex align-items-center">
                        <div className="sliderText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, eius id molestiae nobis
                            quas qui quis repellendus saepe unde vel. Eaque eveniet illum ipsam laboriosam reiciendis
                            rerum soluta suscipit tempore.
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider
