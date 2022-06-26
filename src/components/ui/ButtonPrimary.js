import React from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const ButtonPrimary = ({ children, onClick }) => {
  return (
    <Button onClick={() => onClick()} className="btn-primary">
      {children}
    </Button>
  );
};

const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    background: #fad249;
    color: #000;
    font-size: 1.7rem;
    display: flex;
    margin: auto;
    padding: 0.5rem 4rem;

    clip-path: polygon(9% 0, 100% 0%, 91% 100%, 0% 100%);
    border: none;
    &:hover {
      background: ${darken(0.1, theme.colors.primary)};
    }

    ${mediaQuery.minTablet} {
      padding: 0.5rem 5rem;
    }
  `}
`;
