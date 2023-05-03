import { useSearchParams } from "react-router-dom";

export default function Filter(){

    const[sameer,setSameer]=useSearchParams();

    // console.warn(sameer.get('age'));
    // console.warn(sameer.get('name'));

    const name=sameer.get('name');
    const age=sameer.get('age')
 
    return(
        <div>
        <h1>Filter component</h1>
        <p>this is filter component of app</p>
        <p>this app is awesome</p>
        <h3>my name is :: {name}</h3>
        <h3>my age is :: {age}</h3>
        <button onClick={()=>setSameer({age:50})}>click to add  age in query</button>
        
        <input type="text" onChange={(e)=>setSameer({text:e.target.value,age:10})}
        placeholder="enter text in query"  />
        
        </div>

    )
    
}