import React from "react";
import styled from "styled-components";

export const Text = ({ children, align = "center" }) => {
  return <TextContainer align={align}>{children}</TextContainer>;
};

const TextContainer = styled.h2`
  ${({ theme, align }) => css`
    color: ${theme.colors.white};
    text-align: ${align};
    font-size: 19px;
    margin: 1rem 0;
    line-height: 1.5rem;
  `}
`;
