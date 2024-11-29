import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 32px;
`;

const StyledSection = styled.section`
  width: 100%;
  max-width: 1280px;
  font-size: 1.6rem;
`;

const StyledUl = styled.ul`
  list-style: none;
`;

const StyledH2 = styled.h2`
  margin-bottom: 16px;
`;
const StyledTagA = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
    transform-origin: bottom center;
  }
`;
export { StyledFooter, StyledSection, StyledUl, StyledH2, StyledTagA };
