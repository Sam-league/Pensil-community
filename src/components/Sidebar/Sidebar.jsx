import React, { useContext } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import EventIcon from "@mui/icons-material/Event";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { ModeProvider } from "../../Context";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", link: "/", icon: <HomeIcon /> },
  { name: "Events", link: "/events", icon: <EventIcon /> },
  { name: "Competition", link: "/competition", icon: <WorkspacePremiumIcon /> },
  { name: "Explore Groups", link: "/explore", icon: <Diversity3Icon /> },
];

const Sidebar = () => {
  const { dark_mode: mode } = useContext(ModeProvider);

  const Wrapper = styled.div`
    border-right: ${mode ? "2px solid #434242" : ""};
    padding: 10px 0 0 15px;
    h2 {
      margin-left: 20px;
    }
    a {
      color: white;
      text-decoration: none;
    }
  `;

  const LinkBtn = styled.div`
    height: 8%;
    width: auto;
    display: flex;
    padding-left: 20px;
    font-size: 13px;
    margin: 5px 0;
    cursor: default;
    /* transition: all 0.1s linear; */
    :hover {
      background-color: ${mode ? "#2b95ff" : "#57abff"};
      position: relative;
      width: 101%;
      border-radius: 8px 0 0 8px;
    }

    /* justify-content: space-around; */
    align-items: center;
    h2 {
      margin-left: 15px;
    }
  `;
  return (
    <Wrapper>
      {links.map((link) => {
        return (
          <NavLink to={link.link}>
            <LinkBtn>
              {link.icon}
              <h2>{link.name}</h2>
            </LinkBtn>
          </NavLink>
        );
      })}
    </Wrapper>
  );
};

export default Sidebar;
