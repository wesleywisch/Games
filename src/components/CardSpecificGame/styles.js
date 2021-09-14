import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 0 0.8rem 0.8rem 0;
  padding: 30px;
  width: 100%;
  height: 100%;
  background-color: green;

  .swiperDiv{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-align: center;

    img{
      height: 600px;
    }
  }

  .header{
    display: flex;
  }

  .dados{
    margin: 2rem 0;
  }
`;

export const CardThumbnail = styled.img`
  width: 580px;
  height: 580px;
  border: 1px solid #fff;
`;

export const CardTitle = styled.h3`
  text-align: center;
  margin-bottom: 0.4rem;
`;

export const CardShortDescription = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`;

export const CardDescription = styled.p``;

export const CardPlatform = styled.p``;

export const CardGenre = styled.p``;

export const CardDeveloper = styled.p``;

export const CardReleaseData = styled.p``;

export const CardSystemContainer = styled.div``;

export const CardMinimumSystem = styled.div``;

export const CardOs = styled.div``;

export const CardProcessor = styled.div``;

export const CardMemory = styled.div``;

export const CardGraphics = styled.div``;

export const CardStorage = styled.div``;

export const CardGame = styled.button`
  width: 200px;
  margin: 30px 0;
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
