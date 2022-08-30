import React from "react";
import styled from "styled-components";
import Owner from "../../assets/Owner.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const OwnerInfo = () => {
  return (
    <Wrapper>
      <h1>Meet the Creator</h1>
      <Card>
        <OwnerImg>
          <img src={Owner} alt="" />
        </OwnerImg>
        <Ownerbio>
          <Heading>
            <h2>
              Hi there,
              <br />
              I'm Hitesh Choudhary a Teacher and Coder who is trying to solve
              some problems via{" "}
              <a
                href="https://ineuron.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                iNeuron,{" "}
              </a>
              <a
                href="https://www.learnyst.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learnyst,{" "}
              </a>
              <a
                href="https://www.pensil.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pensil{" "}
              </a>
              and{" "}
              <a
                href="https://www.findcoder.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FindCoder.
              </a>
              <br />
            </h2>
            <h2>I also create youtube videos you can checkout that too.</h2>
          </Heading>
          <SocialLinks>
            <p>You can find me on links here below :</p>
            <a href="" target="_blank" rel="noopener noreferrer">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon fontSize="large" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <TwitterIcon fontSize="large" />
            </a>
          </SocialLinks>
        </Ownerbio>
      </Card>
    </Wrapper>
  );
};

export default OwnerInfo;

const Wrapper = styled.div`
  width: 95%;
  height: 80vh;
  background-color: white;
  color: black;
  margin: 60px auto;
  border-radius: 5px;
  padding-top: 20px;

  h1 {
    font-size: 45px;
    text-decoration: underline;
    text-align: center;
  }
`;

const Card = styled.div`
  height: 75%;
  width: 93%;
  /* background-color: aliceblue; */
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
`;

const OwnerImg = styled.div`
  height: 100%;
  width: 36%;

  img {
    height: 100%;
  }
`;

const Ownerbio = styled.div`
  height: 100%;
  width: 60%;
  padding: 15px 15px;
  text-align: left;
  font-size: 17px;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    text-decoration: none;
    /* margin: 0 5px; */
    color: #2b95ff;
    :hover {
      color: #0445fe;
    }
  }
`;

const Heading = styled.div`
  height: 50%;
  width: 100%;

  h2:last-child {
    margin: 15px 0;
  }
`;

const SocialLinks = styled.div`
  height: 70px;
  width: 100%;
  /* text-align: right; */

  a {
    margin: 0 8px;
    color: #0445fe;
  }
`;
