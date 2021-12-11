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
      {
      "Hi, i am a self-driven passionate developer, commited to detail, who loves to continually learn and to create intelligent meanigful solutions to real world problems. " +
      "Along the way, I've worked with a number of technologies in the areas of web development and data-science, while i've developed a solid background in both, in fact. In web programming, it covers several languages, architectures, frameworks and database solutions, while in data-science it ranges from the most popular data analisys and visualization libraries, to a number of oriented to AI and machine learning libraries which my experience specially covers. " + 
      "In that spirit i'm very excited to contribute with something that really impacts on people's lives."
      }
      </SectionText>
      {/* <Button onClick={() => window.location='https://google.com'}>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;