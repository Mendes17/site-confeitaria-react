import { SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import { StyledSwiper, ImgResponsive, StyledDiv } from "./Swiper.style";

function Slider() {
  const [slidesPerview, setSlidesPerview] = useState(2);

  const slideImages = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidesPerview(1);
      } else {
        setSlidesPerview(2);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledDiv>
      <StyledSwiper
        slidesPerView={slidesPerview}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay>
        {slideImages.map((item) => (
          <SwiperSlide key={item.id}>
            <ImgResponsive src={item.image} alt="Slider" />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </StyledDiv>
  );
}

export default Slider;
