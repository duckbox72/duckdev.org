import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const AvatarContainer = styled.div`
  padding: 4px;
  width: 240px;
  height: 240px;  
  background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
  border-radius: 50%;
  line-height: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 3px;
    width: 160px;
    height: 160px;
  }
`;

export const Avatar = styled.img`
  width:232px;
  height:232px;
  border-radius: 50%;
  border: 6px solid #121214
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 154px;
    height: 154px;
    border: 3px solid #121214
  }
 
`;

