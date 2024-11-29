import styled from "styled-components";
import ImgDescription from '../../images/image-description.jpg'

const StyledContainer = styled.div`
border-radius: 8px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

@media(min-width: 1024px){
    display: flex;
}

`;

const StyledSection = styled.section`
width: 100%;
height: 100%;
`;

const StyledTextBox = styled.div`
padding: 8px;
font-size: 1.6rem;
display: flex;
flex-direction: column;
gap: 16px;
`

const StyledH2 = styled.h2`
font-size: 5rem;
`

const StyledImg = styled.img`
width: 100%;

@media(min-width: 1024px) {
    border-radius: 0 8px 8px 0;
}

`

function Description() {
  return (
    <StyledContainer>
      <StyledSection>
        <StyledTextBox>
        <StyledH2>Quem somos?</StyledH2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          aliquam fuga inventore assumenda ullam perferendis voluptas,
          laudantium sequi, adipisci earum alias voluptates eius dicta?
          Laboriosam obcaecati impedit ipsa ipsum ipsam?
        </p>
        </StyledTextBox>
      </StyledSection>
      <StyledSection>
        <StyledImg src={ImgDescription} alt="Imagem confeitaria" />
      </StyledSection>
    </StyledContainer>
  );
}

export default Description;
