import styled from "styled-components";
import { Swiper } from "swiper/react";

const StyledSwiper = styled(Swiper)`
  width: 100%;

  .swiper-button-next {
    color: #000;
    background-color: #fff;
    padding: 32px;
    border-radius: 50%;
  }

  .swiper-button-prev {
    color: #000;
    background-color: #fff;
    padding: 32px;
    border-radius: 50%;
  }

  @media (max-width: 720px) {
    .swiper-button-next {
      opacity: 0;
    }

    .swiper-button-prev {
      opacity: 0;
    }
  }
`;
const ImgResponsive = styled.img`
  width: 100%;
  max-width: 1280px;
`;

const StyledDiv = styled.div`
  width: 100%;
`;

export { StyledSwiper, ImgResponsive, StyledDiv };
