import styled from "styled-components";
import { Title } from "../../components";

export const News = () => {
  return (
    <Container>
      <Title>Noticias</Title>
      <div className="iframe-content">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBienestarEP&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          height="500"
          scrolling="no"
          frameBorder="0"
          allowFullScreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  h2 {
    margin-top: 1rem;
    font-size: 2rem;
  }
  .iframe-content {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    iframe {
      width: 340px;
      margin: auto;
    }
  }
`;
