import React from 'react';
import { Nav, Nav2, NavLink, NavIcon, Bars, Left, Middle, Right, Bag } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <Left><h1>Hi!</h1></Left>
                <Left><NavLink to='/'>Sign in</NavLink></Left>
                <Left><h1>or</h1></Left>
                <Left><NavLink to='/'>Register</NavLink></Left>
                <h1><Middle>Daily Deals</Middle></h1>
                <h1><Middle>Sell</Middle></h1>
                <h1><Middle>Help & Contact</Middle></h1>
                <h1><Right><Bag />Your bag</Right></h1>
            </Nav>

            <Nav2>
                <Left><NavLink to='/'>SHOPMATE</NavLink></Left>
                <h1><Middle>Women</Middle></h1>
                <h1><Middle>Men</Middle></h1>
                <h1><Middle>Kids</Middle></h1>
                <h1><Middle>Shoes</Middle></h1>
                <h1><Middle>Brands</Middle></h1>
               <NavIcon onClick={toggle}>
                    <h1><Bars /></h1>
                </NavIcon>
            </Nav2>
        </>
    );
};

export default Navbar;