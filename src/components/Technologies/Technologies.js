import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I have worked with a range of Technologies in web development and data science
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="30px" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            JavaScript <br />
            React.js 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiFirebase size="30px" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python/Django <br />
            Node.js <br />
            SQL and No-SQL databases  
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="30px" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Tools like <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
