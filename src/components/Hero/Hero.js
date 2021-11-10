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
      I have worked with a range of technologies in web development,  data-science and artificial intelligence
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis libero eget est condimentum rhoncus. Nam sed turpis lectus. Aenean molestie vehicula magna ut condimentum. Aenean faucibus sem dui, ac gravida augue cursus quis. Nam fermentum fringilla risus quis porta. Maecenas tincidunt urna at porta sollicitudin. Nulla facilisi. Nulla finibus.  
      </SectionText>
      {/* <Button onClick={() => window.location='https://google.com'}>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;