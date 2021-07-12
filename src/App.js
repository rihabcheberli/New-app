import React from 'react';
import { GlobalStyle } from './globalStyles';
import Header from './components/Header';
import Products from './components/Products';
import { productData } from './components/Products/data';
import Footer from './components/Footer';
import Login from './components/Login/Login' ;
import Register from "./components/Register/Register";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/Home">
<GlobalStyle />
<Header />
<Products data={productData} />
<Footer />
            </Route>
                <Route exact path="/Login">
                    <Login/>
                </Route>
                <Route exact path="/Register">
                    <Register />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;