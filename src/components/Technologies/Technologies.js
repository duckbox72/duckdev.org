import React from 'react';
import { FaReact } from "react-icons/fa";
import { BiServer, BiData } from "react-icons/bi";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider style={{marginBottom: '1rem', marginTop: '3rem'}} /> 
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in web development,  data-science and artificial intelligence
    </SectionText>
    <List>
      <ListItem>
        <FaReact size="30px" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML/CSS <br />
            JavaScript <br />
            React.js 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <BiServer size="30px" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Python/Django <br />
            Node.js <br /> 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BiData size="30px" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            SQlite <br />
            MySql <br />
            Postgress <br />
            MongoDb
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
