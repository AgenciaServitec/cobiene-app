import Parser from "html-react-parser";
import styled from "styled-components";

export const Samsung = () => {
  const benefits = [
    "- Otorga beneficios en productos y servicios ofrecidos por “SAMSUMG. \n",
    "- Brindara acceso a sus tienda virtual <a href='https://www.samsung.com/pe/multistore/beneficios_empleados/mediante'>https://www.samsung.com/pe/multistore/beneficios_empleados/mediante</a>  e siguiente dominio:\n",
    "- @ejercito.mil.pe\n",
    "- @escuelamilitar.edu.pe\n",
    "- @prg.edu.pe\n",
    "- @colegiodelejercitoarequipa.edu.pe\n",
    "- @nhgp.edu.pe\n",
    "- @jnep.edu.pe\n",
    "- @aacpuno.edu.pe\n",
    "- @iepmiguelcortes.edu.pe\n",
    "- @alfredobonifaz.edu.pe\n",
    "- @ete.edu.pe\n",
    "- @esge.edu.pe\n",
  ];

  return (
    <Container>
      <h2>Samsung</h2>
      <h3>ALCANCE DEL CONVENIO:</h3>
      <p>Dirigido al personal militar debidamente acreditados.</p>
      <h3>FORMA DE ACREDITACIÓN:</h3>
      <p>Presentación del carnet de identificación personal militar CIP</p>
      <h3>BENEFICIO:</h3>

      <ul>
        {benefits.map((benefit, index) => (
          <li key={index}>{Parser(benefit)}</li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  h2 {
    text-align: center;
  }
  h3 {
    font-size: 1.2em;
  }
`;
