import styled from "styled-components";
import { InitialContent } from "../../../../components/public";

export const VideosTutorial = () => {
  const videos = [
    {
      title: "Tutorial de uso",
      src: "https://youtube.com/embed/MbMema_cEHU",
    },
    {
      title: "Tutorial de Inscripción al sistema de COBIENE",
      src: "https://www.youtube.com/embed/XqohtxV6eVE",
    },
    {
      title: "Tutorial para IOS",
      src: "https://www.youtube.com/embed/fn67e5DMIWE",
    },
  ];

  return (
    <Container>
      <InitialContent title="Videos tutoriales" />

      {videos.map((video, index) => (
        <div className="section-iframe" key={index}>
          <h3>{video.title}</h3>
          <iframe
            width="100%"
            height="100%"
            src={video.src}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.section`
  .section-iframe {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5em 0;
    h3 {
      font-size: 1.5em;
      line-height: 1.2em;
      text-align: center;
    }
    iframe {
      width: 100%;
      max-width: 27em;
      min-height: 13em;
    }
  }
`;
