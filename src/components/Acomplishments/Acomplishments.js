import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Description', },
  { number: 1000, text: 'Description', },
  { number: 1900, text: 'Description', },
  { number: 5000, text: 'Description', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider style={{marginBottom: '1rem'}} />
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    
  </Section>
);

export default Acomplishments;
