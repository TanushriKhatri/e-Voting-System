// ...existing code...
import React from 'react';


export default function Header(){
    return(
        <div>
            <h2>Election Commission</h2> 
        </div>
        
    )
}

export  function Body(){
    return(
        <div>
            <p>Welcome to the E-Voting System</p>
            <input type="text" placeholder="Enter Epic Number"></input>
            <br/>
            <button>Submit</button>
        </div>
    )
}
// ...existing code...