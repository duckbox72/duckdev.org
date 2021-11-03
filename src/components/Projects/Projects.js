import React from 'react';
import { AiFillGithub, AiFillYoutube} from 'react-icons/ai';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { SocialIcons } from '../Header/HeaderStyles'

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider style={{marginBottom: '-3rem'}} />
    <SectionTitle main>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(({id, title, image, description, tags, source, visit, youtube}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title="project-name" >{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo> 
            {description}
          </CardInfo>
          <div style={{marginTop: '2rem'}} >
            <TitleContent style={{fontSize: '2rem'}}>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={youtube} target="_blank">
              <AiFillYoutube style={{paddingRight: 4, paddingBottom: 2}} size='20px' /> 
              <div>YouTube</div>
            </ExternalLinks>
            <ExternalLinks href={source} target="_blank">
              <AiFillGithub style={{paddingRight: 4}} size='20px' /> Source
            </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <SectionDivider /> 
  </Section>
);

export default Projects;