import Slider from "../../components/Swiper/Slider";
import TextBox from "../../components/TextBox/TextBox";
import Ifood from "../../components/IFood/Ifood";
import Description from "../../components/Description/Description";

function Home() {
  return (
    <>
      <Slider />
      <main>
        <TextBox />
        <Ifood />
        <Description />
      </main>
    </>
  );
}

export default Home;
