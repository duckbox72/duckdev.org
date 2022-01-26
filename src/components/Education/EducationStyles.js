import styled from "styled-components";

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 2rem;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const EducationTitle = styled.h4`
  margin-top: 2rem;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 24px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`;

export const EducationParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`;

export const EducationLinks = styled.a`
font-size: 18px;
line-height: 30px;
color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
  font-size: 16px;
  line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
  font-size: 14px;
  line-height: 22px;
  text-decoration: underline;
  }

  &:hover{
      color: #fff;
  }
`;