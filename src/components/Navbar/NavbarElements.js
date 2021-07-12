import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaShoppingBag, FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  box-sizing: content-box;
  width: 100%;
  font-size: 40px ;
  display: inline-flex;
  align-items: baseline;
  background-color: #FFFFFF;
  
  h1{
    margin-left: 5px;
    color: #2f2a2a;
    font-size: 20px;
  }
`;

export const NavLink = styled(Link)`
  color: #F62F5E;
  display: flex;
  align-items: center;
  text-decoration: none;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  color: #F62F5E;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bag=styled(FaShoppingBag)`
 font-size: 20px ;`;

export const Bars = styled(FaBars)`
  font-size: 20px;
  margin-right: 5px;
  margin-top: 2px;
  color: #F62F5E;
`;

export const Left=styled.nav`
  margin-right: 20px ;
  font-size: 20px ;`
;

export const Middle=styled.nav`
  margin-left: 100px;
`;

export const Right=styled.nav`
  margin-left: 350px;
`;

export const Nav2=styled.nav`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: baseline;
  padding: 10px;
  background-color: #2E2E2E;
  color: #ffffff;
  h1 {
    color: #ffffff;
    font-size: 20px;
    font-weight: bolder;
  }
`;