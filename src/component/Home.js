import {Link} from 'react-router-dom';

export default function Home(){
    return <>
    <h1>home component</h1>
    <p>This is Home page of our awesome app</p>
    <p>we are learning react router here</p>
    <Link to="/about">Go to about page</Link>
    </>
}