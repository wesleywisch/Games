import styled from "styled-components";

export const MainContainer = styled.section`
  width: 100%;
  height: 1000px;
  background-color: #333; 
  max-width: 1800px;
  margin: 3rem auto;
  display: flex;
  overflow-y: auto;
`;

export const MainSidebar = styled.div`
  width: 15%;
  height: 100%;
  background-color: #333ccc;
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
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const MainContentItem = styled.div``;
