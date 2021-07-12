import React from 'react';
import { Nav, Nav2, NavLink, NavIcon, Bars, Left, Middle, Right, Bag } from './NavbarElements';
import Login from "../Login/Login";
import Register from "../Register/Register";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Navbar = ({ toggle }) => {
    return (<>
            <Nav>
                <Left><h1>Hi!</h1></Left>
                <Left><NavLink to="/Login">Sign in</NavLink></Left>
                <Left><h1>or</h1></Left>
                <Left><NavLink to='/Register'>Register</NavLink></Left>
                <h1><Middle>Daily Deals</Middle></h1>
                <h1><Middle>Sell</Middle></h1>
                <h1><Middle>Help & Contact</Middle></h1>
                <h1><Right><Bag />Your bag</Right></h1>
            </Nav>

            <Nav2>
                <Left><NavLink to='/Home'>SHOPMATE</NavLink></Left>
                <h1><Middle>Women</Middle></h1>
                <h1><Middle>Men</Middle></h1>
                <h1><Middle>Kids</Middle></h1>
                <h1><Middle>Shoes</Middle></h1>
                <h1><Middle>Brands</Middle></h1>
               <NavIcon onClick={toggle}>
                    <h1><Bars /></h1>
                </NavIcon>
            </Nav2>
    <Router>
            <Switch>
            <Route exact path="/Login">
                <Login />
            </Route>
                <Route exact path="/Register">
                    <Register />
                </Route>
            </Switch>
        </Router>
    </>
    );
};

export default Navbar;