import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 2rem auto;
  max-width: 420px;
  width: 100%;
  background-color: red;
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
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  color: var(--white);
  font-size: 1rem;
`;

export const CardPlatform = styled.p`
  color: #333;
`;

export const CardGenre = styled.p`
  color: #333;
`;

export const CardDeveloper = styled.h4`
  color: var(--white);
`;

export const CardReleaseData = styled.p`
  color: #ccc;
  margin-top: 10px;
`;

export const CardGame = styled.button`
  margin: 10px 10px;
  background-color: green;
  padding: 10px;
  border: none;
  border-radius: 30px;
  color: var(--white);
`;
