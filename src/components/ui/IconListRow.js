import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { backgrounds } from "polished";

export const IconListRow = ({ icon, link, ariaLabel, background }) => {
  return (
    <Container background={background}>
      <div className="section-icon">
        <a href={link} aria-label={ariaLabel}>
          <FontAwesomeIcon icon={icon} size="2x" />
        </a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 1em;
  .section-icon {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7em;
    border-radius: 0.5em;
    background-color: ${({ background }) => background};
    a {
      text-align: center;
      svg {
        color: #fff;
      }
    }
  }
`;
