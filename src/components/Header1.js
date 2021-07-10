import React from 'react'
import './Header1.css' ;

function Header1() {
    return (
        <div className="header1">
            <div className="Left">
                <h1>Hi! <span>Sign in</span> or <span>Register</span></h1>
            </div>
            <div className="Middle">
                <h1>Daily Deals</h1>
            </div>
            <div className="Middle">
                <h1>Sell</h1>
            </div>
            <div className="Middle">
                <h1>Help & Contact</h1>
            </div>
            <div className="Right">
                <h1>Your bag </h1>
            </div>
        </div>

    )
}

export default Header1