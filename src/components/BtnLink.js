import React from "react";
import {Link} from "react-router-dom";

export default function BtnLink(props) {
    return (
        <Link to={props.btnSrc} className={`yellow-btn mt-4 ${props.margin}`}>{props.btnPage}</Link>
    )
}