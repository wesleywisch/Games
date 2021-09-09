import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 2rem auto;
  max-width: 420px;
  width: 100%;
  background-color: #282D3E;
  border-radius: 1rem;

  div{
    padding: 10px;
  }

  .platform{
    display: flex;
    justify-content: space-between;
  }
`;

export const CardThumbnail = styled.img`
  width: 100%;
  border-radius: 1rem 1rem 0 0;
`;

export const CardTitle = styled.h3`
  text-align: center;
  color: var(--white);
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  color: var(--white);
  text-align: center;
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const CardPlatform = styled.p`
  margin-bottom: 10px;
  color: #DADDE7;
`;

export const CardGenre = styled.p`
  margin-bottom: 10px;
  color: #DADDE7;
`;

export const CardDeveloper = styled.h4`
  color: #9BA3BF;
`;

export const CardReleaseData = styled.p`
  color: #ccc;
  margin-top: 10px;
`;

export const CardGame = styled.button`
  margin: 10px 10px;
  background-color: #565264;
  padding: 10px;
  border: none;
  border-radius: 30px;
  color: var(--white);
  transition: 0.3s;

  &:hover{
    transform: translateY(-2px)
  }
`;
