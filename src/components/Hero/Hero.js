import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Avatar, AvatarContainer, LeftSection } from './HeroStyles';


const Hero = () => (
  <Section row nopadding>
    <LeftSection>
        <AvatarContainer>
          <Avatar src='/images/face_stamp.jpg'/>
        </AvatarContainer>
      <SectionTitle main center>
        Luis Felipe Klaus <br />
        Full Stack Developer
      </SectionTitle>
      <SectionText>
      {"Self-driven passionate developer, commited to detail, who loves to continuously learn and create intelligent meanigful solutions to real world problems. "}   
      <br />

      {"Solid experience working with a number of technologies in development and data-science, covering from several languages, architectures, frameworks and database solutions to the most popular data analysis and visualization libraries, as well as a number of AI and machine learning specific libraries. "}
      {"In that spirit I'm very excited to contribute with something that really impacts on people's lives."}
      
      </SectionText>
      {/* <Button onClick={() => window.location='https://google.com'}>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;