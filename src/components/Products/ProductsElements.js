import styled from 'styled-components';

export const ProductsContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
  color: #000000;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 20px;
  line-height: 2;
  width: 300px;

  &:hover {
    background: #f3f0f0;
    transition: 0.2s ease-out;
    color: #000000;
  }
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 2px 2px 2px 2px #F3F0F0FF;
`;

export const ProductsHeading = styled.h1`
  margin-bottom: 50px;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  font-family: "Century Gothic";
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const ProductButton = styled.button`
  font-size: 15px;
  padding: 10px 30px;
  border-radius: 20px;
  background: #F62F5E;
  color: #fff;

  &:hover {
    background: #2E2E2E;
    transition: 0.2s ease-out;
    color: #ffffff;
  }
`;