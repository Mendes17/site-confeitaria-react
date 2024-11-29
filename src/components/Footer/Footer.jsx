import {
  StyledFooter,
  StyledSection,
  StyledUl,
  StyledH2,
  StyledTagA,
} from "./Footer.style";

function Footer() {
  return (
    <StyledFooter>
      <StyledSection>
        <StyledH2>Contatos</StyledH2>
        <p>Email: maludoces@mail.com</p>
        <p>
          Telefone: <StyledTagA href="#">+55 99 9999-9999</StyledTagA>
        </p>
      </StyledSection>

      <StyledSection>
        <StyledH2>Redes Sociais</StyledH2>
        <StyledUl>
          <li>
            <StyledTagA href="#">Facebook</StyledTagA>
          </li>
          <li>
            <StyledTagA href="#">Instagram</StyledTagA>
          </li>
          <li>
            <StyledTagA href="#">Threads</StyledTagA>
          </li>
        </StyledUl>
      </StyledSection>

      <StyledSection>
        <StyledH2>Localização</StyledH2>
        <StyledUl>
          <li>Cidade: Carapicuíba - SP</li>
          <li>Bairro: Jardim dos Doces</li>
          <li>Rua: Av. Inocêncio Seráfico, nº999</li>
          <li>
            <StyledTagA href="#">Localização Google</StyledTagA>
          </li>
        </StyledUl>
      </StyledSection>

      <StyledSection>
        <p>&copy; 2024 Malu Doces. Todos os direitos reservados.</p>
      </StyledSection>
    </StyledFooter>
  );
}

export default Footer;
