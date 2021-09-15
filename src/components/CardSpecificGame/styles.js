import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 0 0.8rem 0.8rem 0;
  padding: 30px;
  width: 100%;
  height: 100%;
  background-color: #565264;
  overflow-y: auto;

  .swiperSlides{
    max-width: 600px;
    height: 300px;
    margin: 3rem auto;
  }

  .swiperImg{
    max-width: 600px;
    width: 100%;
    height: 300px;
  }

  .header{
    display: flex;

    @media screen and (max-width: 850px) {
      display: block;
    }
  }

  .dados{
    margin: 2rem 0;
  }

  ::-webkit-scrollbar{
    width: 5px;
    height: 6px;
    margin-top: 10px;
  }

  ::-webkit-scrollbar{
    box-shadow: inset 0 0 5px #a5aaad;
    border-radius: 0 0.8rem 0.8rem 0;
    width: 10px;
  }

  ::-webkit-scrollbar-thumb{
    height: 50px;
    background: #a5aaad;
    border-radius: 0 0.8rem 0.8rem 0;
  }

  ::-webkit-scrollbar-thumb:hover{
    background: #a5aaad;
  }
`;

export const CardThumbnail = styled.img`
  width: 380px;
  height: 380px;
  border: 1px solid #fff;

  @media screen and (max-width: 850px) {
    margin: 1rem auto;
  }
`;

export const CardTitle = styled.h3`
  text-align: center;
  margin-bottom: 0.4rem;
`;

export const CardShortDescription = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`;

export const CardDescription = styled.p`
  margin-right: 60px;

  @media screen and (max-width: 850px) {
    margin: 1rem auto;
  }
`;

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
  background-color: #282D3E;
  padding: 10px;
  border: none;
  border-radius: 30px;
  color: var(--white);
  transition: 0.3s;

  &:hover{
    transform: translateY(-2px)
  }
`;
