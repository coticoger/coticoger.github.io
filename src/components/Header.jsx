import React, { useState } from "react";
import styled from "styled-components";
import colors from "../style/colors";
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import background from "../img/bg.png";

const Wrapper = styled.header`
  width: 100%;
  height: 56px;
  background-image: url(${background});
  background-size: cover;
  background-position: 50% 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4); /* ⭐ 불투명도 조절 */
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 30px;
    background-position: 50% 0%;
  }
`;


const Title = styled.p`
  color: white;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Menu = styled.nav`
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuContent = styled.div`
  color: white;
  cursor: pointer;
  font-size: 23px;
  &:hover {
    opacity: 0.7;
  }
`;

const Hamburger = styled.div`
  display: none;
  color: white;
  font-size: 35px;
  cursor: pointer;

  line-height: 0.2;

  @media (max-width: 768px) {
    display: block;
    font-size: 20px;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 30px; 
  right: 0;  
  width: 200px;
  height: 100vh;
  background: ${colors.header};
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  z-index: 999;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenu = (path) => {
    navigate(path);
    setIsOpen(false);
  }

  return (
    <>
      <Wrapper>
        <Title onClick={() => handleMenu("/")}>Coticoger</Title>

        <Menu>
          <MenuContent onClick={() => handleMenu("/about")}>About</MenuContent>
          <MenuContent onClick={() => handleMenu("/award")} >Award</MenuContent>
          <MenuContent onClick={() => handleMenu("/project")}>Project</MenuContent>
        </Menu>

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <MdMenu />
        </Hamburger>
      </Wrapper>

      {isOpen && (
        <MobileMenu>
          <MenuContent onClick={() => handleMenu("/about")}>About</MenuContent>
          <MenuContent onClick={() => handleMenu("/award")}>Award</MenuContent>
          <MenuContent onClick={() => handleMenu("/project")}>Project</MenuContent>
        </MobileMenu>
      )}
    </>
  );
};

export default Header;