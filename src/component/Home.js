import {Link,useNavigate,useLocation} from 'react-router-dom';

export default function Home(){
    const location=useLocation();
    console.log(location);

   const navigate=useNavigate();
    const navToPage=(url)=>{
        navigate(url);

    }
   return <>
    <h1>home component</h1>
    <p>This is Home page of our awesome app</p>
    <p>we are learning react router here</p>
    <Link to="/about">Go to about page</Link>
    <br/> <br/>
    <button onClick={()=>navToPage('/about')}  >Go to about</button>
    <br/> <br/>
    <button onClick={()=>navToPage('/filter')}>Go to filter</button>
    <br/> <br/>
    

    </>
}