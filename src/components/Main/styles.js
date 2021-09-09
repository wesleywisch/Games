import styled from "styled-components";

export const MainContainer = styled.section`
  width: 100%;
  height: 1000px;
  background-color: #565264; 
  max-width: 1800px;
  margin: 3rem auto;
  display: flex;
  border-radius: 0.8rem;
`;

export const MainSidebar = styled.div`
  border-radius: 0.8rem 0 0 0.8rem;
  width: 15%;
  height: 100%;
  background-color: #49516F;
`;

export const MainSidebarContent = styled.div`
  display: flex;
  flex-direction: column;

  .active{
    background-color: cyan;
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
`;

export const MainContent = styled.div`
  overflow-y: auto;
  margin: 0 auto;
  width: 85%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const MainContentItem = styled.div``;
