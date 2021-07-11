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
                    <HeaderP>Shirts</HeaderP>
                    <HeaderP>Jeans</HeaderP>
                    <HeaderP>Bags</HeaderP>
                    <HeaderP>Caps & Hats</HeaderP>
                    <HeaderP>Shoes</HeaderP>
                    <HeaderP>Grooming</HeaderP>
                </HeaderItems>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;