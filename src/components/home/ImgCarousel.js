import styled from "styled-components";

export const ImgCarousel = ({ title, image }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <img src={image} alt={title} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;

  h3 {
    font-size: 1.5rem;
    text-align: center;
  }
  img {
    width: 100%;
    height: auto;
  }
`;
