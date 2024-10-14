
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DarkModeIcon, HeaderWrapper, LightModeIcon } from "../Header/Header.styled";
import { ReactComponent as Logo } from "../../assets/svgs/tic-tac-toe.svg";
import { useNavigate } from "react-router-dom";
import { SoundContext } from "../../contexts/SoundContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {hoverSound, clickSound} = useContext(SoundContext);
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <Logo 
      className="logo" 
      onClick={() => {
        clickSound();
        navigate("/");
        }} 
      onMouseEnter={() => hoverSound()}
        
      />

      <span onClick={() => {
        clickSound();
        toggleTheme();
        }} 
        onMouseEnter={() => hoverSound()}
        >
      {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
      
      {/* <button onClick={() => toggleTheme()}>Toggle Theme</button> */}

    </HeaderWrapper>
  );
};

export default Header;