import styled from "styled-components";

export const ImgCarousel = ({ title, image, alt = "imagen" }) => {
  return (
    <Container>
      {title && <h3>{title}</h3>}
      <div className="content-image">
        <img src={image} alt={alt} />
      </div>
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
  .content-image {
    width: 100%;
    height: 100%;
    max-height: 14em;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-height: 14em;
    }
  }
`;
