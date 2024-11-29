import { StyledContainer } from "./ContactBox.style";
import ContactCake from "../../images/bolo-contatos.jpg";
import {
  WhatsappButton,
  InstagramButton,
  FacebookButton,
} from "../Buttons/Button2";

function ContactBox() {
  return (
    <StyledContainer>
      <div
        style={{
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "600px",
          maxHeight: "750px",
        }}>
        <img
          src={ContactCake}
          alt=""
          style={{ width: "100%", borderRadius: "16px 16px 0 0" }}
        />
        <h1
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "5rem",
            fontFamily: "Spicy Rice, Serif",
            color: "pink",
            letterSpacing: "0.2rem",
          }}>
          Contatos
        </h1>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
          <WhatsappButton textButton="WhatsApp"  />
          <InstagramButton textButton="Instagram" />
          <FacebookButton textButton="Facebook" />
        </div>
      </div>
    </StyledContainer>
  );
}

export default ContactBox;
