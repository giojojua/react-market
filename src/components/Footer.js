import {Container} from "react-bootstrap"
import React from "react";

function Footer() {
    const pages = require('../data/data.json').pages

    return (
        <footer>
            <Container>
                <ul>
                    {
                        pages.map(page => {
                                {
                                    pages.sort((a, b) => a.position > b.position ? 1 : -1)
                                    return (<li key={page.id}><a href={page.url}>{page.name}</a></li>)
                                }
                            }
                        )
                    }
                </ul>
            </Container>
        </footer>
    )
}

export default Footer