import React from 'react';
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='nav'>
            <Link className="homeLink" to="/"><h1>Personal Media Library</h1></Link>
            <ul>
                <li>
                    <NavLink to="/movies">
                        <button className='navButton'>Movies</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tv">
                        <button className='navButton'>TV Shows</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/books">
                        <button className='navButton'>Books</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/podcasts">
                        <button className='navButton'>Podcasts</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/addForm">
                        <button className='addButton'>Add More</button>
                    </NavLink>
                </li>

            </ul>

        </nav >
    )
}

export default NavBar
