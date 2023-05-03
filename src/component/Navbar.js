// import {Link} from 'react-router-dom';


export default function Navbar(){
    return(
        <>
        {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul> */}

        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
        </ul>
        </>
    )
}