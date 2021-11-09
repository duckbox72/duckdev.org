import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiPlasticDuck } from "react-icons/gi";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Title } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: 'flex', 'color': '#fff'}}>
          <GiPlasticDuck 
           size='20px' 
           style={{marginRight: 4}}
          /> <Title>duckdev</Title>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#education'>
          <NavLink>Education</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://www.github.com/duckbox72' target="_blank">
        <AiFillGithub size='30px' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/duckbox1' target="_blank">
        <AiFillLinkedin size='30px' />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/duckbox1' target="_blank">
        <AiFillInstagram size='30px' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
