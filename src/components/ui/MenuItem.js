import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export const MenuItem = ({ onClick, text }) => {
  return (
    <Container onClick={() => onClick()}>
      <div className="box-icon">
        <FontAwesomeIcon className="item-icon" icon={faBars} />
      </div>
      <div className="box-text">
        <h3>{text}</h3>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  .box-icon {
    width: 2.5rem;
    height: 2.5rem;
    background: ${({ theme }) => theme.colors.dark};
    text-align: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .item-icon {
      color: #fff;
      font-size: 0.8em;
    }
  }
  .box-text {
    display: flex;
    justify-content: start;
    align-items: center;
    h3 {
      color: ${({ theme }) => theme.colors.dark};
      margin: 0;
    }
  }
`;
