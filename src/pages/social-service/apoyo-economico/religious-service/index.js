import styled from "styled-components";
import { InitialContent } from "../../../../components";

export const ReligiousService = () => {
  return (
    <Container>
      <InitialContent
        title="Servicio Religioso"
        description="El Servicio Religioso por medio de la Parroquia Inmaculada Concepción del Cuartel General del Ejército, brinda su servicio a los Sres. OO, TCOS, SSCO, EECC, PTSMV y familiares; pudiendo solicitar los siguientes servicios"
      />

      <ul>
        <li>Bautismo.</li>
        <li>Confirmación.</li>
        <li>Penitencia o confesión.</li>
        <li>Eucaristía o comunión.</li>
        <li>Charla para novios padres y padrinos.</li>
        <li>Unción de los enfermos.</li>
        <li>Catequesis para el bautismo, primera comunión y confirmación.</li>
        <li>
          Misa de salud, acción de gracia, cumpleaños, aniversario de bodas y
          difuntos.
        </li>
        <li>
          Bendiciones a personas, casas, locales, vehículos e instrumentos.
        </li>
      </ul>

      <InitialContent description="Asimismo, la Villas militares  cuentan con la guía espiritual de los   Capellanes castrenses de acuerdo al siguiente detalle:" />

      <ul>
        <li>Villa militar Matellini : Parroquia San Nicolas.</li>
        <li>Villa militar las Palmas : Parroquia Virgen del Chapi.</li>
        <li>Villa militar OESTE : Parroquia Cristo Rey.</li>
        <li>Villa militar RIMAC : Parroquia Señor de la Misericordia</li>
      </ul>
    </Container>
  );
};

const Container = styled.section`
  ul {
    padding: 0.2em 1em;
    li {
      font-size: 1.2em;
    }
  }
`;
