import React from 'react';
import { AiFillGithub, AiFillYoutube} from 'react-icons/ai';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { SocialIcons } from '../Header/HeaderStyles'

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(({id, title, image, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>Description <br />
          {description}

          </CardInfo>
          <div style={{marginTop: '2rem'}} >
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>
              <AiFillYoutube size="2.5rem" style={{paddingRight: 4, paddingBottom: 2}} /> 
              <div>YouTube</div>
            </ExternalLinks>
            <ExternalLinks href={source}>
              <AiFillGithub size='2.2rem' style={{paddingRight: 4}} /> Source
            </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;