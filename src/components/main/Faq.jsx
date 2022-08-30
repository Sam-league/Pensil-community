import React, { useRef, useState } from "react";
import styled from "styled-components";
import arrow from "../../assets/arrow.svg";

export const Faq = () => {
  const [btn, setBtn] = useState(false);
  const arrowDown = () => {
    setBtn(btn ? false : true);
  };

  const questions = [
    {
      id: 1,
      q: "Hosting on custom domain or subdomainOpen in a new window",
      ans: `Let's take iitjee.pensil.in for a demonstration.

Suppose you decide the community shall be hosted on ‘ community.ittjee.com’, these are the steps you will need to follow at your end -

Set up a CNAME record to point at our servers
Select the type as CNAME | or you can also use A Record
host/name = community address (URL)
Let us know that you have done it
We will make sure the domain then gets pointed to your community.`,
    },
    {
      id: 2,
      q: "Hosting on custom domain or subdomainOpen in a new window",
      ans: `To make the app white-label, you do the following things

Logo - You can update the community logo from community settings
Color & Theme - Pick a theme of your choice (light or dark). Pick your brand colors and your community's main buttons or links will appear as your brand color
Favicon - Small icon which you see on the browser tab is the favicon, you can share a small 32px image with us, We'll have it set it up for you.
Custom domain - Please follow these instructions to host the community on your custom domain. Hosting on custom domain or subdomain. Basically, you need to point your custom domain to the pensil community URL.
Custom Email ID: You can set your custom email id for the community notifications as well. Your members will receive all the community notification form your email id. (Paid feature)
Customize welcome message - Write or compose your welcome message from the community settings, to give more personalized onboarding experience  for your members.
White-label mobile app - Get a white label mobile application for both Android & iOS (Paid feature)
These are some basic checklists for making it Whitelabel`,
    },
  ];
  return (
    <Wrapper>
      <FAQ className={btn ? "extend" : "shrink"}>
        <Head>
          <h1>FAQ</h1>
          <img
            onClick={arrowDown}
            src={arrow}
            alt=""
            style={{ transform: btn ? "rotate(90deg)" : "rotate(180deg)" }}
          />
        </Head>

        {questions.map((ques) => {
          return (
            <Q1 className={btn ? "show" : "hide"}>
              <h3>Q. {ques.q}</h3>
              <p>{ques.ans}</p>
            </Q1>
          );
        })}
      </FAQ>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* height: 80vh; */
  .extend {
    animation: extend 1.3s ease both;
  }
  .shrink {
    animation: shrink 1.3s ease both;
  }
  @keyframes extend {
    0% {
    }
    40% {
      width: 95%;
      height: 15vh;
    }
    100% {
      width: 95%;
      height: 100vh;
    }
  }
  @keyframes shrink {
    0% {
      width: 95%;
      height: 100vh;
    }
    60% {
      width: 95%;
      height: 15vh;
    }
    100% {
      width: 30%;
      height: 15vh;
    }
  }
`;

const FAQ = styled.div`
  height: 15vh;
  width: 30%;
  margin: 100px auto;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-size: 35px;
  .hide {
    display: none;
  }
  .show,
  h3 {
    opacity: 0;
    animation: show 1s ease both;
  }
  @keyframes show {
    0% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Head = styled.div`
  margin: 20px auto;
  display: flex;
  img {
    margin-left: 50px;
    cursor: pointer;
    height: 80px;
    transition: all 0.5s ease;
  }
`;

const Q1 = styled.div`
  height: 20vh;
  width: 95%;
  margin: 0 auto;
  margin-top: 50px;
  /* background-color: cornflowerblue; */
  text-align: left;
  padding: 20px 0 0 20px;
  h3 {
    font-size: 21px;
  }
  p {
    margin-top: 10px;
    font-size: 15px;
    padding-left: 30px;
    position: relative;
  }
  p::before {
    content: "Ans. ";
    position: absolute;
    transform: translateX(-120%);
  }
`;
