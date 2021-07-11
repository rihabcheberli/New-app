import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink
} from './FooterElements';
import {Left, Middle, Nav2, NavLink} from "../Navbar/NavbarElements";

const Footer = () => {
    return (
        <FooterContainer>

            <FooterWrap>
                <Nav2>
                    <h1><Middle>Women</Middle></h1>
                    <h1><Middle>Men</Middle></h1>
                    <h1><Middle>Kids</Middle></h1>
                    <h1><Middle>Shoes</Middle></h1>
                    <h1><Middle>Brands</Middle></h1>
                </Nav2>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink><FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>

        </FooterContainer>
    );
};

export default Footer;