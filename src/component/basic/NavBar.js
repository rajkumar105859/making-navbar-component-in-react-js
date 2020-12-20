import React from 'react'
import '../css/style.css'
import logos from '../images/head-img.png'

function NavBar(){
    return(
        <div className="navigation">
            <div className="navHeading">
              {/* <img src= {logos} className="head-img" alt="Not Found" /> */}
              Rajkumar
            </div>
            <ul className="list">
                <li className="list-item"><a href="" className="link-color" >Home</a></li>
                <li className="list-item"><a href="" className="link-color">Projects</a></li>
                <li className="list-item"><a href="" className="link-color">About</a></li>
            </ul>
        </div>
    )
}

export default NavBar