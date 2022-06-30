import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialLink = ({ icon, text, link }) => {
  return (
    <Container>
      <a href={link} rel="nofollow">
        <FontAwesomeIcon icon={icon} size="2x" />
        {text}
      </a>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 1rem;
  a {
    color: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
