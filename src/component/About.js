import { Link,useNavigate } from 'react-router-dom';

export default function About() {
    const navigate=useNavigate();

    return <>
        <h1>about component</h1>
        <p>This is About page of our awesome app</p>
        <p>we are learning react router here</p>
        <Link to="/">Go to home page</Link>
        <ul> 
            <li><Link to="/user/anil">anil</Link></li>
            <li><Link to="/user/peter">peter</Link></li>
        </ul>

        <button onClick={()=>navigate('/')}>HOME</button>

    </>
}
