import { Link, Outlet } from "react-router-dom";

function Contact(){
    return(
        <div>
            <h2>This is contact page</h2>
            <p style={{color:"red"}}>welcome to this page</p>
            <h3>Here we have some other businesses</h3>
            <Link to="company">Company</Link>
            <Link to="channel">Channel</Link>
            <Link to="other">Other</Link>
            <Outlet />
        </div>
    )
}

export default Contact;