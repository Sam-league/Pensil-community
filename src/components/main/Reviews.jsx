import React from "react";
import anurag from "../../assets/anurag.png";
import hetal from "../../assets/hetal.png";
import abhijeet from "../../assets/abhijeet.png";
import karan from "../../assets/karan.png";
import Sheri from "../../assets/sheri.png";
import lalit from "../../assets/lalit.png";
import styled from "styled-components";

const reviews = [
  {
    id: 1,
    name: "Anurag Trivedi",
    reveiw:
      "We use the Pensil platform to interlink all our rural libraries and also to connect city volunteers with students in villages in Rural Lucknow",
    img: anurag,
  },
  {
    id: 2,
    name: "Hetal Mundra",
    reveiw: `I love the platform, ❤️❤️.
    All our students use Pensil for internal communication and academics.
    It has been awesome working with the Pensil team`,
    img: hetal,
  },
  {
    id: 3,
    name: "Abhijeet Yadav",
    reveiw:
      "I run UPSC cohorts on Pensil. It is different from other applications - it is more fun, connects everyone and lets us study together.",
    img: abhijeet,
  },
  {
    id: 4,
    name: "Karan Mehera",
    reveiw:
      "Pensil is super. We were looking to integrate with Circle based out of US but this made us change the game plan.",
    img: karan,
  },
  {
    id: 5,
    name: "Sheri Staffiery",
    reveiw:
      "I like what i see. Pensil has neat sections for different topics and i can make them on my own. Plus in-built video tool is very useful",
    img: Sheri,
  },
  {
    id: 6,
    name: "Karan Mehera",
    reveiw:
      "Pensil is super. We were looking to integrate with Circle based out of US but this made us change the game plan.",
    img: lalit,
  },
];

export const Reviews = () => {
  return (
    <Wrapper>
      <h1>What our users have been saying</h1>
      {reviews.map((r) => {
        if (r.id % 2 === 1) {
          return (
            <Line key={r.id} style={{ justifyContent: "flex-end" }}>
              <RightReview>
                <p>
                  <q>{r.reveiw}</q>
                </p>
                <NameCard>
                  <span>{r.name} </span>
                  <img src={r.img} alt="" />
                </NameCard>
              </RightReview>
            </Line>
          );
        } else {
          return (
            <Line key={r.id} style={{ justifyContent: "flex-start" }}>
              <LeftReview>
                <p>
                  <q>{r.reveiw}</q>
                </p>
                <NameCard>
                  <span>{r.name} </span>
                  <img src={r.img} alt="" />
                </NameCard>
              </LeftReview>
            </Line>
          );
        }
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: fit-content;
  width: 95%;
  margin: 120px auto;
  margin-bottom: 150px;
  h1 {
    font-size: 40px;
    margin: 100px;
  }
`;

const Line = styled.div`
  height: 19%;
  width: 100%;
  display: flex;
  margin: 60px 0;
`;

const RightReview = styled.div`
  height: 15vh;
  width: 80%;
  border-radius: 5px 5px 0 5px;
  position: relative;
  background-color: rgb(232 242 252);
  color: #0046ff;
  font-size: 18px;
  padding: 20px 30px;
  text-align: right;

  p {
    text-align: left;
  }
  q {
    font-style: italic;
    line-height: 1.3;
  }
  img {
    height: 65%;
  }
  ::after {
    content: "";
    display: inline-block;
    position: absolute;
    /* height: 1px; */
    /* width: fit-content; */
    right: 0;
    bottom: 0;
    border: 14px solid transparent;
    border-top-color: rgb(232 242 252);
    border-left-color: rgb(232 242 252);
    transform: translate(-1%, 98%) rotate(90deg);
  }
`;

const LeftReview = styled.div`
  height: 15vh;
  width: 80%;
  border-radius: 5px 5px 5px 0px;
  position: relative;
  background-color: white;
  padding: 20px 30px;
  font-size: 18px;
  color: black;
  p {
    text-align: left;
  }
  q {
    font-style: italic;
    line-height: 1.3;
  }
  img {
    height: 65%;
  }
  ::after {
    content: "";
    display: inline-block;
    position: absolute;
    /* height: 1px; */
    /* width: fit-content; */
    left: 0;
    bottom: 0;
    border: 14px solid transparent;
    border-top-color: white;
    border-left-color: white;
    transform: translate(0%, 97%) rotate(0deg);
  }
`;

const NameCard = styled.div`
  height: 60%;
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 3.5%;
  bottom: 0%;
  span {
    font-weight: 700;
    font-size: 18px;
  }
`;
