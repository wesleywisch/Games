import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 68.75rem; // 1100px
  position: relative;
  overflow: hidden;
`;

export const HeroTitle = styled.h1`
  position: relative;
  z-index: 10;
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: clamp(1.3rem, 8vw, 2.8rem);
  margin: 1rem;
  color: red;
`;

export const HeroBanner = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
`;