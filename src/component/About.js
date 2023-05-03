import {Link} from 'react-router-dom';

export default function About(){
    return <>
    <h1>about component</h1>
    <p>This is About page of our awesome app</p>
    <p>we are learning react router here</p>
    <Link to="/">Go to home page</Link>
    </>
}