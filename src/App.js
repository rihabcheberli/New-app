import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Header from './components/Header';
import Products from './components/Products';
import { productData } from './components/Products/data';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Products data={productData} />
            <Footer />
        </Router>
    );
}

export default App;