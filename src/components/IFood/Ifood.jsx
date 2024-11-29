import imageIfood from "../../images/ifood.webp";
import { IfoodButton } from "../Buttons/Button2";
import {
  StyledContainer,
  StyledH2,
  StyledBackground,
  ImgResponsive,
  StyledSection,
  StyledTextBox,
} from "./Ifood.style";

function Ifood() {
  return (
    <StyledContainer>
      <StyledBackground>
        <StyledSection  id="ifood-section">
          <ImgResponsive src={imageIfood} alt="Imagem iFood" />
        </StyledSection>
        <StyledSection>
          <StyledH2>Malu Doces no iFood</StyledH2>
          <StyledTextBox>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              nulla tenetur obcaecati alias possimus blanditiis rem laboriosam
              iusto, adipisci sit voluptatibus ex aut porro odit? Veniam et amet
              impedit recusandae.
            </p>
            <IfoodButton textButton="Pedir agora" />
          </StyledTextBox>
        </StyledSection>
      </StyledBackground>
    </StyledContainer>
  );
}

export default Ifood;
