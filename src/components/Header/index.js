import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
    HeaderContainer,
    HeaderContent,
    HeaderItems,
    HeaderH1,
    HeaderP,
    HeaderBtn
} from './HeaderElements';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeaderContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeaderContent>
                <HeaderItems>
                    <HeaderH1>Mens wear</HeaderH1>
                    <HeaderP>Accessories</HeaderP>
                    <HeaderP>ASOS Basic Tops</HeaderP>
                    <HeaderP>Bags</HeaderP>
                    <HeaderP>Caps & Hats</HeaderP>
                    <HeaderP>Gifts</HeaderP>
                    <HeaderP>Grooming</HeaderP>
                </HeaderItems>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;