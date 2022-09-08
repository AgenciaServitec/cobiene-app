import styled from "styled-components";
import {
  Button,
  InitialContent,
  NavigateGoToLink,
  ShowAndHiddenButton,
} from "../../../components";
import { TechniciansImg } from "../../../images";
import { campusTechniciansMilitary } from "../../../data-list";

export const TechniciansCircle = () => (
  <Container>
    <InitialContent
      img={TechniciansImg}
      title="Círculo Militar de Supervisores Técnicos y Sub Oficiales"
    />
    <div className="section-sedes">
      <h2>SEDES</h2>

      <ShowAndHiddenButton
        dataLists={campusTechniciansMilitary}
        contentAlign="center"
      />

      <Button
        width="100%"
        type="secondary"
        onClick={() =>
          NavigateGoToLink(
            "https://drive.google.com/file/d/1B2v9KxLs0xr0AfKlY-uhdikXAbqKNOk1/view?usp=sharing"
          )
        }
      >
        Ficha de Inscripción
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
  }
`;
