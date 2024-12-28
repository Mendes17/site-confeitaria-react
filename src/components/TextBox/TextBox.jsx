import {
  StyledTextBox,
  StyledContainer,
  StyledFormatTextBox,
  ResponsiveImg,
  StyledText,
  StyledH1,
  StyledH2,
  StyledSwiper,
  StyledSwiperSlide,
} from "./TextBox.style";

import { BasicButtons } from "../Buttons/Button2";
import { homeDetails } from "../../server/home-details";

function TextBox() {
  return (
    <StyledContainer>
      <StyledH1>Guloseimas</StyledH1>
      <StyledFormatTextBox>
        {homeDetails.map(({ id, image, title, description }) => (
          <StyledTextBox key={id}>
            <ResponsiveImg src={image} alt={title} />
            <StyledText>
              <StyledH2>{title}</StyledH2>
              {description}
              <BasicButtons textButton="Eu quero!" />
            </StyledText>
          </StyledTextBox>
        ))}
      </StyledFormatTextBox>

      <StyledSwiper // Mostruário slide celular: t
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop={true}>
        {homeDetails.map(({id, image, title, description}) => {
          return (
            <StyledSwiperSlide key={id}>
              <StyledTextBox>
                <ResponsiveImg src={image} alt={title} />
                <StyledText>
                  <StyledH2>{title}</StyledH2>
                  {description}
                  <BasicButtons textButton="Eu quero" />
                </StyledText>
              </StyledTextBox>
            </StyledSwiperSlide>
          );
        })}
      </StyledSwiper>
    </StyledContainer>
  );
}

export default TextBox;
