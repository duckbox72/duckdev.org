import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Avatar, AvatarContainer, LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
        <AvatarContainer>
          <Avatar src='/images/face_stamp.jpg'/>
        </AvatarContainer>
      <SectionTitle main center>
        Luis Klaus <br />
        Full Stack Developer
      </SectionTitle>
      <SectionText>
      {/* 
      {"Self-driven passionate developer, committed to detail, who loves to continuously learn and create intelligent meaningful solutions to real world problems. "}   
      <br />
      {"Solid experience working with a number of technologies in development and data-science, covering from several languages, architectures, frameworks and database solutions to the most popular data analysis and visualization libraries, as well as a number of AI and machine learning specific libraries. "}
      {"In that spirit I'm very excited to contribute with something that really impacts on people's lives."}
      */}
      
      {
        "Self-driven and passionate software developer with a keen attention to detail and a commitment to continuous learning. Experienced in developing intelligent, meaningful solutions to real-world problems, with proficiency in multiple languages, architectures, frameworks, and database solutions. Skilled in data analysis and visualization using popular libraries, and adept in various AI and machine learning tools. Eager to contribute to impactful projects."
      }
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;