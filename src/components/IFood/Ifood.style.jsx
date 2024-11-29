import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  margin: 32px 0;
`;

const StyledH2 = styled.h2`
  font-size: 5rem;
  font-family: "Spicy Rice", serif;
  margin: 8px 0;
  color: #f9fff6;
  letter-spacing: 0.2rem;
  text-align: center;
`;

const StyledBackground = styled.div`
  width: 100%;
  background-color: #c62b2b;
  border-radius: 8px;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const ImgResponsive = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0 0;

  @media (min-width: 1024px) {
    border-radius: 8px 0 0 8px;
  }
`;

const StyledSection = styled.section`
  font-size: 1.6rem;
`;

const StyledTextBox = styled.div`
  padding: 16px;
  color: #f9fff6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  @media (min-width: 1024px) {
    padding: 8px;
  }
`;

export {
  StyledContainer,
  StyledH2,
  StyledBackground,
  ImgResponsive,
  StyledSection,
  StyledTextBox,
};
