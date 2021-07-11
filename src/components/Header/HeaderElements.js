import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: linear-gradient(to right, #B0ADAB, #636766);
  height: 90vh;
  background-position: center;
  background-size: cover;
`;

export const HeaderContent = styled.div`
  height: 100vh;
  max-height: 100%;
  padding: 10px ;
`;

export const HeaderItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 200vh;
  max-height: 75%;
  padding: 10px 10px;
  width: 750px;
  color: #fff;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeaderH1 = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  box-shadow: 3px 3px #F62F5E;
  letter-spacing: 8px;
`;

export const HeaderP = styled.p`
  font-size: 20px;
  margin-bottom: 12px;
`;

export const HeaderBtn = styled.button`
  font-size: 20px;
  padding: 1rem 4rem;
  border-radius: 40px;
  background: #f62f5e;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #2E2E2E;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #ffffff;
  }
`;