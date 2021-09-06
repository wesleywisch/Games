import styled from "styled-components";

export const MainContainer = styled.section`
  width: 100%;
  height: 800px;
  background-color: #333;
  max-width: 1600px;
  margin: 3rem auto;
  display: flex;
`;

export const MainSidebar = styled.div`
  width: 20%;
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
  width: 80%;
  height: 100%;
`;

export const MainContentItem = styled.div``;
