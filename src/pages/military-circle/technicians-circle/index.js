import styled from "styled-components";
import {
  Button,
  ImgCarousel,
  InitialContent,
  NavigateGoToLink,
  SocialLink,
} from "../../../components";
import { TechniciansImg } from "../../../images";
import { campusTechniciansMilitary } from "../../../data-list";
import Carousel from "antd/lib/carousel";

export const TechniciansCircle = () => (
  <Container>
    <InitialContent
      img={TechniciansImg}
      title="Círculo Militar de Supervisores Técnicos y Sub Oficiales"
    />
    <div className="section-sedes">
      {campusTechniciansMilitary.map(
        ({ title, imgCarousels, listSocialLinks }, index) => (
          <div className="item-sede" key={index}>
            <h2>{title}</h2>
            <Carousel autoplay>
              {imgCarousels.map((imgCarousel, index) => (
                <ImgCarousel key={index} image={imgCarousel} alt={title} />
              ))}
            </Carousel>

            <h3>Contactos:</h3>

            {listSocialLinks.map(({ icon, text, link }, index) => (
              <div className="social-links" key={index}>
                <SocialLink link={link} icon={icon} text={text} />
              </div>
            ))}
          </div>
        )
      )}

      <Button
        width="100%"
        type="secondary"
        onClick={() =>
          NavigateGoToLink(
            "https://drive.google.com/file/d/1ZfL2fJE6WFzoe8D9yXIzRVvoNg0ehK8U/view?usp=sharing"
          )
        }
      >
        Ficha de Inscripción - Actividad
      </Button>
      <Button
        width="100%"
        type="secondary"
        onClick={() =>
          NavigateGoToLink(
            "https://drive.google.com/file/d/1pHCoY0VK69WitX93z72zuOVhuMipBPZi/view?usp=sharing"
          )
        }
      >
        Ficha de Inscripción - Retiro
      </Button>
    </div>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: auto;
  .section-sedes {
    h2 {
      text-align: start;
    }
    .item-sede {
      padding: 1em 0;
      h3 {
        margin: 1em 0 0.5em 0;
      }
      .social-links {
        padding: 0 0.5em;
      }
    }
  }
`;
