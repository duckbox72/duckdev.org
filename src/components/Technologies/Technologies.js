import React from 'react';
import { FaReact } from "react-icons/fa";
import { GiArtificialHive } from "react-icons/gi";
import { BiServer, BiData } from "react-icons/bi";

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider style={{marginBottom: '1rem', marginTop: '3rem'}} /> 
    <SectionTitle>Skills</SectionTitle>
    <List>
      <ListItem>
        <FaReact size="30px" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML/CSS <br />
            JavaScript/TypeScript <br />
            React.js <br />
            React-Native 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <BiServer size="30px" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Python <br />
            Django <br />
            Node.js <br /> 
            Express
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

      <ListItem>
        <GiArtificialHive size="30px" />
        <ListContainer>
          <ListTitle>Data Science</ListTitle>
          <ListParagraph>
            Pandas, Numpy, Scipy <br />
            Matplotlib, Seaborn <br />
            ScikitLearn, NLTK <br />
            TensorFlow
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
