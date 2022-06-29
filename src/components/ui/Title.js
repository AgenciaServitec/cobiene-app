import React from "react";
import styled, { css } from "styled-components";

export const Title = ({ children, align = "center" }) => {
  return <TitleContainer align={align}>{children}</TitleContainer>;
};

const TitleContainer = styled.h2`
  ${({ align }) => css`
    text-align: ${align};
    line-height: 2rem;
    text-shadow: 0 0 1ex rgb(51 255 51), 0 0 2px rgb(255 255 255 / 80%);
  `}
`;
