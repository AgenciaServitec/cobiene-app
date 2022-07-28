import styled from "styled-components";

export const IframeFb = () => {
  return (
    <Container>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBienestarEP&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        height="500"
        style={{ width: "100%" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  iframe {
    width: 100%;
    margin: auto;
  }
`;
