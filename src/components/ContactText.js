import React from "react";

export default function ContactText() {
    return (
        <ul className="contact-text">
            <h5>Contact</h5>
            <li>
                <h6>Email:
                    <a className="text-decoration-none" href="mailto:jojuagio7@gmail.com"> jojuagio7@gmail.com</a>
                </h6>
            </li>
            <li>
                <h6>Phone:
                    <a className="text-decoration-none" href="tel:+995551740740"> +995 551 740 740</a>
                </h6>
            </li>
            <li>
                <h6>Location:
                    <a className="text-decoration-none" href="https://goo.gl/maps/86eA1FyQRyG7VmmA6" target="_blank"
                       rel="noreferrer"> 9 Bakhtrioni St, Tbilisi, Georgia</a>
                </h6>
            </li>
        </ul>
    )
}