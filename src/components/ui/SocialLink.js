import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialLink = ({ icon, text, link, color = "#fff" }) => {
  return (
    <Container color={color}>
      <a href={link} rel="nofollow">
        <FontAwesomeIcon icon={icon} size="2x" />
        {text}
      </a>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  ${({ color }) => css`
    margin-bottom: 1rem;
    a {
      font-size: 1.1em;
      color: ${color};
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  `}
`;
