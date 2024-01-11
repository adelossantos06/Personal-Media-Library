import React from 'react';


function NavBar() {
    return (
        <nav className='nav'>
            <h1>Personal Media Library</h1>
            <ul>
                <li>
                    <button>Movies</button>
                </li>
                <li>
                    <button>TV Shows</button>
                </li>
                <li>
                    <button>Books</button>
                </li>
                <li>
                    <button>Podcasts</button>
                </li>

            </ul>
        </nav>
    )
}

export default NavBar
