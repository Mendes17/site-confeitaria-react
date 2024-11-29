import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const StyledTextBox = styled.div`
  width: 100%;
  max-width: 350px;
  min-height: 500px;
  height: 100%;
  background-color: #fff;
  margin: 8px 0;
  font-size: 1.6rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #format-h1 {
    text-align: justify;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFormatTextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  gap: 8px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ResponsiveImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0 0;
`;

const StyledText = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
`;

const StyledH1 = styled.h1`
  font-size: 5rem;
  font-family: "Spicy Rice", serif;
  margin: 8px;
  color: pink;
  letter-spacing: 0.2rem;
`;
const StyledH2 = styled.h2`
  font-size: 2.4rem;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;

  .swiper-button-prev {
    opacity: 0;
  }

  .swiper-button-next {
    opacity: 0;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
`;

export {
  StyledTextBox,
  StyledContainer,
  StyledFormatTextBox,
  ResponsiveImg,
  StyledText,
  StyledH1,
  StyledH2,
  StyledSwiper,
  StyledSwiperSlide,
};
