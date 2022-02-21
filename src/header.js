function Navbar() {
    const pages = [
        {
            id: 1,
            name: 'Home',
            url: '/'
        },
        {
            id: 2,
            name: 'About Us',
            url: '/about-us'
        },
        {
            id: 3,
            name: 'Contact',
            url: '/contact'
        }
    ]
    return (
        <header>
            <nav>
                <ul>
                    {
                        pages.map(page => {
                            console.log(page)
                            return <li key={page.id}>
                                <a href={page.url}>{page.name}</a>
                            </li>
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Navbar