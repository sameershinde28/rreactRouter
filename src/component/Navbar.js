import {NavLink} from 'react-router-dom';


export default function Navbar(){
    return(
        <>
        <ul className="navbar">
            <li><NavLink className="nav-bar-link" style={{color:"red"}}to="/">Home</NavLink></li>
            <li><NavLink className="nav-bar-link"to="/about">About</NavLink></li>
            <li><NavLink className="nav-bar-link"to="/contact">Contact</NavLink></li>
            <li><NavLink className="nav-bar-link"to="/filter">Filter</NavLink></li>

        </ul>

        {/* <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
        </ul> */}
        </>
    )
}