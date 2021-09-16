import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 0 0.8rem 0.8rem 0;
  padding: 30px;
  width: 100%;
  height: 100%;
  background-color: #565264;
  overflow-y: auto;

  .header{
    display: flex;

    @media screen and (max-width: 850px) {
      display: block;
    }
  }

  .dados{
    margin: 2rem 0;
  }

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
  color: #fff;
`;

export const CardShortDescription = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  color: #fff;
`;

export const CardDescription = styled.p`
  margin-right: 60px;
  color: #eee;

  @media screen and (max-width: 850px) {
    margin: 1rem auto;
  }
`;

export const CardPlatform = styled.p`
  color: #eee;
`;

export const CardGenre = styled.p`
  color: #eee;
`;

export const CardDeveloper = styled.p`
  color: #eee;
`;

export const CardReleaseData = styled.p`
  color: #eee;
`;

export const CardSystemContainer = styled.div`
  color: #ccc;

  h4{
    color: var(--white);
  }
`;

export const CardOs = styled.p``;

export const CardProcessor = styled.p``;

export const CardMemory = styled.p``;

export const CardGraphics = styled.p``;

export const CardStorage = styled.p``;

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
