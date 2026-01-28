import React from "react";
import styled from "styled-components";
import my from "../img/my_photo.jpg";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import coco from "../img/coco.png";
import tiger from "../img/tiger.png";
import jbnu from "../img/jbnu.png";
import cnu from "../img/cnu.png";
import bg from "../img/about.png";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px;
  color: #222;
`;

const ProfileSection = styled.section`
  text-align: center;
  margin-bottom: 60px;
  background: url(${bg});
  padding-block: 30px;
  border-radius: 15px;
  background-size: cover;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-block: 20px;
  border: 3px solid #eee;
  object-position: 50% 10%;
`;


const Name = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
  -webkit-text-stroke: 1px #333;
  color: white;
`;

const Major = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Interest = styled.p`
  font-size: 0.95rem;
  color: #777;
`;

const SocialLinks = styled.div`
  a {
    margin: 0 10px;
    text-decoration: none;
    color: #0070f3;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;


const Section = styled.section`
  margin-bottom: 50px;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 16px;
    padding-bottom: 6px;
    -webkit-text-stroke: 1px #333;
    color: white;
  }
`;

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
`;

const CharacterCard = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 20px;
  background-color: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }

  h3 {
    margin-bottom: 10px;
    font-size: 1.1rem;
  }

  p {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.6;
  }
`;


const Github = styled(FaGithubSquare)`
    color: black;
    font-size: 1.8rem;
`

const LinkedIn = styled(FaLinkedin)`
    color: #3e51de;
    font-size: 1.8rem;
`

const CharacterImg = styled.img`
    width: 50%;

`

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: #e5e7eb;
  }
`;

const EducationItem = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #7a7979;
  border-radius: 50%;
  margin-top: 6px;
  z-index: 1;
`;

const EducationCard = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 16px 20px;
  width: 100%;
  margin-left: 20px;

  display: flex;
  align-items: flex-start;
`;



const LogoWrapper = styled.div`
  width: 48px;
  min-width: 48px;
  display: flex;
  justify-content: center;
  margin: auto 0;
`;

const Logo = styled.img`
    width: 40px;
    height: auto;
    object-fit: contain;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;         
  }

  span {
    font-size: 0.85rem;
    color: #777;
    margin-left: 6px;
  }

  p {
    font-size: 0.9rem;
    color: #555;
    margin: 6px 0 0;   
  }
`;

const Intro = styled.div`
    border: 1px solid #e5e7eb;
    border-radius: 15px;
    padding: 5px 20px;
    margin-bottom: 50px;
    p{
        color: #777;
        padding: 0;
    }
    h3{
        margin: 0;
        padding : 0;
        margin: 10px 0 5px 0;
        -webkit-text-stroke: 1px #333;
        color: white;
    }
`

const Introtitle = styled.h3`
    margin: 0;
    padding : 0;
    margin: 10px 0 20px 0;
    -webkit-text-stroke: 1px #333;
    color: white;
`

const About = () => {
  return (
    <Container>
      <ProfileSection>
        <ProfileImage src={my} alt="profile" />
        <Name>Kim Dong Jun</Name>
        <SocialLinks>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github/>
          </a>
          <a href="https://www.linkedin.com/in/동준-김-215098392/" target="_blank" rel="noreferrer">
            <LinkedIn/>
          </a>
        </SocialLinks>
        <Major><strong>Major</strong> : AnimalBiotech (3.89 / 4.5) | <strong>Double Major</strong> : ComputerScience (4.4 / 4.5)</Major>
        <Interest><strong>Interests : NLP, Bioinformatics</strong></Interest>
      </ProfileSection>
    
    <Introtitle>Introduction</Introtitle>
      <Intro>
        <p>
          A researcher who moves forward slowly and steadily, with interests in NLP and bioinformatics.
        </p>
      </Intro>

        <Section>
        <h2>Education</h2>

        <EducationList>

            <EducationItem>
            <EducationCard>
                <LogoWrapper />   {/* 일부러 비워둠 */}
                <Info>
                <h4>Sungdeok High School <span>(2016 - 2019)</span></h4>
                </Info>
            </EducationCard>
            </EducationItem>


            <EducationItem>
                <EducationCard>
                    <LogoWrapper>
                    <Logo src={jbnu} />
                    </LogoWrapper>
                    <Info>
                    <h4>Jeonbuk Univ <span>(2020 - 2026)</span></h4>
                    <p>
                        Major : Animal Biotechnology (3.89 / 4.5) <br />
                        Double Major : Computer Science (4.4 / 4.5)
                    </p>
                    </Info>
                </EducationCard>
            </EducationItem>


            <EducationItem>
            <EducationCard>
                <LogoWrapper>
                    <Logo src = {cnu}/>
                </LogoWrapper>
                <Info>
                <h4>Chonnam Univ <span>(2026 - Present)</span></h4>
                <p>Research Field : Bioinformatics / NLP</p>
                </Info>
            </EducationCard>
            </EducationItem>

        </EducationList>
        </Section>

      <Section>
        <h2>My Characters</h2>
        <CharacterGrid>
          <CharacterCard>
            <h3>Coco</h3>
            <CharacterImg src = {coco}></CharacterImg>
            <p>
              A brave knight of the Coticoger World.
            </p>
          </CharacterCard>

          <CharacterCard>
            <h3>Tiger</h3>
            <CharacterImg src = {tiger}></CharacterImg>
            <p>
              An outstanding wizard of the Coticoger World.
            </p>
          </CharacterCard>
        </CharacterGrid>
      </Section>
    </Container>
  );
};

export default About;
