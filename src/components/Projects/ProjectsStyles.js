import styled from 'styled-components';

export const Img = styled.img`
  width:85%;
  height:85%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 16px;
  padding: 12px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`;

export const BlogCard = styled.div`
  border-radius: 12px;
  text-align: center;
  width: 400px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.03) 100%);

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.85);
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 1) 100%);
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: rgba(255, 255, 255, 0.7);
  font-style: 2rem;
  line-height: 20px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;

  color:#f5f5f5;
  font-size: 1.6rem;
  padding:1.0rem 1.8rem;
  border-radius: 50px;
  transition: 0.5s;

  &:hover{
    background: #212D45;
}
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 1.5rem;
`;

export const Tag = styled.li`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
`;