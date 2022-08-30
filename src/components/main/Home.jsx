import styled from "styled-components";
import React, { useContext, useRef } from "react";
import hero from "../../assets/banner-hero7.svg";
import Intro from "./Intro";
import { ModeProvider } from "../../Context";
import OwnerInfo from "./OwnerInfo";
import { Reviews } from "./Reviews";
import { Faq } from "./Faq";

const Home = () => {
  const { dark_mode: mode } = useContext(ModeProvider);

  let home = useRef(0).current;

  const scroller = (e) => {
    console.log(e);
    home += 1;
    console.log(home);
  };

  const Wrapper = styled.div`
    padding-top: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
    text-align: center;
    scroll-behavior: smooth;
    background-color: ${mode ? "transparent" : "#f1f1f1"};
  `;
  return (
    <Wrapper>
      <PageHero src={hero} />
      <HeroCard>
        <h2>👋 Welcome to the Pensil community</h2>
        <p>
          Makers like you join together in the Pensil community to connect and
          encourage one another, receive answers to critical questions, and
          develop vibrant communities. You'll also get early access to feature
          betas and support from the Pensil team.
        </p>
      </HeroCard>
      <Intro />
      <OwnerInfo />
      <Reviews />
      <Faq />
    </Wrapper>
  );
};

export default Home;

const PageHero = styled.img`
  width: 95%;
  margin: 0 auto;
  border-radius: 5px;
`;

const HeroCard = styled.div`
  height: 27%;
  width: 95%;
  margin: 0 auto;
  margin-top: 60px;
  padding: 10px 0 0 35px;
  color: black;
  background-color: white;
  text-align: left;
  border-radius: 5px;
  h2 {
    margin: 23px 0;
    font-size: 24px;
  }

  p {
    font-weight: 0;
  }
`;
