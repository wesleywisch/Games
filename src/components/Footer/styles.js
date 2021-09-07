import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 80px;
  background-color: #020202;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    height: 420px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FooterTitle = styled.h1`
  color: white;
  margin: 0 3rem;

  @media screen and (max-width: 600px) {
    margin: 2rem auto;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  margin: 0 3rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FooterSocialsItem = styled.div`
  padding: 18px;
  cursor: pointer;

  &:hover{
    transform: scale(1.2);
  }

  @media screen and (max-width: 600px) {
    padding: 12px;
  }
`;

