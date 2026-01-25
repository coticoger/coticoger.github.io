import React from "react";
import styled, { keyframes } from "styled-components";
import background from "../img/bg.png";
import coco from "../img/coco.png";
import tiger from "../img/tiger.png";

import myPhoto from "../img/my_photo.jpg"; 

import news1 from "../news/news1.png";
import news2 from "../news/news2.jpg";
import news3 from "../news/news3.jpg";

import profilebg from "../img/profilebg.png";

const typing = keyframes`
  from { width: 0 }
  to { width: 22ch }
`;

const blink = keyframes`
  0%, 50%, 100% { border-color: transparent; }
  25%, 75% { border-color: rgba(255,255,255,0.8); }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    min-height: calc(100vh - 30px);
  }
`;

const Bg = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url(${background});
  background-size: cover;
  background-position: 50% 15%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  z-index: 1;

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  &.text {
    flex: 2;
  }
`;

const CharacterImg = styled.img`
  height: 60%;
  max-height: 200px;
  object-fit: contain;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));

  @media (max-width: 768px) {
    height: 50%;
    max-height: 80px;
    transform: translateY(10%);
  }
`;

const WelcomeText = styled.h1`
  color: white;
  font-size: 50px;
  margin: 0;
  -webkit-text-stroke: 1px #333;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  width: 0;
  border-right: 3px solid rgba(255,255,255,0.8);
  animation:
    ${typing} 2.5s steps(22) forwards,
    ${blink} 0.8s step-end infinite;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 20px;
    animation:
      ${typing} 2s steps(22) forwards,
      ${blink} 0.8s step-end infinite;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 768px) {
    padding: 40px 20px;
    gap: 50px;
  }
`;

const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  background-image: url(${profilebg});
  background-size: cover;
  background-position: 50% 15%;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 30px 20px;
  }
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
  flex-shrink: 0;
`;

const ProfileText = styled.div`
  p {
    font-size: 18px;
    line-height: 1.6;
    color: #333;
    margin-bottom: 20px;
  }

  .highlight {
    color: white;
    font-weight: bold;
    font-size: 20px;
    -webkit-text-stroke: 1px #333;
  }
`;

const NewsSection = styled.section`
  width: 100%;

  h2 {
    font-size: 28px;
    margin-bottom: 10px;
    text-align: center;
    color: white;
    -webkit-text-stroke: 1px #333;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  }

  .card-img {
    height: 180px;
    background-size: cover;
    background-position: 50% 10%;
    background-repeat: no-repeat;
  }

  .card-content {
    padding: 10px 20px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: white;
    -webkit-text-stroke: 1px #333;
  }

  p {
    font-size: 14px;
    color: #777;
    line-height: 1.5;
    margin-bottom: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span.date {
    font-size: 12px;
    color: #aaa;
  }
`;

const newsData = [
  {
    id: 1,
    title: "Admitted to M.S. Program at Chonnam National University",
    desc: "I was admitted to the Spring 2026 Master’s program and will begin my Master’s studies at BMIL Lab, Chonnam National University.",
    date: "2026.03.01",
    image: news1,
  },
  {
    id: 2,
    title: "SW Capstone Design Competition – Excellence Award (3rd Place)",
    desc: "I worked on the frontend and AI components. We developed a web app called MindTrip, which recommends personalized care content based on users' emotional states.",
    date: "2025.12.12",
    image: news2,
  },
  {
    id: 3,
    title: "SW·AI Competition (AI Track) – Silver Award",
    desc: "A challenge focused on distinguishing between human-written and AI-generated text using generative AI techniques.",
    date: "2025.06.02",
    image: news3,
  },
];

const Main = () => {
  return (
    <Wrapper>
      <Bg>
        <Section>
          <CharacterImg src={coco} />
        </Section>
        <Section className="text">
          <WelcomeText>Welcome coticoger world!</WelcomeText>
        </Section>
        <Section>
          <CharacterImg src={tiger} />
        </Section>
      </Bg>

      <ContentContainer>
        <ProfileSection>
          <ProfileImage src={myPhoto ? myPhoto : coco} />
          <ProfileText>
            <p>
              Hi there! I'm <strong className="highlight">Dongjun Kim</strong>, an
              enthusiast dedicated to NLP-powered{" "}
              <strong className="highlight">AI Drug Discovery</strong>.<br />
              My focus lies in unlocking new therapeutic targets through the
              analysis of protein sequences and molecular data.<br />
              Curious about my work? Check out my <strong>About, Award, and Project</strong>{" "}
              pages to follow my path!
            </p>
          </ProfileText>
        </ProfileSection>

        <NewsSection>
          <h2>Latest News</h2>
          <CardGrid>
            {newsData.map((news) => (
              <Card key={news.id}>
                <div
                  className="card-img"
                  style={{ backgroundImage: `url(${news.image})` }}
                />
                <div className="card-content">
                  <h3>{news.title}</h3>
                  <p>{news.desc}</p>
                  <span className="date">{news.date}</span>
                </div>
              </Card>
            ))}
          </CardGrid>
        </NewsSection>
      </ContentContainer>
    </Wrapper>
  );
};

export default Main;
