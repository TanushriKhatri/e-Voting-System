// ...existing code...
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(){
    return(
        <div className="header">
            <h2>Election Commission</h2>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/epic-lookup">Epic Lookup</Link>
            </nav> 
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