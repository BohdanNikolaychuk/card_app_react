import styled from 'styled-components';
import background from '../assets/images/bg-main-desktop.png';
import background1 from '../assets/images/bg-main-mobile.png';
export const AppMain = styled.div`
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1080px) {
    background-image: url(${background1});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 30%;
  }
`;

export const LeftSide = styled.div`
  width: 40%;
  background-image: url(${background});
  background-repeat: no-repeat;
  @media (max-width: 1080px) {
    background-image: none;
  }
`;

export const LeftSideCardOne = styled.img`
  position: absolute;
  top: 10%;
  left: 5%;
  @media (max-width: 1080px) {
    width: 300px;
    position: absolute;
    top: 20%;
    left: 15%;
    z-index: 1;
  }
`;

export const LeftSideCardSecond = styled.img`
  max-width: 100%;
  position: absolute;
  top: 50%;
  left: 10%;
  @media (max-width: 1080px) {
    width: 300px;
    position: absolute;
    top: 0;
    left: 30%;
  }
`;

export const LeftSideCardOneNum = styled.h1`
  position: absolute;
  top: 24%;
  left: 8%;
  color: white;
  @media (max-width: 1080px) {
    position: absolute;
    top: 30%;
    font-size: 16px;
    left: 20%;
    z-index: 2;
  }
`;

export const LeftSideCardOneName = styled.h5`
  position: absolute;
  top: 35%;
  left: 8%;
  color: white;
  @media (max-width: 1080px) {
    position: absolute;
    top: 38%;
    font-size: 10px;
    left: 17%;
    z-index: 3;
  }
`;

export const LeftSideCardOneDate = styled.h5`
  position: absolute;
  top: 35%;
  left: 29%;
  color: white;
  @media (max-width: 1080px) {
    position: absolute;
    top: 38%;
    font-size: 10px;
    left: 35%;
    z-index: 4;
  }
`;

export const LeftSideCardCVV = styled.h3`
  width:300px
  max-width: 100%;
  position: absolute;
  top: 65%;
  left: 33%;
   color: white;
     @media (max-width: 1080px) {
    position: absolute;
    top: 10%;
    font-size: 10px;
    left: 52%;
    z-index: 4;
  }
`;

export const RigthSide = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1080px) {
    height: 0;
    top: 67%;
    position: absolute;
  }
`;
