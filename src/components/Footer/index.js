import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <h1>Women  Kids  </h1>
                <h1>Men</h1>
                <h1>Kids</h1>
                <h1>Shoes</h1>
                <h1>Brands</h1>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>SHOPMATE</SocialLogo>
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