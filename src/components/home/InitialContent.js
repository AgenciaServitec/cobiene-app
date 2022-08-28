import styled, { css } from "styled-components";
import { Text } from "../../components";

export const InitialContent = ({ img, title, description }) => {
  return (
    <Container>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <Text>{description}</Text>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;

    img {
      width: 8em;
      height: auto;
      object-fit: contain;
      margin-bottom: 1rem;
    }

    h2 {
      text-shadow: ${theme.text_shadow.shadow_green};
    }

    p {
      color: ${theme.colors.white};
      text-align: justify;
    }
  `}
`;
