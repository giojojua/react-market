import React from "react";
import {Link} from "react-router-dom";

export default function intro(props) {
    return(
        <div className="intro mb-5" style={{
            backgroundImage: `url(${props.introImage})`,
        }}>
            <div className="text-wrapper">
                <h2>{props.currentPageName}</h2>
                <span>
                    <Link className="text-decoration-none me-2" to="/">Home</Link>
                    /
                    <Link className="text-decoration-none ms-2" to={props.currentPage} onClick={e => e.preventDefault()}>{props.currentPageName}</Link>
                </span>
            </div>
        </div>
    )
}