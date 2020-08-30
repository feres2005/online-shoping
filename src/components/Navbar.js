
import React,{Component}from 'react';

import { Link } from 'react-router-dom'
import '../index.css'






export default class navbar extends Component {
  

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                <div className="nav-header">
                   
                
                </div>
                <ul className="navbar-ul" >
                    <li>
                        <Link className="black" to="/"> home</Link>
                    </li>
                    
                  
                    <li>
                        <Link className="black" to="/cart">cart</Link>
                    </li>
                    
                </ul>
                </div> 
            </nav>
        )
    }
}

