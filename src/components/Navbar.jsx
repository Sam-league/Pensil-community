import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ModeProvider } from "../Context";

const Navbar = () => {
  const { dark_mode: mode, darkmode, lightmode } = useContext(ModeProvider);
  const NavWrapper = styled.div`
    height: 14vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    /* background-color: #2b95ff; */
    border-bottom: ${mode ? "1px solid #434242" : ""};
  `;

  return (
    <NavWrapper>
      <Dashboard>
        {mode ? (
          <span onClick={lightmode}>
            <LightModeIcon style={{ fontSize: "37px", color: "#2b95ff" }} />
          </span>
        ) : (
          <span onClick={darkmode}>
            <DarkModeIcon style={{ fontSize: "37px", color: "#242424" }} />
          </span>
        )}
      </Dashboard>
      <Logo>
        <img src={logo} alt="" />
        <span>Community</span>
      </Logo>
      <SignBtn>
        <button className="signup">Sign Up</button>
        <button className="login">Login</button>
      </SignBtn>
    </NavWrapper>
  );
};

export default Navbar;

const Dashboard = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding-left: 40px;
`;

const Logo = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 50%;
  }
  span {
    margin-left: 8px;
    font-size: 39px;
    font-weight: 700;
    font-family: "Nunito Sans", sans-serif;
    text-decoration: underline;
  }
`;

const SignBtn = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  .signup {
    height: 42px;
    width: 105px;
    border: none;
    border-radius: 10px;
    background-color: #2b95ff;
    justify-content: end;
    color: white;
    font-size: 17px;
    margin-right: 20px;
    cursor: pointer;
    transition: transform 0.3s linear;

    :hover {
      background-color: #2483e1;
      transform: translateY(-6%);
    }
  }
  .login {
    height: 42px;
    width: 105px;
    border: 3px solid #2b95ff;
    background-color: transparent;
    border-radius: 10px;
    font-size: 18px;
    color: #2b95ff;
    cursor: pointer;

    transition: transform 0.3s linear;

    :hover {
      transform: translateY(-6%);
    }
  }
`;

// #2b95ff
