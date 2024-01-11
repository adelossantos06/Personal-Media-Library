import React from 'react';
import "./NavBar.css"
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='nav'>
            <h1>Personal Media Library</h1>
            <ul>
                <li>
                    <NavLink to="/movies">
                        <button>Movies</button>
                    </NavLink>
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
