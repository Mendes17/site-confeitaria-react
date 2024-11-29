import {
  StyledContainer,
  StyledIframe,
  FormatedButtons,
  StyledH1,
} from "./Location.style";
import { BasicButtons, IfoodButton } from "../../components/Buttons/Button2";

function Location() {
  return (
    <StyledContainer>
      <StyledH1>Nossa Localização</StyledH1>
      <StyledIframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.2886725149738!2d-46.83833032467109!3d-23.522117578826744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0105d25533d5%3A0xf3603f52ef0d47b6!2sFabrica%20de%20Bolo%20V%C3%B3%20Alzira%20Carapicuiba!5e0!3m2!1spt-BR!2sbr!4v1730231505060!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allow="fullscreen"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></StyledIframe>
      <FormatedButtons>
        <BasicButtons textButton="Contatos" />
        <IfoodButton textButton="Pedir" />
      </FormatedButtons>
    </StyledContainer>
  );
}

export default Location;
