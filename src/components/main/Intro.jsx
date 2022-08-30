import React from "react";
import styled from "styled-components";
import about from "../../assets/about.jpg";
import arrow from "../../assets/arrow.svg";

const Intro = () => {
  return (
    <IntroCard>
      <h1>About</h1>
      <AboutWrapper>
        <AboutContent>
          <div>
            <img src={arrow} />
            Pensil is a community-based learning and engaging platform. With
            Pensil, people can come together for shared interests, values,
            beliefs, or causes. Pensil keeps conversations organized by Groups
            You can host the discussion, files, and anything you want to share
            with your audience.
          </div>
          <div>
            <img src={arrow} />
            With Pensil you can Bring together your discussions, memberships,
            and content.Integrate a thriving community wherever your audience
            is, all under your own brand.
          </div>
          <div>
            <img src={arrow} />
            Invite your audience to your community and engage with them. Your
            audience can join your groups, or become members of your community.
          </div>
        </AboutContent>
        <AboutImg src={about} />
      </AboutWrapper>
    </IntroCard>
  );
};

export default Intro;

const IntroCard = styled.div`
  width: 95%;
  margin: 60px auto;
  padding-top: 30px;
  height: 70vh;
  color: black;
  background-color: white;
  border-radius: 5px;

  h1 {
    font-size: 47px;
    text-decoration: underline;
    margin-bottom: 1rem;
  }
`;

const AboutWrapper = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
`;

const AboutContent = styled.div`
  height: 90%;
  width: 60%;
  /* background-color: lightskyblue; */
  padding: 0 30px 0 50px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #383838;

  div {
    position: relative;
    display: block;
  }

  img {
    position: absolute;
    /* display: inline-block; */
    height: 17px;
    width: 17px;
    transform: translate(-150%, 15%);
  }
`;

const AboutImg = styled.img`
  /* width: 40%; */
  height: 98%;
`;
