import styled from "styled-components";

export const MainContainer = styled.section`
  width: 100%;
  height: 1000px;
  background-color: #565264; 
  max-width: 1800px;
  margin: 3rem auto;
  display: flex;
  border-radius: 0.8rem;

  @media screen and (max-width: 1860px){
    max-width: 1600px;
  }

  @media screen and (max-width: 1660px) {
    max-width: 1200px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 800px;
  }

  @media screen and (max-width: 850px) {
    max-width: 520px;
    flex-direction: column;
  }
`;

export const MainSidebar = styled.div`
  z-index: 9;
  border-radius: 0.8rem 0 0 0.8rem;
  width: 15%;
  height: 100%;
  background-color: #49516F;
  box-shadow: 1px 5px 21px 5px rgba(0,0,0,0.74);

  @media screen and (max-width: 1200px) {
    width: 25%;
  }

  @media screen and (max-width: 850px) {
    border-radius: 0.8rem 0.8rem 0 0;
    width: 100%;
    height: 120px;
  }
`;

export const MainSidebarContent = styled.div`
  display: flex;
  flex-direction: column;

  .active{
    background-color: #282D3E;
    box-shadow: 1px 5px 21px 2px rgba(0,0,0,0.52);
    color: var(--white);
  }

  @media screen and (max-width: 850px) {
    justify-content: space-around;
    flex-direction: row;
  }
`;

export const MainSidebarItem = styled.button`
  width: 80%;
  height: 60px;
  border: none;
  font-size: 1.2rem;
  margin: 1rem auto;
  border-radius: 50px;
  background-color: #ccc;

  @media screen and (max-width: 850px) {
    width: 25%;
    height: 60px;
  }
`;

export const MainContent = styled.div`
  overflow-y: auto;
  margin: 0 auto;
  width: 85%;
  height: 100%;

  .notGame{
    text-align: center;
    margin: 12rem 2rem;
    color: #fff;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
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

export const MainContentApiAll = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 1660px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const PlatformContainer = styled.section``;

export const PlatformHeader = styled.div`
  border-radius: 0 0.8rem 0 0;
  background-color: #282D3E;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #eee;

  div button{
    margin-left: 1rem;
    width: 120px;
    padding: 0.2rem;
    border-radius: 0.8rem;
    border: none;
    cursor: pointer;
    background-color: #565264;
    color: #ccc;
    transition: 0.3s;

    &:hover{
      transform: translateY(-2px)
    }
  }

  div select{
    outline: none;
    width: 120px;
    padding: 0.2rem;
    background-color: #565264;
    border: none;
    color: #ccc;
  }
`;

export const PlatformApi = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 1660px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;