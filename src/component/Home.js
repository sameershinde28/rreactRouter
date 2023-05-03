import {Link,useNavigate} from 'react-router-dom';

export default function Home(){
   const navigate=useNavigate();
   
   return <>
    <h1>home component</h1>
    <p>This is Home page of our awesome app</p>
    <p>we are learning react router here</p>
    <Link to="/about">Go to about page</Link>
    <br/> <br/>
    <button onClick={()=>navigate('/about')}  >Go to about</button>
    <br/> <br/>
    <button onClick={()=>navigate('/filter')}>Go to filter</button>
    <br/> <br/>
    

    </>
}