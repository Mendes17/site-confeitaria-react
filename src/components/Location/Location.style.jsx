import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px 0;
  width: 100%;
  height: 100%;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  border-radius: 8px;
`;

const FormatedButtons = styled.div`
  width: 100%;

  @media (min-width: 1025px) {
    display: flex;
  }
`;

const StyledH1 = styled.h1`
font-size: 2rem;
font-size: 5rem;
font-family: "Spicy Rice", serif;
color: pink;
letter-spacing: 0.2rem;
width: 100%;
text-align: center;
`

export { StyledContainer, StyledIframe, FormatedButtons, StyledH1 };
