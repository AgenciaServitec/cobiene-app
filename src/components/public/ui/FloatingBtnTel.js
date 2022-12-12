import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const FloatingBtnTel = () => {
  return (
    <Container>
      <a href="tel:013171700">
        <FontAwesomeIcon icon={faPhone} size="lg" />
        <div className="content">
          <span>Anexo </span>
          <strong>3924</strong>
        </div>
      </a>
    </Container>
  );
};

const Container = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 1em 0.5em 1em 1em;
  border-radius: 1.5em 0 0 1.5em;

  position: fixed;
  z-index: 1000;
  bottom: 10%;
  right: 0;

  a {
    color: #fff;
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 0.5em;
  }
`;
