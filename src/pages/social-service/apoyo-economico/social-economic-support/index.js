import styled from "styled-components";
import { InitialContent } from "../../../../components";

export const SocialEconomicSupport = () => {
  return (
    <Container>
      <InitialContent
        title="Ayuda Economica Social"
        description="La ayuda económica social otorga, bienes y servicios en los siguientes rubros"
      />

      <p className="content-support">
        <span>Alimentos y bebidas </span>para consumo humano (leche medicada,
        dietas hipercalórica, hipoglucémica e hipo grasa)
      </p>
      <p className="content-support">
        <span>Adquisición de material</span>, insumos, instrumental y accesorios
        médicos, quirúrgicos, odontológicos y laboratorio (silla de ruedas,
        colchón anti escaras, audífonos, lentes correctores, artículos
        ortopédicos, prótesis o parte de él, medicinas, pañales, balón de
        oxígeno)
      </p>
      <p className="content-support">
        <span>Servicios, </span>
        (educación personalizada, educación especializada, terapias integrales,
        terapias de rehabilitación, exámenes de diagnóstico especializado,
        intervenciones quirúrgicas, honorarios profesionale)
      </p>
    </Container>
  );
};

const Container = styled.section`
  .content-support {
    padding: 1em 0.7em;
    font-size: 1.1em;
    line-height: 1.3em;
    text-align: justify;
    span {
      font-weight: 900;
    }
  }
`;
